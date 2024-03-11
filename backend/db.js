require('dotenv').config()
const mongoose = require('mongoose');
const mongoURI = process.env.URI;


const connectToMongo = () =>{
    try{
        mongoose.connect(mongoURI )
        console.log('Connected to mongo')
    }catch(e){
        console.log('Cant connect to mongo');
    }
   
    
}

module.exports = connectToMongo