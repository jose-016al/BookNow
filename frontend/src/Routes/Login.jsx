import React, { useState } from 'react';
import Header from '../Components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/register', {
            username: username,
            password: password,
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
                <h2 className='text-center mb-4 mt-4'>Login</h2>
                <form className='col-12 col-md-4' id='containerLogin' onSubmit={handleSubmit}>
                    <div class="mb-2">
                        <label class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Register</button>
                    </div>
                    <div class="my-3">
                        <span>¿No tienes cuenta? <Link to={`/Register`}>Crea tu cuenta</Link></span>
                    </div>
                </form>
            </div>
        </div>
        </>
        
    );
}

export default Home;
