import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './layout.css'

function Header() {
  return (
    <div className='header-container'>
        <header>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className='nav-container'>
                <nav>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/buildblock" className='nav-link'>Build Block</Link>
                    <Link to="/buildquilt" className='nav-link'>Build Quilt</Link>
                    <Link to="/myblocks" className='nav-link'>My Blocks</Link>
                    <Link to="/myquilts" className='nav-link'>My Quilts</Link>
                </nav>
            </div>
            
        </header>
    </div>
  )
}

export default Header