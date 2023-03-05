const BookService=require("../services/BookServices")

 const getAllBooks= async (req,res)=>{
   try{
      const result = await BookService.getAllBooks()
      res.status(200).json(result)
   }
   catch(error) {
      res.status(500).json({msg:"error dans get all"})
   }
 }

 const getBookById= async (req,res)=>{
   try {
      const result = await BookService.getBookById(req.params.id)
      res.status(200).json(result)
   }
   catch(error) {
      res.status(404).json({msg:"Book inexistant"})
   }
 }

 const deleteBook= async (req,res)=>{
   try {
      const result = await BookService.deleteBook(req.params.id)
      res.status(200).json({msg:"Book est supprime"})
   }
   catch(error) {
      res.status(404).json({msg:"Book inexistant"})
   }
 }

 const createBook= async (req,res)=>{
   try{
      const result = await BookService.createBook(req.body)
      res.status(200).json({msg:"Book added"})
   }
   catch(error) {
      console.log(error);
      res.status(500).json({msg:"error dans l ajout"})
   }
 }

 const editBook= async (req,res)=>{
   try{
      const result = await BookService.editBook(req.body)
      res.status(200).json({msg:"Book updated"})
   }
   catch(error) {
      res.status(500).json({msg:"error dans la modification"})
   }
 }

 module.exports={
    getAllBooks,
    getBookById,
    deleteBook,
    createBook,
    editBook
 }