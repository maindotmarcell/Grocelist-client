import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loginUser = async (event) => {
		event.preventDefault();
		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await response.json();
        if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
		console.log(data);
	};
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
			<p>Don't have an account yet? <Link to="/register"><button>Register</button></Link></p>
		</div>
	);
}

export default Login;