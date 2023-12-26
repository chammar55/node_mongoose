const mongoose=require('mongoose')

const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/node-course");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    })
    const ProductModel=mongoose.model('products',ProductSchema);
    let data=new ProductModel({name:"iphone 4",price:1200,brand:"iphone",category:"mobile"})
    let result=await data.save();
    console.log(result);
}

main();