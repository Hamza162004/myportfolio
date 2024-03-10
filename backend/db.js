const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hj162004:hj162004@mydatabses.godox3i.mongodb.net/myPortfolio";


const connectToMongo = () =>{
    mongoose.connect(mongoURI )
    console.log('Connected to mongo')
}

module.exports = connectToMongo