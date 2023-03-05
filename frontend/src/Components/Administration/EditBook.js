import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BookService from "../../Services/BookServices"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CategoryService from "../../Services/CategoryServices";
import Header from './Header'
import axios from "axios";

function EditBook(){
    const [name, setNom]=useState("")
    const [description, setDesc]=useState("")
    const [isbn, setIsbn]=useState("")
    const [auteur, setAuteur]=useState("")
    const [editeur, setEditeur]=useState("")
    const [dateEdition, setDateEdition]=useState()
    const [image, setImage]=useState("")
    const [price, setPrix]=useState(0)

    const {id} = useParams()
    
    async function getBook (){
       const rep = await BookService.getBookById(id)
       setNom(rep.data.name) 
       setDesc(rep.data.description) 
       setIsbn(rep.data.isbn) 
       setAuteur(rep.data.auteur) 
       setEditeur(rep.data.editeur) 
       setDateEdition(rep.data.dateEdition) 
       setImage(rep.data.image) 
       setPrix(rep.data.price) 
    }
    useEffect(() => {
        getBook()
    },[])

    const [Categories, setCategories]=useState([])
    const [selectedCat, setSelectedCat]=useState(0)

    async function getCat(){
        const res= await CategoryService.getAllCategories()
        setCategories(res.data)
    }

    useEffect(()=>{
        getCat()
    }, [])

    const nav = useNavigate()

    async function updateBook(e){
        e.preventDefault()

        const formData = new FormData();
        formData.append("file", image)
        formData.append("upload_preset", "hbzyy8tq")

        await axios.post("https://api.cloudinary.com/v1_1/ddipjb11c/image/upload", formData)
            .then(async (res)=> {
                const book={"_id":id,"name":name, "description":description, "price":price, "category":Categories[selectedCat], 
                    "isbn":isbn, "auteur":auteur, "editeur":editeur, "dateEdition":dateEdition, "image":res.data.url}
                const result= await BookService.editBook(book)
                nav("/admin/books")
            }).catch((err)=>{console.log(err);})
    }
    
    return (
            <>
            <Header/>
            <div className="container">
            <Form onSubmit={(e)=> updateBook(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control type="text" value={isbn} placeholder="ISBN du Livre" onChange={(e)=>setIsbn(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" value={name} placeholder="Nom du Livre" onChange={(e)=>setNom(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={description} placeholder="Description du Livre" onChange={(e)=>setDesc(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Auteur</Form.Label>
                    <Form.Control type="text" value={auteur} placeholder="Auteur du Livre" onChange={(e)=>setAuteur(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Editeur</Form.Label>
                    <Form.Control type="text" value={editeur} placeholder="Editeur du Livre" onChange={(e)=>setEditeur(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date d'Edition</Form.Label>
                    <Form.Control type="date" value={dateEdition} placeholder="Date d'Edition du Livre" onChange={(e)=>setDateEdition(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control type="number" value={price} placeholder="Prix du Livre" onChange={(e)=>setPrix(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setSelectedCat(e.target.value)}>
                            <option disabled selected>Selectionner une Catégorie</option>
                        {
                            Categories.map((element, index) => {
                                return <option key={index} value={index}>{element.name}</option>
                            })
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" placeholder="image du Livre" onChange={(e)=>setImage(e.target.files[0])}/>
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit"> Modifier </Button>
            </Form>
            </div>
        </>
        )
}

export default EditBook