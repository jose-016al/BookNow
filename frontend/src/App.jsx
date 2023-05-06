import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/comunes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Routes/Home';
import Error404 from './Routes/Error404';
import Login from './Routes/Login';
import Register from './Routes/Register';
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const localUser = localStorage.getItem("usuario");
        if (localUser) {
            setUser(JSON.parse(localUser));
        }
    }, []);

    const handleUserChange = (newUser) => {
        setUser(newUser);
        localStorage.setItem("usuario", JSON.stringify(newUser));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home user={user} />} />
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/Login" element={<Login onUserChange={handleUserChange} />} />
                    <Route path="/Register" element={<Register />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;