import React, { useState } from 'react';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
		</div>
	);
}

export default Registration;
