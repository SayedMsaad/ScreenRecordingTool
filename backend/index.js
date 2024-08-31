const express = require('express');

const userRout = require('./Routers/userRouter')

const cors = require('cors');


const app = express();

const port = 5000;

app.use(cors({
    origin:'http://localhost:3000',
}))

app.use(express.json());

app.use('/u',userRout);

app.listen(port,()=>{
    console.log("server started at port : "+port);
})