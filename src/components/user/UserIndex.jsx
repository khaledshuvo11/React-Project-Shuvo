import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from '../../api';

export default function UserIndex() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('/users')
        .then(response => {
            console.log(response, 'response......');
            setUsers(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    function handleDelete(id) {
        api.post('/users/delete', {id})
        .then(response => {
            console.log(response, 'response......');
            setUsers(users.filter(item => item.id !== id));
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <Link
                to="/user/create"
                className="bg-red-700 text-white float-right my-2 p-2"
            >Create</Link>
            <table border="1" className="border w-full">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                {
                    users && users.map((item, i) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.date_of_birth}</td>
                            <td>{item.gender}</td>
                            <td>
                                <Link className="block" to={`user/create?id=${item.id}`}>
                                    Edit |
                                </Link>
                                <div onClick={() => handleDelete(item.id)}>Delete</div>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
