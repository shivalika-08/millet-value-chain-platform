const jwt = require("jsonwebtoken");
const { model } = require("mongoose");

const verifytoken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token provided" });
  console.log(verifytoken);

  jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid or expired token" });
      req.user = user;
      next();
  });
};
module.exports=verifytoken