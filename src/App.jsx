// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// import Home from './components/Home.jsx'
// import Blogs from './components/Blogs.jsx'
// import Contact from './components/Contact.jsx'
// import NoPage from './components/NoPage.jsx'
// import Memo from './components/Memo.jsx'
// import Reducer from './components/Reducer.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Reducer />
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="/blogs" element={<Blogs />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/memo" element={<Memo />} />
//             <Route path="/*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter> */}
//     </>
//   )
// }

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

import { useReducer } from 'react';
import Chat from './components/Chat.jsx';
import ContactList from './components/ContactList.jsx';
import { initialState, messengerReducer } from './components/messengerReducer.jsx';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];