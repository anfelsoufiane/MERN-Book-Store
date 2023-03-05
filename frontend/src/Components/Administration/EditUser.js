import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserService from "../../Services/UserServices";
import Header from "./Header"

function EditUser() {

    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")

    const {id} = useParams()
    
    async function getUser (){
       const rep = await UserService.getUserById(id)
       setFirstName(rep.data.firstName) 
       setLastName(rep.data.lastName) 
       setEmail(rep.data.email) 
    }
    useEffect(() => {
        getUser()
    },[])

    const nav = useNavigate()

    async function updateUser(e){
        e.preventDefault()
        const user={"_id":id, "firstName":firstName, "lastName":lastName,"email":email}
        const res= await UserService.EditUser(user)
        nav("/admin/users")
    }
    
    return (
        <>
            <Header/>
            <div className="container">
                <Form onSubmit={(e)=> updateUser(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Prenom</Form.Label>
                        <Form.Control type="text" value={firstName} placeholder="Prénom du Responsable" onChange={(e)=>setFirstName(e.target.value)}/>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" value={lastName} placeholder= "Nom du Responsable" onChange={(e)=>setLastName(e.target.value)}/>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} placeholder="Email du Responsable" onChange={(e)=>setEmail(e.target.value)} required/>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} placeholder="Mot de passe du Responsable" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit"> Modifier </Button>
                </Form>
            </div>
        </>
        )
}

export default EditUser