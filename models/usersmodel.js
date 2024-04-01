const mongoose = require("mongoose");

// create a configuration for users model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    age:{
        type:Number
    },
    hobbies:{
        type:[String]
    }

});

// create a users model
const UserModel = mongoose.model('users', userSchema);

//export as user modes
module.exports = UserModel;