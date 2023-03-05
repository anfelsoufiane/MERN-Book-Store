const User = require("../models/User")
const bcrypt = require("bcrypt")

const getAllUsers = async ()=>{
    return await User.find()
}

const getUserById= async (id)=>{
    return await User.findOne({_id:id});
 }

const addUser = async (user)=>{
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt())
    return await User.create(user)
}

const deleteUser= async (id)=>{
    return await User.deleteOne({_id:id});
 }

 const EditUser= async (user)=>{
    if (!user.password) {
        // If the password is empty, don't update it
        return await User.findByIdAndUpdate(user._id, user);
    }

    // Hash the password and update the user
    user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
    return await User.findByIdAndUpdate(user._id, user);
 }

module.exports={getAllUsers, addUser, deleteUser, getUserById, EditUser}