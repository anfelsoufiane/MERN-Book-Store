import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CategoryService from "../../Services/CategoryServices";
import Header from "./Header"

function AddCategory() {
    const [name, setNom]=useState("")
    const [description, setDescription]=useState("")

    const nav = useNavigate()

    async function addCat(e){
        e.preventDefault()
        const cat={"name":name, "description":description}
        const res= await CategoryService.addCategory(cat)
        nav("/admin/categories")
    }

    return (
        <>
        <Header/>
        <div className="container">
            <Form onSubmit={(e)=> addCat(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" value={name} placeholder="Nom du Categorie" onChange={(e)=>setNom(e.target.value)}/>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} value={description} placeholder="Description du Categorie" onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit"> Ajouter </Button>
            </Form>
        </div>
        </>
    )
}

export default AddCategory