const mongoose = require("mongoose");

const Student = mongoose.model("Student", {
  firstName:
  {
       type:String,
       required:true,
       
  } ,
  lastName:
  { 
    type:String,
    required:true
  },

  rollno:
  { 
    type:String,
    required:true
  },
  age:
  { 
    type:String,
    required:true
  },
});

module.exports = { Student };
