const express = require("express");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());



mongoose
  .connect("mongodb+srv://lovekeshsharma1999_db_user:Love@7890@cluster0.rp4d0m1.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

const profileSchema = new mongoose.Schema({

  Firstname:{
    type:String,
    required:true
  },

  Lastname:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    unique:true,
    sparse:true,
    trim:true
   },
   Address:{
    type:String,
    required:true,
   },
   

  password:{
    type:String,
    required:true
  },
    profileSchema.pre("save", async function(){
if(!this.isModified("password"))return;
        this.password = await bcrypt.hash(this.password,10);
        
    });

const profile=mongoose.model("Profille",profileSchema);
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

app.post("/insert", async (req, res) => {
  try {
    const { Firstname, Lastname, email, phone, Address, password } =
      req.body;

    const existingUser = await Profile.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = new Profile({
      Firstname,
      Lastname,
      email,
      phone,
      Address,
      password,
    });

    await user.save();

    /* TOKEN GENERATE */

    const token = jwt.sign({ id: user._id }, MY_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
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
    res.status(200).json({ success: true, message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
const port=5000;
app.lister(port,()=>{
    console.log(`Server running on port ${port}`);
}

    

