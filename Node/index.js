const express = require('express');
const connectDb = require('./Config/db');

const app=express();
app.use(express.json());
connectDb();
