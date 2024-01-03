const mongoose =require("mongoose")
const student=mongoose.model("student",{
firstName:String,
lastName:String,
age:Number,
}


)
module.exports={student};