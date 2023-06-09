import React, { useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext.js';
import { Link } from 'react-router-dom';

const Footer = () => {

    const { user, handleLogOut } = useContext(AuthContext);

    return (
        <footer id='footer' className='row justify-content-around align-items-center'>
            <div className='col-12 col-md-3' id='nav-footer'>
                <ul>
                    <li><Link className='enlace' to={`/`}>Home</Link></li>
                    {user == null &&
                        <li><Link className='enlace' to={`/login`}>Login</Link></li>
                    }
                    {user != null &&
                        <>
                            <li><Link className='enlace' to={`/newcita`}>Pedir cita</Link></li>
                            <li><Link className='enlace' onClick={handleLogOut}>Cerrar sesión</Link></li>
                        </>
                    }
                </ul>
            </div>

            <div className='col-12 col-md-3'>
                <p className='text-center'>&copy; 2023 BookNow. Todos los derechos reservados.</p>
            </div>

                {/* Menu de redes sociales: creditos a @web_beks */}
            <div className='col-12 col-md-3' id='social-media'>
                <ul>
                    <li>
                        <a href="#hola">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#hola">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#hola">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#hola">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fa fa-linkedin"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>
        </footer>
    );
}

export default Footer;
