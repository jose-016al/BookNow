import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Calender from '../Components/Calender';
import GetBookingTypes from '../Components/GetBookingTypes';
import Time from '../Components/Time';
import AuthContext from '../Contexts/AuthContext.js';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const NewCita = () => {

    const { getUserId  } = useContext(AuthContext);

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [type, setType] = useState(null);
    const [duration, setDuration] = useState(null);
    const user_id = getUserId();

    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleTimeChange = (time) => {
        setTime(time);
    };

    const handleBookingTypes = (types) => {
        const selectedTypeValues = types.map((selectedType) => selectedType.type);
        const selectedDurationValues = types.map((selectedType) => selectedType.duration);
        setType(selectedTypeValues);
        setDuration(selectedDurationValues.reduce((total, duration) => total + duration, 0));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        const data = { user_id, type, date: formattedDate, time, duration };
        try {
            const response = await axios.post('http://localhost:8000/api/newBooking', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    }
    
    return (
        <>
            <Header />
            <div className='container mt-4' id='containerNewCita'>
                <h2>Escoge el dia de tu cita</h2>
                <div className='row justify-content-center mt-4'>
                    <Calender onDateChange={handleDateChange} />
                    <form className={`col-12 col-md-3 ${date  ? 'active' : ''}`} id='formNewCita' onSubmit={handleSubmit}>
                        {date && (
                            <h4>Tu cita será el {date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()}</h4>
                        )}
                        <GetBookingTypes bookingTypes={handleBookingTypes} />
                        <div className="mb-2">
                            <label>Selecciona una hora</label>
                            <Time date={date} onTimeChange={handleTimeChange} />
                        </div>
                        <div className="d-grid mb-3">
                            <button className="btn btn-primary" type="submit">Solicitar cita</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );

}

export default NewCita;
