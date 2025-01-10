const { ErrorResponse, SuccessResponse } = require("../middleware/customMessage")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const options = require("../middleware/options");


const Register  =async(req, res,next)=>{
   try{
    const {email, password} = req.body;

    const UserExist =await User.findOne({email:req.body.email});
    if(UserExist){
      return res.status(400).json(ErrorResponse(400,"user Already Exists"))
    }else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser =  new User({
            ...req.body,
            password: hashedPassword,
            role: "user"

        });

        const user = await newUser.save();
        res.json(user) 
        return res.status(201).json(SuccessResponse(201, "Registration successful", user));
    }

   }catch(err){
    console.log(err)
       return res.status(400).json(ErrorResponse(400, err))
   }
}


const Login = async(req, res, next)=>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json(ErrorResponse(400, "User Not Found"))
        }else{
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json(ErrorResponse(400, "Invalid Email or password"))
            }else{
                const token = jwt.sign({ user:user }, process.env.JWT_SECRET, { expiresIn: '1h'});
                return res.cookie(
                    "token",
                    token,
                    options
                ).json({token, user})
            }
        }
    
    }catch(err){
        console.log(err)
        return res.status(400).json(ErrorResponse(400, err))
    }
}



module.exports={Register,Login}