const express=require('express');
const router=express.Router();
const {createStudentData}=require("../controllers/createStudent");
router.post("/create",createStudentData);
module.exports=router