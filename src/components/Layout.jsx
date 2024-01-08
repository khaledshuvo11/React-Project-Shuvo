import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <a href={'http://localhost:5173/contact'} target="_blank">Contact</a>
            </li>
            <li>
                <Link to="/*">NoPage</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}
// import { formatPostcssSourceMap } from 'vite'

export default Layout