const express = require('express');
const Model = require('../Models/UserModel')
const router = express.Router();

router.get('/getAll',(req,res)=>{
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
        console.log(err);
    });
    
})

router.post('/addUser',(req,res)=>
{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
    
})


module.exports = router;