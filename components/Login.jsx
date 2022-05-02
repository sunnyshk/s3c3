import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
export const Login = () => {
  //  use reqres to log user in.
  const [user, setUser] = useState({ username: "", password: "" });
  const { handleAuth, isAuth, setIsAuth } = useContext(AuthContext);
 const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const pressH = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("https://reqres.in/api/login", user);
      if (res.status !== 200) {
        throw new Error("Error logging in");
      }
      setIsAuth(true);
      navigate(-2, { replace: true });
    } catch (er) {
      alert(er.message);
    }
  };

  return (
    <form className="loginform" onSubmit={pressH}>
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
