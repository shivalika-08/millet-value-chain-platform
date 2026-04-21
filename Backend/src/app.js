const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


const MY_SECRET_KEY = "1234@#$1";


mongoose
  .connect("mongodb+srv://lovekeshsharma1999_db_user:Love1234567@cluster0.rp4d0m1.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected "))
  .catch((err) => console.log("Connection error :", err.message));

const profileSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Location:{
    type:String, 
    required:true,
  }
});


profileSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
 
});


const Profile = mongoose.model("Profile", profileSchema);

const verifytoken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, MY_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};


app.post("/signup", async (req, res) => {
  try {
    console.log("Incoming data:", req.body); 

    const { FullName, email, password, Location } = req.body;

    const existingUser = await Profile.findOne({ email });
    console.log("Existing user:", existingUser); 

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
    console.log("User saved:", user); 

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


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const user = await Profile.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, MY_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
