const connectToMongo = require('./db');
const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('./models/User')
const cors = require('cors')


connectToMongo();
const app = express()
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Backend working")
})

app.post('/contactme',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min:3}),
    body('message','Enter a non empty message').isLength({min:1})
],(req,res)=>{

    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({Errors : result.array()})
    }

    User.create({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message,
    })

    res.status(200).json("Response was stores succesfully")

})

app.listen(port , () => {
    console.log(`Backend listening on port ${port}`)
  })