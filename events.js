//  events in node are just like the onClick() in react.

const express=require('express')
const EventEmitter=require('events') // 1st character of EventEmitter is capital because its a class  
const app=express();

const event=new EventEmitter();

let count=0;
// it will count the number of time this api called
// ita working is just like the onCLick() function in react 
event.on('countAPI',()=>{
    count++;
    console.log('event called '+count)
})

app.get('/',(req,resp)=>{
    resp.send('api called')
    event.emit('countAPI') //its calling event.on('countAPI',()=>{})
})
app.get('/search',(req,resp)=>{
    resp.send('searchapi called')
})
app.get('/update',(req,resp)=>{
    resp.send('update api called')
})

app.listen(5000)