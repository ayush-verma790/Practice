const Student=require ('../model/student')
exports.createStudentData = async(req,res )=> {
    try{
     const {name,dept,rollno,stream}=req.body;
     const response=await Student.create({name,dept,rollno,stream});
     res.status(200).json(
        {
            sucess:true,
            data:response,
            message:"Data created Succesfully"
        }
     )
    }
    catch(error){
       res.status(500).json({
        success:false,
        message:err.message

       })
    

    }

}