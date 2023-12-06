const mongoose =require('mongoose')
const studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,

        },
        dept:{
            type:String,
            required:true,

        },
        rollno:{
            type:Number,
            required:true,

        },
        stream:{
            type:String,
            required:true


        },

        joiningDate:{
            type:Date,
            default:Date.now()

        }
    }
);
const student_model=model ("Student",studentSchema);
export default student_model;