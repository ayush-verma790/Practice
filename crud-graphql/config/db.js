const mongoose = require("mongoose");
const dbConnect=()=>{
mongoose
  .connect("mongodb://localhost:27017/graph", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err.message));
}
module.exports={dbConnect};
 