import Http from "./Http-Comman"

async function getAllBooks(){
    return await Http.get("/Books")
}

async function getBookById(id){
    return await Http.get(`/Books/${id}`)
}

async function deleteBook(id){
    return await Http.delete(`/Books/${id}`)
}

async function addBook(book){
    return await Http.post(`/Books`, book)
}

async function editBook(book){
    return await Http.put(`/Books/${book._id}`, book)
}

const BookService={getBookById, getAllBooks, deleteBook, addBook, editBook}
export default BookService