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


        {/* Content */}
        <div className="pt-15">
          <div className="mt-0 m-2 p-2">
            <h4 className="flex justify-center font-serif">
              Create an Account
            </h4>
            <p className="flex justify-center text-gray-600 font-roboto-slab">
              Join the millet value chain
            </p>
          </div>

          {/* Form Card */}
          <div className="flex justify-center m-1 p-1">
            <div className="border-2 border-black h-3/4 w-3/12 bg-olive-100 rounded-lg">
              <p className="m-2 p-1">I am a,</p>

              <div className="flex justify-center m-2 p-2">
                <div className="border-2 border-black h-20 mr-1 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i className="fa-solid fa-building-wheat text-xl text-amber-950"></i>
                  </div>
                    <a href={"/farmhome"} className="text-decoration-none text-black">
                      Farmer/FPO
                    </a>
                </div>

                <div className="border-2 border-black h-20 ml-1 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i className="fa-solid fa-cart-shopping text-xl text-amber-950"></i>
                  </div>
                  Buyer/Processor
                </div>
              </div>

              <form>
                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your full name"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@.com"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    placeholder="**********"
                    required
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label htmlFor="location">Enter your Location</label>
                  <input
                    type="text"
                    id="location"
                    name="loc"
                    placeholder="City, State"
                    className="border-2 border-black rounded-md h-10 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="flex justify-center m-2 p-1">
                  <button className="bg-green-800 text-white px-4 py-2 rounded">
                    Create Account
                  </button>
                </div>
              </form>

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
          {/* Login Link */}
          <p className="flex justify-center m-2 p-2 text-gray-500">
            Already have an account?
            <Link to={"/Login"} className="text-decoration-none text-black ml-1">
              Login
            </Link>
          </p>
          

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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
        </div>
      </div>

  );


export default Signup;
