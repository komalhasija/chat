import {Server} from "socket.io";
import http from "http";
import express from "express";

const app=express();
const server=http.createServer(app);
const io=new Server(server,{
    cors:{
        origin:['http://localhost:513'],
        methods:['GET','POST']
    },
})
io.on('connection',(socket)=>{
    console.log('user connected',socket.io);
})
export {app,io,server};