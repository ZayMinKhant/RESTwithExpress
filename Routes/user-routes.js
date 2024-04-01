
const express = require("express");
const userController = require("../Controllers/users-controllers");

// get a Router() function to make routes
const userRouter = express.Router();

// create a route with :username param
userRouter.get("/users/:username", userController.getUserByUserName);

//export as userRouter to access from index.js
module.exports = userRouter;