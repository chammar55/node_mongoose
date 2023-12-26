// Note:
// in this file we are doing CRUD in mongoose, we are not using node or any api

const mongoose=require('mongoose')

 mongoose.connect("mongodb://localhost:27017/node-course");

const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

const saveInDB=async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=new Product({name:"iphone 4",price:1200,brand:"iphone",category:"mobile"})
    let result=await data.save();
    console.log(result);
    
    
}

const updateInDB=async ()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.updateOne(
        {name:"mad max"},
        {$set:{price:3333,name:"note 13"}}
        )
        console.log(data)
    }
    
const deleteInDB=async()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.deleteOne({name:"mad max"})
    console.log(data)

}

const findInDB=async()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.find()
    console.log(data)

}


findInDB();