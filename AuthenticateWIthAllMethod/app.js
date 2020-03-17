const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express()
const port = 3000;
const passport = require('passport');
const mongoose = require('mongoose')

//? routes Middleware 
app.use(express.json())

//? connecting to database
const url = process.env.MONGODB_URL;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {

    if (err) { 
        console.log('Error connecting to: ' + url + '. ' + err);
    } else {
        console.log('Connected to mongoDB: ' + url);
    }
});

app.listen(port,()=>{
    console.log('server is listening on port : '+port)
})