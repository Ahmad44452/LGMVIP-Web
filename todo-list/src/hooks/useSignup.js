import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

// firebase imports
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [signUpError, setSignUpError] = useState(null);
  const { dispatch } = useAuthContext();

  const signUp = (email, password) => {
    setSignUpError(null);
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      dispatch({ type: 'LOGIN', payload: res.user });
    }).catch(err => {
      setSignUpError(err.message);
    })

  }

  return { signUpError, signUp };
}