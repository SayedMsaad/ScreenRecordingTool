import express from 'express';
import cors from 'cors';

const app = express();

const port = 5000;

app.use(cors({
    origin:'http://localhost:3000',
}))

app.use(express.json());

app.get('/',(req,res)=>
{
    res.send("hello");
})


app.listen(port,()=>{
    console.log("server started at port : "+port);
})