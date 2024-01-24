import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserIndex() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem('user_list'));
        setUsers(userList);
    }, [])

    function handleDelete(index) {
        let userList = JSON.parse(localStorage.getItem('user_list')) ?? [];
        userList.splice(index, 1)
        console.log('index', index);
        localStorage.setItem('user_list', JSON.stringify(userList));
        setUsers(userList);
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
                    <th>E-mail</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
                {
                    users && users.map((item, i) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.date_of_birth}</td>
                            <td>{item.gender}</td>
                            <td>
                                <Link className="block" to={`user/create?index=${i}`}>
                                    Edit |
                                </Link>
                                <div onClick={() => handleDelete(i)}>Delete</div>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
