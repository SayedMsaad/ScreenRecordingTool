const jwt = require("jsonwebtoken");
const Model = require('../Models/UserModel');
require("dotenv").config();

const Secret=process.env.JWT_SECRET;

const requireAuth = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers["x-auth-token"];
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODI5Mzc3OTc1OWFlYmIzZjQ5NDVjZiIsIm5hbWUiOiJNb2hkIHNhYWQiLCJlbWFpbCI6ImpAZ21haWwuY29tIiwiaWF0IjoxNzM2NjEwNzQwLCJleHAiOjE3MzY2MTQzNDB9.-WdIoQDb-VMvZlVRZh4vJn49kBtghb6Iw7bg4qD0F30";
    
    if (token) {
      jwt.verify(token,Secret,(err, payload) => {
        if (err) {
        console.log(process.env.JWT_SECRET)
          console.log("verify err", err);
          // return res.redirect('/login');
          return res.status(400).json({ message: "Unauthorized access" });
        } else {
          console.log(payload);
  
          Model.findById(payload.id)
            .select("-password")
            .then((result) => {
              req.user = result; //this add a ob which has all the info of the user.
              next();
            })
            .catch((err) => {
              console.log(err);
              return res.status(404).json({ message: "No User Found" });
            });
          // req.user = decodedToken; //this add a ob which has all the info of the user.
          // next();
        }
      });
    } else {
      console.log("redirected with no token found");
      return res
        .status(401)
        .json({ message: "No Token Found,authorization denied" }); //giving 401 as response to check in frontend for lient side routing.
      //    return res.redirect('/signup');this does not work as axios does not allow server side redirects treats them as 400 request and only take 200 req
    }
  };

  module.exports = { requireAuth };