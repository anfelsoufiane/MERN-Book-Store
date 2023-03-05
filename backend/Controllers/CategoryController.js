const CategoryService=require("../services/CategoryServices")

const getAllcategories= async (req,res)=>{
   try{
      const result = await CategoryService.getAllCategories()
      res.status(200).json(result)
   }
   catch(error) {
      res.status(500).json({msg:"error dans get all categories"})
   }
}

const getCategoryById= async (req,res)=>{
   try {
      const result = await CategoryService.getCategoryById(req.params.id)
      res.status(200).json(result)
   }
   catch(error) {
      res.status(404).json({msg:"Categorie inexistant"})
   }
 }

const createCategory= async (req,res)=>{
    try{
       const result = await CategoryService.addCategory(req.body)
       res.status(200).json({msg:"la categorie ajoute"})
    }
    catch(error) {
       res.status(500).json({msg:"error dans l ajout du categorie"})
    }
}

const deleteCategory= async (req,res)=>{
   try {
      const result = await CategoryService.deleteCategory(req.params.id)
      res.status(200).json({msg:"la categorie est supprimee"})
   }
   catch(error) {
      res.status(404).json({msg:"categorie inexistante"})
   }
 }

 const EditCategory= async (req,res)=>{
   try{
      const result = await CategoryService.EditCategory(req.body)
      res.status(200).json({msg:"la categorie modifié"})
   }
   catch(error) {
      res.status(500).json({msg:"error dans la modification"})
   }
 }

module.exports={getAllcategories, createCategory, deleteCategory, EditCategory, getCategoryById}