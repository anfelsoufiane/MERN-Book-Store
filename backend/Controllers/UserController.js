const UserService=require("../services/UserServices")

 const getAllUsers= async (req,res)=>{
   try{
      const result = await UserService.getAllUsers()
      res.status(200).json(result)
   }
   catch(error) {
      res.status(500).json({msg:"error dans get all"})
   }
 }

 const getUserById= async (req,res)=>{
   try {
      const result = await UserService.getUserById(req.params.id)
      res.status(200).json(result)
   }
   catch(error) {
      res.status(404).json({msg:"User inexistant"})
   }
 }

 const deleteUser= async (req,res)=>{
   try {
      const result = await UserService.deleteUser(req.params.id)
      res.status(200).json({msg:"User est supprime"})
   }
   catch(error) {
      res.status(404).json({msg:"User inexistant"})
   }
 }

 const createUser= async (req,res)=>{
   try{
      const result = await UserService.addUser(req.body)
      res.status(200).json({msg:"User added"})
   }
   catch(error) {
      res.status(500).json({msg:"error dans l ajout"})
   }
 }

 const editUser= async (req,res)=>{
   try{
      const result = await UserService.EditUser(req.body)
      res.status(200).json({msg:"User updated"})
   }
   catch(error) {
      console.log(error);
      res.status(500).json({msg:"error dans la modification"})
   }
 }

 module.exports={
    getAllUsers,
    getUserById,
    deleteUser,
    createUser,
    editUser
 }