const express = require('express');
const connectDb = require('./Config/db');
const PORT=3000;

const app=express();
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
 })


const createRoute=require('./routes/routes');
app.use("/api",createRoute)
connectDb();
