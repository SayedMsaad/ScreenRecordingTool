const express = require('express');
const userRout = require('./Routers/userRouter')
const cors = require('cors');
const cookieParser =require('cookie-parser');



const app = express();//express object;
const port = 5000;//port number

//middlewares
app.use(cors({
    origin:'http://localhost:3000', 
    credentials: true
}))//this allows the cross origin request from port 3000
app.use(express.json());//this middleware is used to convert json_req to object_req value.
app.use(cookieParser());
app.use('/u',userRout);//this passes all req(/u) to UserRouter

app.get('/setCookie',(req,res)=>{

    res.cookie('userName','mohdsaad');
    res.send("Cookie set");
});

app.get('/getCookie',(req,res)=>{
    const cookies=req.cookies;

    console.log(cookies);
    res.send(cookies);

})

app.listen(port,()=>{
    console.log("server started at port : "+port);
})