import React, { useContext } from "react";
import './css/comunes.css'
import './css/comunes768.css';
import Home from './Routes/Home';
import Error404 from './Routes/Error404';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ProtectedRoute from "./Components/ProtectedRoute";
import BookingToday from "./Routes/BookingToday";
import BookingPending from "./Routes/BookingPending";
import BookingConfirmed from "./Routes/BookingConfirmed";
import AuthContext from "./Contexts/AuthContext.js";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import NewCita from "./Routes/NewCita";

const App = () => {

    const { user, handleUserChange } = useContext(AuthContext);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <Error404 />,
        },
        {
            path: '/Login',
            element:
                <ProtectedRoute isAllowed={user ? false : true} >
                    <Login onUserChange={handleUserChange} />
                </ProtectedRoute>,
        },
        {
            path: '/Register',
            element:
                <ProtectedRoute isAllowed={user ? false : true} >
                    <Register />
                </ProtectedRoute>,
        },
        {
            path: '/NewCita',
            element:
                <ProtectedRoute isAllowed={user ? true : false} >
                    <NewCita />
                </ProtectedRoute>,
        },
        {
            path: '/BookingToday',
            element: 
                <ProtectedRoute isAllowed={!!user && user.roles.includes('ROLE_EMPLEADO')}>
                    <BookingToday />
                </ProtectedRoute>,
        },
        {
            path: '/BookingPending',
            element: 
                <ProtectedRoute isAllowed={!!user && user.roles.includes('ROLE_EMPLEADO')}>
                    <BookingPending />
                </ProtectedRoute>,
        },
        {
            path: '/BookingConfirmed',
            element: 
                <ProtectedRoute isAllowed={!!user && user.roles.includes('ROLE_EMPLEADO')}>
                    <BookingConfirmed />
                </ProtectedRoute>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;