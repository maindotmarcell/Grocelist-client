import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

	const tokenIsValid = true;
	return tokenIsValid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
