import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
    
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
                    <>
                        <Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link>
                        {user.roles === "ROLE_ADMIN" && 
                            <Link className='enlace' to={`/Citas`}>Citas</Link>
                        }
                    </>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Nav;