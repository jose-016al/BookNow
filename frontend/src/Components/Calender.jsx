import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = ({ onDateChange }) => {

    const handleDateChange = (date) => {
        date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
        onDateChange(date);
    };


    // Lista de días a deshabilitar (festivos o específicos)
    const diasDeshabilitados = [
        new Date(2023, 4, 3), // 3 de mayo de 2023
        // Agrega más días según tus necesidades
    ];

    const isDisabled = (date) => {
        return (
            isSunday(date) || // Deshabilitar domingos
            diasDeshabilitados.some((disabledDate) => {
                return (
                    date.getDate() === disabledDate.getDate() &&
                    date.getMonth() === disabledDate.getMonth() &&
                    date.getFullYear() === disabledDate.getFullYear()
                );
            })
        );
    };

    const isSunday = (date) => {
        return date.getDay() === 0;
    };

    return (
        <>
            <div id='calender'>
                <Calendar onChange={handleDateChange} tileDisabled={({ date }) => isDisabled(date)} />
            </div>
        </>
    );

}

export default Calender;
