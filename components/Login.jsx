import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
export const Login = () => {
  //  use reqres to log user in.
  const [user, setUser] = useState({username:"", password:""});
    const {handleAuth, isAuth, setIsAuth} = useContext(AuthContext);
    const [token, setToken] = useState("");

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}

      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
