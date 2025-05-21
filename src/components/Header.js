import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const activeClassName = "active-link";

    return (
        <header>
            <div className="header-left">
                <h1>News Website</h1>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : "home-link"} end>
                    Home
                </NavLink>
            </div>
            <div className="header-sections">
                <NavLink to="/category/politics" className={({ isActive }) => isActive ? activeClassName : undefined}>Politics</NavLink>
                <NavLink to="/category/sports" className={({ isActive }) => isActive ? activeClassName : undefined}>Sports</NavLink>
                <NavLink to="/category/business" className={({ isActive }) => isActive ? activeClassName : undefined}>Business</NavLink>
                <NavLink to="/category/shopping" className={({ isActive }) => isActive ? activeClassName : undefined}>Shopping</NavLink>
                <NavLink to="/category/health" className={({ isActive }) => isActive ? activeClassName : undefined}>Health</NavLink>
            </div>
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <NavLink to="/article" className={({ isActive }) => isActive ? activeClassName : undefined} onClick={() => setMenuOpen(false)}>Article</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefined} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </nav>
        </header>
    );
}

export default Header;
