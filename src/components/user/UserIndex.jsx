import React, { useEffect, useState } from 'react'
import useFetch from '../../useFetch';
import { Link } from 'react-router-dom';
import UserCreateEdit from './UserCreateEdit';

export default function UserIndex() {
    const [users, setUsers] = useState([]);

    const { user } = route.params;
    console.log(user, 'user');

    return (
        <div className="container">
            <Link
                to="/user/create"
                className="bg-red-700 text-white float-right my-2 p-2"
            >Create</Link>
            <table border="1" className="border w-full">
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>ID</th>
                    <th>Phone</th>
                    <th>Username</th>
                    <th>Website</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {
                    users && users.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.id}</td>
                            <td>{item.phone}</td>
                            <td>{item.username}</td>
                            <td>{item.website}</td>
                            <td>{item.address.city}</td>
                            <td>Edit</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
