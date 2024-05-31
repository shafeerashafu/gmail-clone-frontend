import { useState } from "react";
import "./Signup.css";
import { Link, useNavigate,Navigate} from "react-router-dom";
import { signupUser } from "../Services/crudApi.js";
const Signup = () => {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

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
      await signupUser({ email, password });
      navigate('/login'); 
    } catch (error) {
     
    }
    
  };

  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        
        <div className="form-footer">
          <button className="btn" type="submit">Register</button>
          <Link to="/login">Existing User?</Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup;