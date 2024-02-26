import express from 'express';
import { Server } from 'http';

const app=express();

app.listen(3000,()=>{
    console.log("Server listening with 3000 port number!")
})