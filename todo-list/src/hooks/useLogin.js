import { useState } from "react";
import { useAuthContext } from './useAuthContext';

// firebase imports
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setLoginError(null);
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      dispatch({ type: 'LOGIN', payload: res.user })
    }).catch(err => {
      setLoginError(err.message);
    })

  }

  return { loginError, login };
}