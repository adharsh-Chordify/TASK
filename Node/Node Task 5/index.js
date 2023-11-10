const express= require('express')
const multer= require('multer')

const app=express()
const port=8000

app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("files"),uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files)
    res.send({message:"success"})
}


app.listen(port,()=>{
    console.log("The server is connected");
})