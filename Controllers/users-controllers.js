const UserModel =require("../models/usersmodel")

// export get user by name function to find from the database
exports.getUserByUserName = async(req,res)=>{
    try{
        // Find by username
        const userResult=await UserModel.findOne({ username: req.params.username });
        // check user result 
        if (!userResult) {
            return res.status(404).json({ error: 'User not found' });
        }
        // return user result
        res.json(userResult);

    }catch(error){
        //check the error
        console.log(error)
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
}
