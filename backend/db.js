require('dotenv').config({path : "./.env"})
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;


const connectToMongo = () =>{
    mongoose.connect(mongoURI )
    console.log('Connected to mongo')
}

module.exports = connectToMongo