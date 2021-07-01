import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import auth from './route/auth.js';
import todo from './route/todo.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// Routes
const apiUrlVersion = '/api/v1';
app.use(`${apiUrlVersion}/auth`, auth);
app.use(`${apiUrlVersion}/todo`, todo);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(() => console.log("MongoDB Connected."))
.catch((error) => console.log("Error in connecting MongoDB!", error));

// Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});