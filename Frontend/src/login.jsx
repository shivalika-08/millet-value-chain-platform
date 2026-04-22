import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [message, setmessage] = useState(null);

  const handlechange = (e) => {
    setLogin({
      ...Login,
      [e.target.name]: e.target.value,
    });
  };

  const handleupdate = async (e) => {
    e.preventDefault(); 

    console.log("Login Data:", Login);

    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        Login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("senderemail", Login.email);
    

        setmessage({
          type: "success",
          message: "Login successful! Redirecting...",
        });

        setTimeout(() => {
          navigate("/Header");
        }, 1000);
      } else {
        setmessage({
          type: "danger",
          message: res.data.message || "Login failed",
        });
      }
    } catch (error) {
      setmessage({
        type: "danger",
        message: error.response?.data?.message || "Server error",
      });
    }
  };

  return (
    <>
      <div className="p-0">
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-olive-500">
          <h2 className="font-serif">ShreeAnna.com</h2>
        </nav>

        <div className="pt-20">
          <div className="m-2 p-2 text-center">
            <h4 className="font-serif">Welcome Back ;)</h4>
            <p className="text-gray-600">Login to your account</p>
          </div>

          <div className="flex justify-center m-2 p-2">
            <div className="border-2 border-black w-3/12 bg-olive-100 rounded-lg">
              
              {/* 🔥 form submit handle */}
              <form onSubmit={handleupdate}>
                
                {/* Email */}
                <div className="flex flex-col m-2 p-2">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handlechange}
                    placeholder="youremail@.com"
                    required
                    className="border-2 border-black rounded-md h-10"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col m-2 p-2">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"   
                    onChange={handlechange}
                    placeholder="**********"
                    required
                    className="border-2 border-black rounded-md h-10"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center m-2 p-2">
                  <button
                    type="submit"  
                    className="bg-green-800 text-white px-4 py-2 rounded"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Message */}
          {message && (
            <p className={`text-center ${message.type === "danger" ? "text-red-500" : "text-green-600"}`}>
              {message.message}
            </p>
          )}

          <p className="text-center text-gray-500">
            Don't have an account?
            <Link to="/Signup" className="ml-1 text-black">
              Signup
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;