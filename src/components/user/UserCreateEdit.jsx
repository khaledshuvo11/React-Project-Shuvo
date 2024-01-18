import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserCreateEdit() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        date_of_birth: '',
        gender: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    function handleClick (e) {
        e.preventDefault();
        console.log('user', user);
        navigate('/', {user});
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
                    <form>
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
                            onChange={handleChange}
                            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
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
                            onChange={handleChange}
                            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
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
                            onChange={handleChange}
                            className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 w-full"
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
                            onChange={handleChange}
                            className="py-1"
                        />

                        <label for="male">Male</label>

                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                        />
                        <label for="female">Female</label>

                        <input
                            type="radio"
                            id="others"
                            name="gender"
                            value="others"
                            onChange={handleChange}
                        />
                        <label for="others">Others</label>
                        </div>
                    </div>
                    <button
                        className="block w-full bg-yellow-400 mt-3 hover:bg-yellow-300 p-4 rounded text-white transition duration-300"
                        onClick={handleClick}
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
