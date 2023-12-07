const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dept: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true,
    },
    stream: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: Date,
        default: Date.now(),
    }
});

module.exports=mongoose.model("Student",studentSchema);
