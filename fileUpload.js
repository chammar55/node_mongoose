const express=require('express')
const multer=require('multer')
const app=express();

// its a middlewere
const upload=multer({
    storage:multer.diskStorage({
        // where to save the uploaded file
        destination:function(req,resp,cb){ // cb stand for call back, cb is user defined name
cb(null,'uploads')
        },
        // we can keep the original name of file or we can also change it
        filename:function(req,file,cb){
            cb(null,file.fieldname+'-'+Date.now()+'.jpg')
            // cb(null,file.originalname) //keep the original file name
        }
    })
}).single("user_file") // single mean we uploaded single file. User_file is key that we defined in postman 

app.post('/upload',upload,(req,resp)=>{
    resp.send('file uploaded')
})

app.listen(5000)