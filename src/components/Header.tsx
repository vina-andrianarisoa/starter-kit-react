import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-black flex items-center text-white h-[64px]">
        <div className="container">
            <nav className="flex justify-between">
                <h1 className="text-xl font-bold">Mon logo</h1>

                <ul className="flex items-center justify-between gap-4">
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header