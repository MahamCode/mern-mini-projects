const express = require('express')
const mongoose = require('mongoose')
const app = express()

const uri = 'mongodb+srv://practice:practicepassword@practiceclustor.tmjmp.mongodb.net/?retryWrites=true&w=majority'


async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("Connected to Mongo DB");
    } catch (error) {
        console.error(error)
    }

}
//setup a route for api 
app.get("/api",(req, res)=>{
    //backend api
    res.json({"users": ["user1", "user2", "user3"]})
})

connect();

//for startup a backend
app.listen(5000, ()=>{
    console.log("Server started at port 5000")
})



