import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calender from '../Components/Calender';
import 'react-calendar/dist/Calendar.css';

const NewCita = () => {

    const [date, setDate] = useState(null);

    const handleSubmit = async (event) => {

    }

    const handleDateChange = (date) => {
        setDate(date);
    };

    return (
        <>
        <Header />
        <div className='container mt-4'>
            <h2>Escoge el dia de tu cita</h2>
            <div className='row justify-content-center mt-4'>
            <Calender onDateChange={handleDateChange}/>
            <form className={`col-12 col-md-3 ${ date ? 'active' : ''}`} id='formNewCita' onSubmit={handleSubmit} >
                {date && (
                    <h4>Tu cita será el {date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</h4>
                )}
                <div className="mb-2">
                    <label htmlFor="">prueba de informacion</label>
                    <input type="text" />
                    {/* {errorMessageEmail && <div className="error text-danger">{errorMessageEmail}</div>} */}
                </div>
            </form>
            </div>
        </div>
        <Footer />
        </>
    );

}

export default NewCita;
