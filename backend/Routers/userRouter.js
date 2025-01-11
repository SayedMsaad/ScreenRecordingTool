const express = require('express');
const Model = require('../Models/UserModel')
const router = express.Router();
const jwt =require("jsonwebtoken"); 
require('dotenv').config();

const maxAge = 60*60*24*1;

const jwtSignature =(id,name,email)=>{

    const payload = {id,name,email};
   return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: '1h' });
  
}

router.get('/getAll',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });

});

router.post('/addUser',(req,res)=>
{
    console.log(req.body);
    const { name, email, password } = req.body;
    new Model({name,email,password}).save()
    .then((result) => {
        console.log(result);
        const token = jwtSignature(result._id,result.name,result.email);
        console.log(process.env.JWT_SECRET);
        //  res.cookie('jwt',token,{maxAge:maxAge*1000});
         console.log(token);
         res.status(200).json({token: token,
            user:{ name: result.name,
              email: result.email}
           });  
    }).catch((err) => {
        res.status(500).json({err:'error'});
        console.log(err);
    });
    
});

router.post('/authenticate',(req,res)=>{
    const { email, password } = req.body;
    console.log(process.env.JWT_SECRET);
    Model.findOne({ email: email })
    .then((user) => {
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not Found",isValid:false});
        }else{

         if(user.password == password){
         const token = jwtSignature(user._id,user.name,user.email);
         console.log(token);
        // res.cookie('jwt',token,{maxAge:maxAge*1000});
        res.status(200).json({message:"Valid Cred",isValid:true,token,user:{ name: user.name,
            email: user.email,
            }
        });
    }else{
        // console.log(err);
        return res.status(400).json({ message: "Login failed",isValid:false});
    }
    }

    }).catch((err) => {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    });
   
});


module.exports = router;