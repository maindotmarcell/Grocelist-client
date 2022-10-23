import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { user, storeUser } = useContext(UserContext);
	const navigate = useNavigate();

	// asynchronous call to submit entered information
	const registerUser = async (event) => {
		event.preventDefault();
		const response = await fetch(
			'http://localhost:1337/api/authentication/register',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					password,
				}),
			}
		);

		// setting jwt to keep user logged in
		const data = await response.json();
		if (data.user) {
			localStorage.setItem('token', data.user.token);
			storeUser(data.user);
			alert('Registration successful');
			navigate('/groups');
		} else {
			alert('Please check the information you have provided');
		}
		console.log(data);
	};

	// rendering page with register form
	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				<br />
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
				<input type="submit" value="Register" />
			</form>
			<p>
				Already have an account?{' '}
				<Link to="/login">
					<button>Login</button>
				</Link>
			</p>
		</div>
	);
}

export default Registration;
