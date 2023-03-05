import Http from "./Http-Comman"

async function getAllCategories(){
    return await Http.get("/categories")
}

async function getAllcategoryById(id){
    return await Http.get(`/categories/${id}`)
}

async function addCategory(cat){
    return await Http.post(`/categories`, cat)
}

async function deleteCategory(id){
    return await Http.delete(`/categories/${id}`)
}

async function EditCategory(cat){
    return await Http.put(`/categories/${cat._id}`, cat)
}

const categoryService={getAllCategories, addCategory, deleteCategory, getAllcategoryById, EditCategory}

export default categoryService