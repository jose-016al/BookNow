import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link, Navigate } from 'react-router-dom';

const Login = ({ onUserChange }) => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/login', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsRegistered(true);
            onUserChange(response.data);
        } catch (error) {
            console.error(error.response.data);
            if (error.response.status === 402) {
                setErrorMessageEmail(`No existe niguna cuenta con este email`);
            } else if (error.response.status === 401) {
                setErrorMessagePassword(`Contraseña incorrecta`);
            }
        }
    }
    
    if (isRegistered) {
        return <Navigate to="/" replace={true} />;
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='row justify-content-center'>
                    <h2 className='text-center mb-4 mt-4'>Login</h2>
                    <form className='col-12 col-md-4' id='containerLogin' onSubmit={handleSubmit} >
                        <div className="mb-2">
                            <label className="form-label">Correo electronico</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errorMessageEmail && <div className="error text-danger">{errorMessageEmail}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {errorMessagePassword && <div className="error text-danger">{errorMessagePassword}</div>}
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Iniciar sesion</button>
                        </div>
                        <div className="my-3">
                            <span>¿No tienes cuenta? <Link to={`/Register`}>Crea tu cuenta</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Login;
