import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext.js';

const Nav = () => {

    const { user, handleLogOut } = useContext(AuthContext);

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
                        <Link className='enlace' to={`/NewCita`}>Pedir cita</Link>
                        {user.roles === "ROLE_EMPLEADO" && 
                            <Link className='enlace' to={`/Citas`}>Citas</Link>
                        }
                        <Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link>
                    </>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default Nav;