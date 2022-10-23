import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import classes from './Navbar.module.css';
import { MdPermIdentity } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from '../../Constants/Navdata';
import UserContext from '../../context/UserContext';

const Navbar = (props) => {
	// const [user, setUser] = useState();
	const { user, storeUser } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		getLoggedInUser();
	}, []);

	function logout() {
		localStorage.removeItem('token');
		storeUser(null);
		window.location.href = '/login';
	}

	async function getLoggedInUser() {
		const response = await fetch('/api/authentication/current-user', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		});

		const data = await response.json();
		if (data.status === 'ok') {
			storeUser(data.user);
		} else {
			console.log(data.error);
		}
	}
	// console.log(props);

	const showSidebar = () => {
		props?.data.setsideToggle(!props.data.sideToggle);
	};

	return (
		<div>
			<div className={classes.navMenu}>
				<AiOutlineMenu className={classes.menu_bars} onClick={showSidebar} />
				<h1>Grocelist</h1>
				<div className={classes.nav_end}>
					<Link to={'/user'}>
						<MdPermIdentity className={classes.ProfileIcon} />
						<h3>{user.name}</h3>
					</Link>
				</div>
			</div>
			<nav
				className={
					props?.data.sideToggle ? classes.nav_menu_active : classes.nav_menu
				}
			>
				<ul className={classes.nav_menu_items}>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={classes.nav_text}>
								<Link to={item.path}>
									{item.icon}
									<span> {item.title}</span>
								</Link>
							</li>
						);
					})}
					<li className={classes.logoutWrapper}>
						<button onClick={logout}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Navbar;
