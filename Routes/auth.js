

const express = require("express");
const { Register, Login } = require("../controllers/auth");
const route = express.Router();


const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");



route.post("/regiter",Register);
route.post("/login", Login);





module.exports = route;
