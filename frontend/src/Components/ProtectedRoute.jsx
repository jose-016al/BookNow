import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children, redirectTo = "/" }) => {

    if (user !== null) {
        return <Navigate to="/" />
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute;