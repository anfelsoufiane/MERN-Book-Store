const express=require("express")
const router=express.Router()
const CategoryController=require("../controllers/CategoryController")

router.get("/",CategoryController.getAllcategories)
router.get("/:id",CategoryController.getCategoryById)
router.post("/",CategoryController.createCategory)
router.delete("/:id",CategoryController.deleteCategory)
router.put("/:id",CategoryController.EditCategory)

module.exports=router
