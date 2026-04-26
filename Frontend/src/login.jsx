import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        localStorage.setItem("FullName",res.data.FullName)
        dispatch(addUser({
          FullName:res.data.FullName
        }))
        
        
    

        setmessage({
          type: "success",
          message: "Login successful! Redirecting...",
        });

        setTimeout(() => {
          navigate("/Framhome");
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
  <h1>\hi</h1>
  );
}

export default Login;