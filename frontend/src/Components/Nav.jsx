import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const user = JSON.parse(localStorage.getItem("usuario"));
    
    const handleLogOut = () => {
        localStorage.removeItem("usuario");
        window.location.reload();
    }

    return(
        <nav>
            <ul>
                <li>
                    <Link className='enlace' to={`/`}>Home</Link>
                    {user == null && 
                        <Link className='enlace' to={`/Login`}>Login</Link>
                    } 
                    {user != null && 
                        <Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Nav;