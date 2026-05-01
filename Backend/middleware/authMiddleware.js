const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

const JWT_SECRET = process.env.JWT_SECRET;
const verifytoken = (req, res, next) => {
  const key = process.env.JWT_SECRET;
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  if (!token) return res.status(403).json({ message: "No token provided" });
  

  jwt.verify(token, key, (err, user) => {
    if (err)
      return res.status(401).json({ message: "Invalid or expired token" });
    req.user = user;
    next();
  });
};

module.exports = verifytoken;

module.exports=verifytoken

