import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("User Data:", formData);

    alert("Account Created Successfully!");
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
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
                    name="location"
                    value={formData.location}
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
