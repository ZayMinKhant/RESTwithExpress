// Import required modules
const express = require('express'); 
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const UserRouter = require("./Routes/user-routes")

// migrate config.env to process.env file for security reasons
dotenv.config({ path: "./config.env" });

// Create Express app
const app = express();

const uri='mongodb+srv://zaytest:<password>@cluster.0yzski0.mongodb.net/Assignment'

// MongoDB connection
mongoose
  .connect(uri.replace("<password>", process.env.PASSWORD))
  .then((conn) => {
    console.log("Connected to database");
  });

//declare the route 
app.use("/api/v1/", UserRouter);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});