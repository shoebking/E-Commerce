import express from 'express';
import connectDB from "./config/db.js";
import bodyParser from 'body-parser';
import authRoute from './router/authRouter.js'
import categoryRoutes from './router/categoryRoutes.js'
import productRoutes from './router/productRoutes.js'
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import path from 'path';
const PORT = process.env.PORT || 8080;

//configure env
dotenv.config();

// // Connect to MongoDB Atlas
connectDB()

// Middleware
app.use(cors())
app.use(bodyParser.json());

// Routes

app.use('/api/v1/auth',authRoute);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes);
app.use(express.static(path.join(__dirname,'./client/build')))

app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


