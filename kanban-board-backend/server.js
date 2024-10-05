"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnection_1 = require("./src/configs/dbConnection");
const kanbanBoard_1 = __importDefault(require("./src/routes/kanbanBoard"));
const errorHandler_1 = __importDefault(require("./src/middlewares/errorHandler"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const HOST = process.env.HOST || '127.0.0.1';
const PORT = 8000;
// Middleware
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173'
}));
app.use(express_1.default.json());
// Connect to the database
(0, dbConnection_1.dbConnection)();
// Home route
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Kanban Board API',
    });
});
// Kanban board routes
app.use(kanbanBoard_1.default);
// Error handler middleware
app.use(errorHandler_1.default);
// Run server
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
