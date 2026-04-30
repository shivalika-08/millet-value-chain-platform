import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res.data);


      if (res.data.token) {
        // Store data
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Redux store
        dispatch(
          addUser({
            id: res.data.user.id,
            FullName: res.data.user.FullName,
            role: res.data.user.role,
          })
        );

        // Success message
        setMessage({
          type: "success",
          message: "Login successful! Redirecting...",
        });

    
        const role = res.data.user.role;
        if (role === "farmer") {
          navigate("/Framhome");
        } else {
          navigate("/Userhome");
        }

      } else {
      
        setMessage({
          type: "danger",
          message: res.data.message || "Login failed",
        });
      }

    } catch (error) {
      setMessage({
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
              <form onSubmit={handleSubmit}>
                
                {/* Email */}
                <div className="flex flex-col m-2 p-2">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={handleChange}
                    placeholder="youremail@.com"
                    required
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col m-2 p-2">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="****"
                    required
                    className="border-2 border-black rounded-md h-10 px-2"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-center m-2 p-2">
                  <button
                    type="submit"
                    className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900 transition"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Message */}
          {message && (
            <p
              className={`text-center ${
                message.type === "danger" ? "text-red-500" : "text-green-600"
              }`}
            >
              {message.message}
            </p>
          )}

          <p className="text-center text-gray-500">
            Don't have an account?
            <Link to="/Signup" className="ml-1 text-black underline">
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