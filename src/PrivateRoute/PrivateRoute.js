import React, { useContext, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const PrivateRoute = ({ children }) => {
	const { user } = useContext(UserContext);
	console.log(user)
	const tokenIsValid = localStorage.getItem('token') === user.token;
	return tokenIsValid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
