const express=require('express');
const bodyparser=require('body-parser');
const {Server}=require('socket.io')

const io=new Server();
const app=express();
app.use(bodyparser.json());

io.on('connection',(socket) =>{

});

app.listen(8000,()=>{
    console.log('Http server is running on port ');
})
io.listen(8001);