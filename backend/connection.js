const mongoose = require('mongoose');

const url = "mongodb+srv://mohdsaad1234:2100100334sms@cluster0.68lavsh.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url).then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;
