import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link className='enlace' to={`/`}>Home</Link>
                    <Link className='enlace' to={`/Login`}>Login</Link>
                    <Link className='enlace' to={`/Register`}>Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;