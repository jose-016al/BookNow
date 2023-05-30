import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Citas = () => {

    const [citas, setCitas] = useState(null);

    useEffect(() => {
        fetchDatos();
    }, [citas]);

    const fetchDatos = async () => {
        try {
            const url = "http://localhost:8000/api/bookings";
            const respuesta = await fetch(url);
            const json = await respuesta.json();
            setCitas(json);
        }
        catch (error) {
            console.log("error: " + error);
        }
    }

    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();

    // Filtrar citas por la fecha actual
    const citasHoy = citas && citas.filter(cita => {
        const fechaCita = new Date(cita.date.date);
        return fechaCita.getDate() === dia && fechaCita.getMonth() + 1 === mes && fechaCita.getFullYear() === año;
    }).map(cita => {
        const fechaCita = new Date(cita.time.date);
        const hora = fechaCita.getHours();
        const minutos = fechaCita.getMinutes();
        return {
            ...cita,
            hora,
            minutos
        };
    });
    
    return (
        <>
            <Header />
            <div className='container mt-4'>
                <h2>Las citas de hoy {`${dia}/${mes}/${año}`}</h2>
                <div className='mt-4' id='containerCita'>
                    {citasHoy && citasHoy.length > 0 ? (
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Cliente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {citasHoy.map((cita, index) => (
                                    <tr key={cita.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{cita.hora + ":" + cita.minutos}</td>
                                        <td>{cita.type}</td>
                                        <td>{cita.name + " " + cita.last_name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <h4 className='text-center'>No hay citas disponibles para hoy</h4>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Citas;
