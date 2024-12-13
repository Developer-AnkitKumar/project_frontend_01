import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import connectDB from "Config/db.js"; 
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
