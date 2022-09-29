import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const jwt = localStorage.getItem('token');
    return jwt ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
