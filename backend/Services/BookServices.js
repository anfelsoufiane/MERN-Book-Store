const Book=require("../models/Book")

const getAllBooks= async ()=>{
    return await Book.find().populate("category");
 }

const getBookById= async (id)=>{
    return await Book.findOne({_id:id});
 }

const deleteBook= async (id)=>{
    return await Book.deleteOne({_id:id});
 }

const createBook= async (book)=>{
    return await Book.create(book);
 }

 const editBook= async (book)=>{
    return await Book.findByIdAndUpdate(book._id, book);
 }

module.exports={
    getAllBooks,
    getBookById,
    deleteBook,
    createBook, 
    editBook
 }