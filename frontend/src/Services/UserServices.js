import Http from "./Http-Comman"

async function getAllUsers(){
    return await Http.get("/users")
}

async function getUserById(id){
    return await Http.get(`/users/${id}`)
}

async function addUser(cat){
    return await Http.post(`/users`, cat)
}

async function deleteUser(id){
    return await Http.delete(`/users/${id}`)
}

async function EditUser(cat){
    return await Http.put(`/users/${cat._id}`, cat)
}

const UserService={getAllUsers, addUser, deleteUser, getUserById, EditUser}

export default UserService