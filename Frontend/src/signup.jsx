import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"


const Signup = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
   FullName:"",
   email:"",
   password:"",
   Location:"",
  });

  const [message, setMessage] = useState("");

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;

    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      register.FullName.charAt(0) !==
      register.FullName.charAt(0).toUpperCase()
    ) {
      setMessage("First letter of Firstname must be uppercase");
      return;
    }
   

    if (register.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }
   
    for (let i = 0; i < register.email.length; i++) {
      if (register.email.charAt(i) !== register.email.charAt(i).toLowerCase()) {
        setMessage("Email must be in lower case");
        return;
      }
    }
   
    try {
      const payload = {
        FullName: register.FullName.trim(),
        email: register.email.trim(),
        password: register.password,
        Location:register.Location.trim(),
      };

      const res = await axios.post("http://localhost:5000/insert", payload);

      setMessage(res.data.message || "Signup successful");

      setRegister({
       FullName:"",
       email:"",
       password:"",
       Location:"",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);

      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server not responding");
      }
    }
  };

  return (
    <div>
      <nav>
     

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/registration" className="nav-link active">
            Registration
          </Link>
        </div>
      </nav>

      <div className="registration-wrapper">
        <div className="registration-card">
          <div className="registration-header">
            
            
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label className="form-label">FullName</label>
              <input
                type="text"
                name="FullName"
                value={register.FullName}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="First Name"
                required
              />
            </div>

          

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={register.email}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>


     

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={register.password}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="Create password"
                required
                minLength="6"
              />
              <span className="password-hint">6+ characters required</span>
            </div>

            <div className="form-group">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="Location"
                value={register.Location}
                onChange={handleRegisterChange}
                className="form-input"
                placeholder="Enter your Location"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
             Create Account
            </button>

            <div className="login-prompt">
              <span>Already Register</span>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-secondary"
              >
                Sign In
              </button>
            </div>
          </form>

          {message && (
            <div
              className={`notification ${
                message.toLowerCase().includes("success")
                  ? "notification-success"
                  : "notification-error"
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
