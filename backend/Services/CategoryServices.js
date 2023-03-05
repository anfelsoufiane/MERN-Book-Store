const Category = require("../models/Category")

const getAllCategories = async ()=>{
    return await Category.find()
}

const getCategoryById= async (id)=>{
    return await Category.findOne({_id:id});
 }

const addCategory = async (cat)=>{
    return await Category.create(cat)
}

const deleteCategory= async (id)=>{
    return await Category.deleteOne({_id:id});
 }

 const EditCategory= async (cat)=>{
    return await Category.findByIdAndUpdate(cat._id, cat);
 }

module.exports={getAllCategories, addCategory, deleteCategory, getCategoryById, EditCategory}