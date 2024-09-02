const express = require('express');
const Model = require('../Models/UserModel')
const router = express.Router();
const jwt =require("jsonwebtoken"); 
require('dotenv').config();

const maxAge = 60*60*24*1;

const jwtSignature =(id)=>{

    const payload = {id};
   return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:maxAge});
  
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

    new Model(req.body).save()
    .then((result) => {
        const token = jwtSignature(result._id);
         res.cookie('jwt',token,{maxAge:maxAge*1000});
         console.log(token);
        res.status(200).json({user:result._id,token:token});
    }).catch((err) => {
        res.status(500).json({err:'error'});
        console.log(err);
    });
    
});

router.post('/authenticate',(req,res)=>{

    Model.findOne(req.body,{_id :1})
    .then((result) => {
        console.log(result);
        if(!result){
        return res.status(200).json({message:"Invalid Cred"});
        }
        return res.status(200).json({message:"Valid Cred"});

    }).catch((err) => {
        console.log(err);
        res.status(500).json({message : "Internal server error"});
    });
   
});


module.exports = router;