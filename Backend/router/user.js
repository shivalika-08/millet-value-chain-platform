const express = require('express');
const route = express.Router();



route.post("/", async (req, res) => {
  try {
    console.log("Incoming data:", req.body); 

    const { FullName, email, password, Location } = req.body;

    const existingUser = await Profile.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new Profile({
      FullName,
      email,
      password,
      Location,
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "Signup successful",
    });

  } catch (error) {
    console.log("ERROR:", error); 
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = route;