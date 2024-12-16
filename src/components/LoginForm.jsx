import { loginUser,verifyUser } from "../lib/auth"
import { useState } from "react"
const LoginForm  = () => {
  const [credentails, setCredentials ]= useState({});

  const login = async (e) => {
    e.preventDefault();
    let res = await loginUser(credentails.email, credentails.password);
    console.log(res);
    
  }
  return (
    <div>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="Email" onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }/>
            <input type="password" placeholder="Password" 
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }/>
            <button type="submit" onClick={login}>Login</button>
        </form>

        <button onClick={verifyUser}>Verify</button>
    </div>
  )
}

export default LoginForm