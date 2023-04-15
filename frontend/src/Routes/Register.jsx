import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTermsAcceptedChange = (event) => {
        setTermsAccepted(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!termsAccepted) {
            alert('Debe aceptar los términos y condiciones para registrarse');
            return;
        }

        axios.post('http://localhost:8000/register', {
            username: username,
            plainPassword: password,
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <Header />
            <div className='container'>
                <div className='row justify-content-center'>
                    <h2 className='text-center mb-4 mt-4'>Registro</h2>
                    <form className='col-12 col-md-4' id='containerLogin' onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Nombre de usuario</label>
                            <input type="text" className="form-control" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="mb-4 form-check">
                            <input type="checkbox" className="form-check-input" id="termsAccepted" checked={termsAccepted} onChange={handleTermsAcceptedChange} />
                            <label className="form-check-label" htmlFor="termsAccepted">Acepto los términos y condiciones</label>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Register</button>
                        </div>
                        <div className="my-3">
                            <span>¿Volver al login? <Link to={`/Login`}>Login</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Register;
