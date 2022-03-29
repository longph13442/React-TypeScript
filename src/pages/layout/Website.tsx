import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const Website = (props: Props) => {
    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink to="/home" className="nav-link px-2 text-white">Home</NavLink></li>
                            <li><NavLink to="/products" className="nav-link px-2 text-white">Prodcuts</NavLink></li>                          
                            <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li> 
                            <li><NavLink to="/blog" className="nav-link px-2 text-white">Blog</NavLink></li> 
                            
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            <a href="admin"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
                            <button type="button" className="btn btn-warning">Sign-up</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="w-100 bg-light py-5 text-center"  > <h3> footer</h3></div>

            </footer>
        </div>
    )
}

export default Website