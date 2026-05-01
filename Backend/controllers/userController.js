const User = require("../models/User");

const Product = require("../models/Product");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MY_SECRET_KEY = process.env.JWT_SECRET;

exports.signup = async (req, res) => {
  try {
    const { FullName, email, password, Location , role} = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
      // alert('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      FullName,
      email,
      password: hashedPassword,
      Location,
      role
    });

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login API hit:", req.body);

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
console.log(token);
    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        role: user.role,
        FullName: user.FullName
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



exports.addProduct = async (req, res) => {
  try {
    const {
      ProductName,
      MilletType,
      Variety,
      Price,
      Stock,
      Description,
    } = req.body;

    const product = new Product({
      ProductName,
      MilletType,
      Variety,
      Price,
      Stock,
      Description,
    });

    await product.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};



exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

