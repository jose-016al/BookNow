import React, { useContext, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AuthContext from '../Contexts/AuthContext.js';

const EditUser = () => {
 
    const { user } = useContext(AuthContext);

    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [last_name, setLast_Name] = useState(user.last_name);
    const [phone, setPhone] = useState(user.phone);
        // Errores del formulario
    const [errorMessageName, setErrorMessageName] = useState("");
    const [errorMessageLastName, setErrorMessageLastName] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePhone, setErrorMessagePhone] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email || !name || !last_name || !phone) {
            setErrorMessageEmail(!email ? 'El campo email es requerido' : '');
            setErrorMessageName(!name ? 'El campo nombre es requerido' : '');
            setErrorMessageLastName(!last_name ? 'El campo apellido es requerido' : '');
            setErrorMessagePhone(!phone ? 'El campo teléfono es requerido' : '');
        } else {
            const data = { email, name, last_name, phone };
            try {
                const response = await axios.post('http://localhost:8000/api/editUser', JSON.stringify(data), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
                localStorage.removeItem("usuario");
                window.location.reload();
            } catch (error) {
                console.error(error.response.data);
            }
        }
    }

    return (
        <>
            <Header />
            <div className='container' style={{ minHeight: '310px' }}>
                <h2 className='text-center mb-4 mt-4'>Editar perfil</h2>
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
                        <div className="row align-items-center">
                            <div className='col-12 col-md-12 my-3 d-flex justify-content-end'>
                                <button id='btn-color' className=" btn" type="submit">Editar perfil</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default EditUser;
