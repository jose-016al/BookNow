import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext.js';
import BurguerButton from './BurguerButton.jsx';


const Nav = () => {

    const { user, handleLogOut } = useContext(AuthContext);

    const [clicked, setClicked] = useState(false)
    const [showNavBooking, setShowNavBooking] = useState(false);
    const [showNavUser, setShowNavUserg] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleShowBooking = () => {
        setShowNavBooking(!showNavBooking);
    };

    const handleShowUser = () => {
        setShowNavUserg(!showNavUser);
    };

    return (
        <>
            <nav>
                <ul className={`${clicked ? 'active' : ''}`}>
                    <li><Link className='enlace' to={`/`}>Home</Link></li>
                    {user == null &&
                        <li><Link className='enlace' to={`/login`}>Login</Link></li>
                    }
                    {user != null &&
                        <>
                            <li><Link className='enlace' to={`/newcita`}>Pedir cita</Link></li>
                            {user.roles.includes("ROLE_EMPLEADO") &&
                                <li className={`${showNavBooking ? 'active' : ''}`}>
                                    <div className='enlace' onClick={handleShowBooking}>
                                        <div className="menu-item">
                                            <p>Citas</p>
                                            <p id='img'></p>
                                        </div>
                                        <ul className={`nav-booking ${showNavBooking ? 'active' : ''}`}>
                                            <li><Link className='enlace' to={`/bookingtoday`}>Citas de hoy</Link></li>
                                            <li><Link className='enlace' to={`/bookingpending`}>Citas pendientes</Link></li>
                                            <li><Link className='enlace' to={`/bookingconfirmed`}>Citas confirmadas</Link></li>
                                        </ul>
                                    </div>
                                </li>
                            }
                            <li className={`${showNavUser ? 'active' : ''}`}>
                                <div className='enlace' onClick={handleShowUser}>
                                    <div className="menu-item">
                                        <p>{ user.name + " " + user.last_name }</p>
                                        <p id='img'></p>
                                    </div>
                                    <ul className={`nav-user ${showNavUser ? 'active' : ''}`}>
                                        <li><Link className='enlace' to={`/bookinguser`}>Tus citas</Link></li>
                                        <li><Link className='enlace' to={`/bookingpending`}>Editar perfil</Link></li>
                                        <li><Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link></li>
                                    </ul>
                                </div>
                            </li>
                            {user.roles.includes("ROLE_ADMIN") && 
                                <li><a className='enlace' href="http://localhost:8000/admin" target="_blank" rel="noopener noreferrer">Admin</a></li>
                            } 
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