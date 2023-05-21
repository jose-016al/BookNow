import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext.js';
import BurguerButton from './BurguerButton.jsx';


const Nav = () => {

    const { user, handleLogOut } = useContext(AuthContext);

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    return (
        <>
            <nav>
                <ul className={`${clicked ? 'active' : ''}`}>
                    <li><Link className='enlace' to={`/`}>Home</Link></li>
                    {user == null &&
                        <li><Link className='enlace' to={`/Login`}>Login</Link></li>
                    }
                    {user != null &&
                        <>
                            <li><Link className='enlace' to={`/NewCita`}>Pedir cita</Link></li>
                            {user.roles === "ROLE_EMPLEADO" &&
                                <li><Link className='enlace' to={`/Citas`}>Citas</Link></li>
                            }
                            <li><Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link></li>
                        </>
                    }
                </ul>
                <div className="navbar-burger">
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <div className={`navbar-bg initial ${clicked ? 'active' : ''}`}></div>
            </nav>
        </>
    );
}

export default Nav;