const express=require("express")
const cors=require("cors")
const app =express();
const multer = require("multer");

app.use(cors());
app.use(express.json())
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "./public/Images")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({storage})
  
  app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file)
  })
app.listen(3000,()=>{
    console.log("server started")
})