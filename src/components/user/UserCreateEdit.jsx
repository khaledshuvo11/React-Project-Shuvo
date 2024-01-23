import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function UserCreateEdit() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        date_of_birth: '',
        gender: ''
    })
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const targetUserIndex = searchParams.get('index');
        let userList = JSON.parse(localStorage.getItem('user_list')) ?? [];
        const targetUser = userList[targetUserIndex];
        console.log('targetUser', targetUser);
        setUser({...user, ...targetUser});
    }, []) 

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function handleSubmit (e) {
        e.preventDefault();
        let userList = JSON.parse(localStorage.getItem('user_list')) ?? [];
        userList.push(user);
        localStorage.setItem('user_list', JSON.stringify(userList));
        navigate('/');
    }

    return (
        <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden sm:rounded-lg p-3">
            <div className="p-6 text-gray-900">
                <div className="w-full">
                <div className="bg-white">
                    <Link to="/" className=" bg-black text-white rounded-md hover:bg-sky-400 px-4 py-2">
                        Go to home page
                    </Link>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                            <label for="name" className="block mt-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name."
                                value={user.name}
                                onChange={handleChange}
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
                                required
                            />
                            </div>

                            <div>
                            <label for="email" className="block mt-2">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email."
                                value={user.email}
                                onChange={handleChange}
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
                                required
                            />
                            </div>

                            <div>
                            <label for="date" className="block">
                                Date_of_birth
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date_of_birth"
                                value={user.date_of_birth}
                                onChange={handleChange}
                                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
                                required
                            />
                            </div>

                            <div>
                            <label
                                for="gender"
                                className="block mt-2 font-bold text-gray-600"
                            >
                                Gender
                            </label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={ user.gender === 'male' } 
                                onChange={handleChange}
                                className="py-1"
                            />

                            <label for="male">Male</label>

                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked={ user.gender === 'female' }
                                onChange={handleChange}
                            />
                            <label for="female">Female</label>

                            <input
                                type="radio"
                                id="others"
                                name="gender"
                                value="others"
                                checked={ user.gender === 'others' }
                                onChange={handleChange}
                            />
                            <label for="others">Others</label>
                            </div>
                        </div>
                        <button
                            className="block w-full bg-yellow-400 mt-3 hover:bg-yellow-300 p-4 rounded text-white transition duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
