import React, { useEffect } from 'react';
import axios from 'axios';

const SendEmailConfirmed = () => {

    useEffect(() => {
        fetchDatos();
    }, []);

    const fetchDatos = async () => {
        try {
            const response = await axios.post('https://api.sendinblue.com/v3/smtp/email', {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': 'xsmtpsib-43d9af3f4a5f488140a5218467acdf34f0267148cbb7629cc5c02c34919d8a5d-k3JgK1QDqLSRXWaz', // Reemplaza con tu propia clave de API de Sendinblue
                },
                data: {
                    sender: {
                        name: 'Auto Display Garage',
                        email: 'no-reply@autodisplaygarage.com',
                    },
                    to: [
                        {
                            email: 'jose_016al@outlook.com', // Reemplaza con la dirección de correo electrónico del destinatario
                        },
                    ],
                    subject: 'Reserva AutoDisplay Garage',
                    htmlContent: 'Tu reserva ha sido actualizada.',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.log('Error al enviar el correo:', error);
        }
    };


    return <React.Fragment />;
};

export default SendEmailConfirmed;
