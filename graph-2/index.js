const express=require("express");
const app=express();
const port=5000;
const mongoose =require("mongoose");
 mongoose.connect("mongodb://localhost:27017/db",{
    useNewUrlParser: true,
    'useUnifiedTopology':true
 }).then(()=>console.log("db connected"))
 .catch((err)=>console.log(err.message));

 app.listen(port, ()=> {
    console.log("Node app is running at localhost:" + app.get('port'))
});