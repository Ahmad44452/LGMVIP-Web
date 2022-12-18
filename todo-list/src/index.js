import React from 'react';
import ReactDOM from 'react-dom/client';

import CheckLogin from './components/checkLogin';
import { LoadingContextProvider } from './Contexts/LoadingContext';
import { AuthContextProvider } from './Contexts/AuthContext';
import './styles/globalStyles.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingContextProvider>
      <AuthContextProvider>

        <CheckLogin />

      </AuthContextProvider>
    </LoadingContextProvider>
  </React.StrictMode>
);