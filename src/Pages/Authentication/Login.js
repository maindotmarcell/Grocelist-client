import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

// login function
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, storeUser } = useContext(UserContext);
	const navigate = useNavigate();


	// asynchronous api call to pass entered information to backend
	const loginUser = async (event) => {
		event.preventDefault();
		const response = await fetch(
			'/api/authentication/login',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			}
		);

		// setting jwt so we can keep the user logged in
		const data = await response.json();
		if (data.user) {
			console.log(data.user);
			localStorage.setItem('token', data.user.token);
			storeUser(data.user);
			alert('Login successful');
			navigate('/groups');
		} else {
			alert('Please check your username and password');
		}
		console.log(data);
		console.log(user);
	};

	// render page with form
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(element) => setPassword(element.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
			<p>
				Don't have an account yet?{' '}
				<Link to="/register">
					<button>Register</button>
				</Link>
			</p>
		</div>
	);
}

export default Login;
