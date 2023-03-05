import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CategoryService from "../../Services/CategoryServices";
import Header from "./Header"

function EditCategory() {

    const [name, setNom]=useState("")
    const [description, setDescription]=useState("")

    const {id} = useParams()
    
    async function getCat (){
       const rep = await CategoryService.getAllcategoryById(id)
       setNom(rep.data.name) 
       setDescription(rep.data.description) 
    }
    useEffect(() => {
        getCat()
    },[])

    const nav = useNavigate()

    async function updateCat(e){
        e.preventDefault()
        const cat={"_id":id, "name":name, "description":description}
        const res= await CategoryService.EditCategory(cat)
        nav("/admin/categories")
    }
    
    return (
        <>
            <Header/>
            <div className="container">
                <Form onSubmit={(e)=> updateCat(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" value={name} placeholder="Nom du Categorie" onChange={(e)=>setNom(e.target.value)}/>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} value={description} placeholder="Description du Categorie" onChange={(e)=>setDescription(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit"> Modifier </Button>
                </Form>
            </div>
        </>
        )
}

export default EditCategory