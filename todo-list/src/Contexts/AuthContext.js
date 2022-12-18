import { createContext, useReducer, useEffect, useContext } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import LoadingContext from "./LoadingContext";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { user: action.payload, authIsReady: true }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {

  const setIsLoading = useContext(LoadingContext);

  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    setIsLoading(true);
    const unsub = onAuthStateChanged(auth, user => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
      setIsLoading(false);
      unsub();
    })
  }, []);


  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>

  )
}