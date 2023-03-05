const express=require("express")
const router=express.Router()
const BookController=require("../controllers/BookController")

router.get("/",BookController.getAllBooks)
router.get("/:id",BookController.getBookById)
router.delete("/:id",BookController.deleteBook)
router.post("/",BookController.createBook)
router.put("/:id",BookController.editBook)

module.exports=router
