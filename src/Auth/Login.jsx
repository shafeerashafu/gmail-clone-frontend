import { useState } from "react";
import "./Login.css";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { loginUser } from "../Services/crudApi.js";

const Login = () => {
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      if (data.code) {
        localStorage.setItem("isAuthenticated", "true");
        
        navigate("/main");
      } else {
        // stay in the same page
        
      }
    } catch (error) {
      
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/main" />;
  }

  return (
    <>
    <><p>Test Email Id : abc@gmail.com<br/>Test pwd : 123</p></>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your EmailId"
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your Password"
            required
          />
          <div className="form-footer">
            <button className="btn" type="submit">
              Login
            </button>
            <Link to="/signup">New user?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
