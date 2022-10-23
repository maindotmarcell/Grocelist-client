import { useContext, useReducer } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const User = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      {' '}
      <div>Useremail: {user.email} </div>
      <div>UserName: {user.name}</div>
    </div>
  );
};

export default User;
