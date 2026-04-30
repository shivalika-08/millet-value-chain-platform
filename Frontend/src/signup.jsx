import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";

import Userhome from "./userDashboard/Userhome";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
  });
  const [message, setMessage] = useState(null);

  const[role , setRole] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      setMessage("Please select a role");
      return;
    }

    if (formData.fullName.charAt(0) !== formData.fullName.charAt(0).toUpperCase()){
      setMessage("First letter of Firstname must be uppercase");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
      
    }


    for (let i = 0; i < formData.email.length; i++) {
      if (formData.email.charAt(i) !== formData.email.charAt(i).toLowerCase()) {
        setMessage("Email must be in lower case");
        return;
      }
    }

    try {
      const payload = {
        FullName: formData.fullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        Location: formData.location.trim(),
        role
      };

      console.log("Sending data:", payload);
      

      const API = "http://localhost:5000/api/users";

      const res = await axios.post(`${API}/signup`, payload);
      alert(res.data.message || "Account created successfully");
      setMessage(res.data.message || "Registration Successful");
      

      setFormData({
        fullName: "",
        email: "",
        password: "",
        location: "",
        role
      });
    } catch (error) {
      console.log("ERROR:", error.response?.data);
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="p-0">
        {/* Navbar */}
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-olive-500 z-50">
          <div className="flex justify-center font-serif">
            <h2>ShreeAnna.com</h2>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-20 px-4">
          <div className="text-center m-2 p-2">
            <h4 className="font-serif text-xl sm:text-2xl">
              Create an Account
            </h4>
            <p className="text-gray-600 font-roboto-slab text-sm sm:text-base">
              Join the millet value chain
            </p>
          </div>

          {/* Form Card */}
          <div className="flex justify-center">
            <div
              className="border-2 border-black bg-olive-100 rounded-lg 
                            w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
            >
              <p className="m-2 p-2">I am a,</p>

              {/* Role Selection */}
              <div className="flex flex-col sm:flex-row justify-center m-2 p-2 gap-2">
                <div
                  className={`border-2 border-black h-20 rounded-md flex flex-col justify-center text-center w-full sm:w-1/2
                ${role === "farmer" ? "bg-green-800 text-white" : "bg-white"}`}
                >
                  <div>
                    <i className="fa-solid fa-building-wheat"></i>
                    <button type="button" onClick={() => setRole("farmer")}>
                      Farmer/FPO
                    </button>
                  </div>
                </div>

                <div
                  className={`border-2 border-black h-20 rounded-md flex flex-col justify-center text-center w-full sm:w-1/2  ${role === "buyer" ? "bg-green-800 text-white" : "bg-white"}`}
                >
                  <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <button type="button" onClick={() => setRole("buyer")}>
                      Buyer/Processor
                    </button>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col m-2 p-2">
                  <label>FullName</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@.com"
                    required
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="****"
                    required
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label>Enter your Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                <div className="flex justify-center m-2 p-2">
                  <button
                    type="submit"
                    className="bg-green-800 text-white px-4 py-2 rounded w-full sm:w-auto"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-red-500 mt-2">{message}</p>
          )}

          {/* Login Link */}
          <p className="text-center m-2 p-4 text-gray-500 text-sm sm:text-base">
            Already have an account?
            <Link to={"/Login"} className="no-underline text-black ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
