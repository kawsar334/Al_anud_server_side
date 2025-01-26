const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();

const JWT_SECRET = process.env.JWT_SECRET 


const verifyJWT = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing.' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
        console.log(err)
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }
    req.user = decoded;
    console.log(req.user)
    next();
  });
};


const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(403).json({ message: 'Access denied, token missing.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }
        req.user = decoded;
       if(req.user.role !== "admin"){
        return res.status(403).json({ message: 'Admin can access here ' });
       }
        next();
    });
};

module.exports = {
    verifyJWT, verifyAdmin
}
