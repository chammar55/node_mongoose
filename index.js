// Note:
// In this file we are doing CRUD in node and mongoose


const express = require('express')
require('./config') // this file is just telling that in which database we are currently working with
const Product=require('./product');


const app=express(); // using app out of express()
app.use(express.json()) // convert incoming data from postman into json / we use this to use req.body

app.post('/create',async (req,resp)=>{
    let data= new Product(req.body)
    let result= await data.save();
    console.log(result)
    resp.send(result)
})

app.get('/list',async (req,resp)=>{
    let data= await Product.find();
    resp.send(data)
})

app.delete('/delete/:_id',async (req,resp)=>{
    let data= await Product.deleteOne(req.params);
    // let data= await Product.deleteMany({name:req.params.name});
    resp.send(data)
})

app.put('/update/:_id',async (req,resp)=>{
    let data= await Product.updateOne(
        req.params,
        {$set:req.body}
        );
    resp.send(data)
})
// ********************** Search using regex ************************
app.get('/search/:key',async (req,resp)=>{
    console.log(req.params.key)
    let data=await Product.find({
        "$or":[
            // it will find from all the given below fields
            {name:{$regex:req.params.key}}, // 
            {brand:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    })
    resp.send(data)
})


app.listen(5000);