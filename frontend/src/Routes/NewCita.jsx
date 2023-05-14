import React from 'react';
import Header from '../Components/Header';
import Calender from '../Components/Calender';
import 'react-calendar/dist/Calendar.css';

const NewCita = () => {

    const handleDateChange = (date) => {
        console.log(date);
        // Realiza las acciones necesarias con la fecha seleccionada
    };

    return (
        <>
            <Header />
            <Calender onDateChange={handleDateChange}/>
        </>
    );

}

export default NewCita;
