import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])

    console.log(users)


    return (
        <>
            <div className="container text-center mt-5">
                <h1>Lista de usuários</h1>
                <ul>
                    {loading && (
                        <div> Carregando ...</div>
                    )}
                    {users.map(user => (
                        <div className="container-fluid text-center d-flex justfy-content-center align-items-center p-4 flex-column" key={user.id}>
                        <span>{user.id}</span>
                            <li><b>Nome:</b> {user.name}</li>
                            <li><b>Apelido:</b> {user.username}</li>
                            <li><b>Email:</b> {user.email}</li>
                            <li><b>Telefone:</b> {user.phone}</li>
                            <li><b>Site:</b> {user.website}</li>
                            <li><b>Empresa:</b> {user.company.name}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default UserList