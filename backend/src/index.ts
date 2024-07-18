import express, {Request, Response} from 'express';
import cors from "cors";
import "dotenv/config"
import mongoose from 'mongoose';
import MyUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>
    console.log("Database connected.")
 )
const app = express();
app.use(express.json());
app.use(cors())

// const port = 7000

app.use("/api/my/user", MyUserRoute)

app.listen(5000, ()=>{
    console.log('Server Startes at localhost:');
});