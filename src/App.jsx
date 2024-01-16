// // import { useState } from 'react'
// // import './App.css'
// // import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
// // import Layout from './components/Layout.jsx'
// // import Home from './components/Home.jsx'
// // import Blogs from './components/Blogs.jsx'
// // import Contact from './components/Contact.jsx'
// // import NoPage from './components/NoPage.jsx'
// // import Memo from './components/Memo.jsx'
// // import Reducer from './components/Reducer.jsx'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <Reducer />
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Layout />}>
// //             <Route index element={<Home />} />
// //             <Route path="/blogs" element={<Blogs />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route path="/memo" element={<Memo />} />
// //             <Route path="/*" element={<NoPage />} />
// //           </Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </>
// //   )
// // }

// export default App

// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   const headingElement = useRef();

//   useEffect(() => {
//     count.current = count.current + 1;
//   });


//   console.log('count', count.current);
//   console.log('headingElement', headingElement);
//   if (headingElement.current) {
//     headingElement.current.innerHTML = 'aaaaaaaaaaaaa';
//   }
  

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1 ref={headingElement}>Render Count: {count.current}</h1>
//     </>
//   );
// }

// import { useReducer } from 'react';
// import Chat from './components/Chat.jsx';
// import ContactList from './components/ContactList.jsx';
// import { initialState, messengerReducer } from './components/messengerReducer.jsx';

// export default function Messenger() {
//   const [state, dispatch] = useReducer(messengerReducer, initialState);
//   const message = state.message;
//   const contact = contacts.find((c) => c.id === state.selectedId);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={state.selectedId}
//         dispatch={dispatch}
//       />
//       <Chat
//         key={contact.id}
//         message={message}
//         contact={contact}
//         dispatch={dispatch}
//       />
//     </div>
//   );
// }

// const contacts = [
//   {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
//   {id: 1, name: 'Alice', email: 'alice@mail.com'},
//   {id: 2, name: 'Bob', email: 'bob@mail.com'},
// ];


import React, { useEffect, useState } from 'react'
import useFetch from './useFetch';

export default function App() {

  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <table width="100%" border="1" style={{ borderCollapse: 'collapse' }}>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>ID</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Website</th>
          <th>Address</th>
        </tr>
        {data &&
        data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.id}</td>
            <td>{item.phone}</td>
            <td>{item.username}</td>
            <td>{item.website}</td>
            <td>{item.address.city}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
