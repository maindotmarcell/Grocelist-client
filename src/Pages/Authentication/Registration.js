import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })

        const data = await response.json()
		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Registration successful')
			window.location.href = '/'
		} else {
			alert('Please check the information you have provided')
		}
        console.log(data);

    }

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
			<p>Already have an account? <Link to="/login"><button>Login</button></Link></p>
		</div>
	);
}

export default Registration;