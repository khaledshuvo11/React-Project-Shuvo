import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import NoPage from './components/NoPage.jsx'
import Memo from './components/Memo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

