import React from 'react';
//import { FaCartArrowDown } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiGroup, BiNote, BiEnvelope } from 'react-icons/bi';
import { /*BsFillCalendarDayFill,*/ BsAlarm } from 'react-icons/bs';
import { IoIosList } from 'react-icons/io';

export const SidebarData = [
	// {
	//   title: 'Dashboard',
	//   path: '/dashboard',
	//   icon: <BiNote />,
	// },
	{
		title: 'Groups',
		path: '/groups',
		icon: <BiGroup />,
	},
	{
		title: 'Invites',
		path: '/invites',
		icon: <BiEnvelope />
	},
	{
		title: 'Personal Todos',
		path: '/todos',
		icon: <AiOutlineHome />,
	},
	{
		title: 'Reminders',
		path: '/reminders',
		icon: <BsAlarm />,
	},
	// {
	//   title: 'List',
	//   path: '/lists',
	//   icon: <IoIosList />,
	// },
	// {
	//   title: 'Groups',
	//   path: '/groups',
	// },
	// {
	// 	title: 'Create Group',
	// 	path: '/create-group',
	// },
	// {
	// 	title: 'Existing Groups',
	// 	path: '/existing-groups',
	// },
	// {
	// 	title: 'Add Group Member',
	// 	path: '/add-group-member',
	// },
];
