import { useState } from 'react';
import '../../styles/signupStyles.scss';

import { useSignup } from '../../hooks/useSignup';
import { useLogin } from '../../hooks/useLogin';

const SignUp = () => {
  const [isLogin, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUpError, signUp } = useSignup();
  const { loginError, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    isLogin ? login(email, password) : signUp(email, password);
  }


  return (
    <div className="signup__wrapper">
      <div className='signup'>
        <h1 className='signup__heading'>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className='signup__form' onSubmit={handleSubmit}>
          <div className='signup__form--group'>
            <input placeholder='Email' type="email" required onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='signup__form--group'>
            <input placeholder='Password' type="password" required onChange={e => setPassword(e.target.value)} />
          </div>
          <div>{isLogin ? loginError : signUpError}</div>
          <input className='signup__form--submit' type="submit" value={isLogin ? 'Login' : 'Sign Up'} />
        </form>
        <div className='signup__toggle' onClick={() => setLogin(prev => !prev)}>
          {isLogin ? "Don't have an account? Create One" : "Already have an account? Login"}
        </div>
      </div>
    </div>
  )
}

export default SignUp;