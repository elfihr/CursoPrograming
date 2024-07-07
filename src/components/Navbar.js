import React from 'react'
import '../styles/Navbar.css'

import { navItems } from '../helper/helper'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {
    return (
        <div className='navMenu'>
            {/* ====/Logo==== */}

            <h3 className='logo'>FihrPrograming</h3>
            {/* ====/Icons==== */}
            <input type='checkbox' id='check'></input>
            <label for='check' className='iconMenu' >
                <ReorderIcon id='menu-icon' fontSize='2rem' />
                <CloseIcon id='close-icon' fontSize='2rem' />
            </label>
            {/* ====/HiperLinks==== */}
            <div className='navBar'>
                {navItems.map((item, index) => {
                    return (
                        <a href={item.href}>{item.label}</a>
                    )
                })}
            </div>
            <a  className='btnLink' href="#preco">
                <button  className='navBarBuy'>Compre Agora</button>
            </a>

        </div>
    )
}

export default Navbar