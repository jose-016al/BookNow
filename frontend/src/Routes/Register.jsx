import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { Link, Navigate  } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/register', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            setIsRegistered(true);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    if (isRegistered) {
        return <Navigate to="/Login" replace={true} />;
    }

    return (
        <>
            <Header />
            <div className='container'>
                <div className='row justify-content-center'>
                    <h2 className='text-center mb-4 mt-4'>Registro</h2>
                    <form className='col-12 col-md-4' id='containerLogin' onSubmit={handleSubmit} >
                        <div className="mb-2">
                            <label className="form-label">Correo electronico</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
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
