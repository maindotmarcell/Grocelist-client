import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { BiGroup } from 'react-icons/bi';
import { BsFillCalendarDayFill, BsAlarm } from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Personal Todos',
    path: '/todos',
    icon: <AiOutlineHome />,
  },
  {
    title: 'Groups',
    path: '/',
    icon: <BiGroup />,
  },
  {
    title: 'Reminders',
    path: '/',
    icon: <BsAlarm />,
  },
];
