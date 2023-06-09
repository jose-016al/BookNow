import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    // Errores del formulario
    const [errorMessageName, setErrorMessageName] = useState("");
    const [errorMessageLastName, setErrorMessageLastName] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePhone, setErrorMessagePhone] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessagePassword2, setErrorMessagePassword2] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Verificamos si algún campo está vacío
        const validarEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
        const validarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const validarPhone = /^(\+34|0034|34)?[6|7][0-9]{8}$/;

        if (!email || !name || !last_name || !phone || !password || !password2) {
            setErrorMessageEmail(!email ? 'El campo email es requerido' : '');
            setErrorMessageName(!name ? 'El campo nombre es requerido' : '');
            setErrorMessageLastName(!last_name ? 'El campo apellido es requerido' : '');
            setErrorMessagePhone(!phone ? 'El campo teléfono es requerido' : '');
            setErrorMessagePassword(!password ? 'El campo contraseña es requerido' : '');
            setErrorMessagePassword2(!password2 ? 'El campo contraseña es requerido' : '');
        } else if (!validarEmail.test(email)) {
            setErrorMessageEmail('El correo electrónico ingresado no es válido');
        } else if (!validarPhone.test(phone)) {
            setErrorMessagePhone('El telefono ingresado no es válido');
        } else if (!validarPassword.test(password)) {
            setErrorMessageEmail('');
            setErrorMessagePhone('');
            setErrorMessagePassword('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número');
        } else if (password !== password2) {
            setErrorMessageEmail('');
            setErrorMessagePhone('');
            setErrorMessagePassword('');
            setErrorMessagePassword2("Las contraseña no coinciden");
        } else {
            const data = { email, name, last_name, phone, password };
            try {
                const response = await axios.post('http://localhost:8000/api/register', JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setIsRegistered(true);
            } catch (error) {
                console.error(error.response.data);
                if (error.response.status === 403) {
                    setErrorMessageEmail(`Error, ya existe una cuenta con este email`);
                }
            }
        }
    }

    if (isRegistered) {
        return <Navigate to="/Login" replace={true} />;
    }

    return (
        <>
            <Header />
            <div className='container' style={{ minHeight: '310px' }}>
                <h2 className='text-center mb-4 mt-4'>Registro</h2>
                <div className='row justify-content-center'>
                    <form className='col-12 col-md-6' id='containerLogin' onSubmit={handleSubmit} >
                        <div className="row">
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Nombre</label>
                                <input type="text" maxLength="255" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                {errorMessageName && <div className="error text-danger">{errorMessageName}</div>}
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Apellidos</label>
                                <input type="text" maxLength="255" className="form-control" value={last_name} onChange={(e) => setLast_Name(e.target.value)} />
                                {errorMessageLastName && <div className="error text-danger">{errorMessageLastName}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Correo electronico</label>
                                <input type="email" maxLength="255" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {errorMessageEmail && <div className="error text-danger">{errorMessageEmail}</div>}
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Numero de telefono</label>
                                <input type="text" maxLength="20" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                {errorMessagePhone && <div className="error text-danger">{errorMessagePhone}</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Contraseña</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                {errorMessagePassword && <div className="error text-danger">{errorMessagePassword}</div>}
                            </div>
                            <div className='col-12 col-md-6 mb-2'>
                                <label className="form-label">Repite la contraseña</label>
                                <input type="password" className="form-control" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                                {errorMessagePassword2 && <div className="error text-danger">{errorMessagePassword2}</div>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className='col-12 col-md-6'>
                                <span>¿Volver al login? <Link to={`/Login`}>Login</Link></span>
                            </div>
                            <div className='col-12 col-md-6 my-3 d-flex justify-content-end'>
                                <button className=" btn btn-primary" type="submit">Crear cuenta</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default Register;
