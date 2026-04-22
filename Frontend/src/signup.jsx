import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    password: "",
    Location: "",
  });
  const [Message,setMessage] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.FullName.charAt(0) !== formData.FullName.charAt(0).toUpperCase()
    ) {
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
        FullName: formData.FullName.trim(),
        email: formData.email.trim(),
        password: formData.password,
        Location: formData.Location.trim(),
      };

      console.log("Sending data:", payload);

      const res = await axios.post("http://localhost:5000/signup", payload);
      alert(res.data.message || "Account created successfully");
      setMessage(res.data.message || "Registration Successful");

      setFormData({
        FullName: "",
        email: "",
        password: "",
        Location: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="p-0">
        <nav className="fixed top-0 w-full flex justify-center items-center h-16 bg-olive-500">
          <div className="flex justify-center font-serif">
            <h2>ShreeAnna.com</h2>
          </div>
        </nav>

        <div className="pt-15">
          <div className="mt-0 m-2 p-2">
            <h4 className="flex justify-center font-serif">
              Create an Account
            </h4>
            <p className="flex justify-center text-gray-600 font-roboto-slab">
              Join the millet value chain
            </p>
          </div>

          <div className="flex justify-center m-1 p-1">
            <div className="border-2 border-black h-3/4 w-3/12 bg-olive-100 rounded-lg">
              <p className="m-2 p-1">I am a,</p>

              <div className="flex justify-center m-2 p-2">
                <div className="border-2 border-black h-20 mr-2 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i class="fa-solid fa-building-wheat"></i>
                    <p>Farmer/FPO</p>
                  </div>
                </div>

                <div className="border-2 border-black h-20 ml-1 rounded-md flex flex-col justify-center text-center w-1/2">
                  <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Buyer/Processor</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col m-2 p-2">
                  <label>FullName</label>
                  <input
                    type="text"
                    name="FullName"
                    value={formData.FullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="border-2 border-black rounded-md h-10"
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
                    className="border-2 border-black rounded-md h-10"
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
                    className="border-2 border-black rounded-md h-10"
                  />
                </div>

                <div className="flex flex-col m-2 p-2">
                  <label>Enter your Location</label>
                  <input
                    type="text"
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    placeholder="City, State"
                    className="border-2 border-black rounded-md h-10"
                  />
                </div>

                <div className="flex justify-center m-2 p-1">
                  <button
                    type="submit"
                    className="bg-green-800 text-white px-4 py-2 rounded"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>

          <p className="flex justify-center m-2 p-2 text-gray-500">
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
