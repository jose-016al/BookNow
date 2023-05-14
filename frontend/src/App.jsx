import React, { useContext } from "react";
import './css/comunes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import Error404 from './Routes/Error404';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ProtectedRoute from "./Components/ProtectedRoute";
import Citas from "./Routes/Citas";
import AuthContext from "./Contexts/AuthContext.js";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

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
            path: '/Citas',
            element: 
                <ProtectedRoute isAllowed={!!user && user.roles.includes('ROLE_ADMIN')}>
                    <Citas />
                </ProtectedRoute>,
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
}

export default App;