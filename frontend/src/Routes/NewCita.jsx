import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calender from '../Components/Calender';
import 'react-calendar/dist/Calendar.css';

const NewCita = () => {

    const handleSubmit = async (event) => {

    }

    const handleDateChange = (date) => {
        console.log(date);
    };

    return (
        <>
        <Header />
        <div className='container'>
            <div className='row justify-content-center' id='containerNewCita'>
            <Calender onDateChange={handleDateChange}/>
            <form className='col-12 col-md-5'  onSubmit={handleSubmit} >
                <div className="mb-2">
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
