const express = require('express');
const { chats } = require("./data/data");
const color = require("colors")
const userRoutes = require("./routes/userRoutes")
const { notFound, ErrorHandler } = require("./middlewares/errorMiddleware")
const connectDB = require("./config/db"); // Make sure this path is correct
const dotenv = require("dotenv");

dotenv.config();
connectDB(); // Make sure this function is called correctly
const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use(notFound);
app.use(ErrorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`.yellow.bold));
