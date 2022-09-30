import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

	const validateToken = async () => {
		const response = await fetch('http://localhost:1337/api/validate-user', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		});
		console.log(response);
		return response.status === 200;
	};
	const tokenIsValid = validateToken();

	return tokenIsValid ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
