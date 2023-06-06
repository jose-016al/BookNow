import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext.js';
import BurguerButton from './BurguerButton.jsx';


const Nav = () => {

    const { user, handleLogOut } = useContext(AuthContext);

    const [clicked, setClicked] = useState(false)
    const [showNavBooking, setShowNavBooking] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleShowBooking = () => {
        setShowNavBooking(!showNavBooking);
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
                            {user.roles === "ROLE_EMPLEADO" &&
                                <li className={`enlace ${showNavBooking ? 'active' : ''}`}>
                                    <Link className='enlace' onClick={handleShowBooking}>
                                        <div className="menu-item">
                                            <p>Citas</p>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAQAAADlauupAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cGBgsBJqr9cLsAAACDSURBVDjL1ZHLCYAwDEC7QRG6Qifwku5/9RBH6AJCF8jzUFHED603A7kkvJeQOPf/ABHM+27OvAcRBzmDKhZCOxwCqELODsYRlgXmuUUCwwDTBKWAyFZsk9zCR/Nd8gpfJeebNMFPki74kKRUAdWapUBKfX/eN+mYfJFYjFiMn+D/xAoJj7kuaXqkAAAAAABJRU5ErkJggg==" alt="flecha" />
                                        </div>
                                        <ul className={`nav-booking ${showNavBooking ? 'active' : ''}`}>
                                            <li><Link className='enlace' to={`/bookingtoday`}>Citas de hoy</Link></li>
                                            <li><Link className='enlace' to={`/bookingpending`}>Citas pendientes</Link></li>
                                            <li><Link className='enlace' to={`/bookingconfirmed`}>Citas confirmadas</Link></li>
                                        </ul>
                                    </Link>
                                </li>
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