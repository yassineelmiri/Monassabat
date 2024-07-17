import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, roles }) => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('Role');

    if (!token) {
        return <Navigate to="/Login" />;
    }

    if (roles && !roles.includes(userRole)) {
        localStorage.removeItem('token');
        localStorage.removeItem('Role');
        return <Navigate to="/Login" />;
    }
    return children;
};

export default PrivateRoute;