const mongoose=require('mongoose');
const connectDb= async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/practice',{
            useNewUrlParser: true,
        })

        console.log("connected with databse")
        // const productSchem=new mongoose.Schema({
        //     name:String,
        //     dept:String
        // })
        // const productModel=mongoose.model("product",productSchem);
        // let data=new productModel({name:"ayush",name:"Sakshi" ,dept:"IT"});
        // let result=await data.save();
        // console.log(result)
    }
    catch(error){
     console.error(error.message)
     process.exit(1);
         
    }
}
module.exports = connectDb;