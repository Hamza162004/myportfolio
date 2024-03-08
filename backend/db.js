const mongoose = require('mongoose');
const mongoURI = 'mongodb://0.0.0.0:27017/myPortfolio'

const connectToMongo = () =>{
    mongoose.connect(mongoURI )
    console.log('Connected to mongo')
}

module.exports = connectToMongo