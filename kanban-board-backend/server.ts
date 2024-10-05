import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './src/configs/dbConnection';
import kanbanBoardRoutes from './src/routes/kanbanBoard';
import errorHandler from './src/middlewares/errorHandler';

// Load environment variables
dotenv.config();

const app = express();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = 8000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173'
  }));
  
app.use(express.json());

// Connect to the database
dbConnection();

// Home route
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Kanban Board API',
    });
});

// Kanban board routes
app.use(kanbanBoardRoutes);

// Error handler middleware
app.use(errorHandler);

// Run server
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
