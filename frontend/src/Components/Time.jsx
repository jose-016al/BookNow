import React, { useState } from 'react';

const Time = ({ onTimeChange }) => {

    const [selectedTime, setSelecteTime] = useState("");

    const horas = [
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
        '17:00', '18:00', '19:00', '20:00', '21:00',
    ];

    const handleTimeChange = (event) => {
        const selectedValue = event.target.value;
        setSelecteTime(selectedValue);
        onTimeChange(selectedValue);
        console.log(selectedValue);
    };

    return (
        <>
            <select className='form-select form-select-sm' value={selectedTime} onChange={handleTimeChange}>
                <option value="">Selecciona una hora</option>
                {horas.map((hora, index) => (
                    <option key={index} value={hora}>
                        {hora}
                    </option>
                ))}
            </select>
        </>
    );

}

export default Time;