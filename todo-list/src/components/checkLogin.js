import App from "../Pages/App"
import SignUp from "../Pages/SignUp"

import { useAuthContext } from "../hooks/useAuthContext";

const CheckLogin = () => {

  const { user } = useAuthContext();

  return (
    user === null ? <SignUp /> : <App />
  )
}

export default CheckLogin;