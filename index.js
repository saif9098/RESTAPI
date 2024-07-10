
import dotenv  from  'dotenv'
import express from 'express'
import Connection from './database/db.js';
import { Register } from './controller/user-controller.js';
import cors from 'cors'


dotenv.config();

const app=express();
app.use(express.json());//middleware
app.use(cors())
app.post("/register",Register);



app.listen(5000, ()=>console.log("server is running in this port"))

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME,PASSWORD);
