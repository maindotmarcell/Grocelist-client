import axios from 'axios';
import { useContext, useReducer, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const User = () => {
  const { user } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    axios
      .patch(`/api/authentication/${user.id}`, {
        email,
        name,
      })
      .then((response) => console.log(response.data));
  };
  console.log(user);
  return (
    <div>
      {' '}
      <div>Useremail: {user.email} </div>
      <div>UserName: {user.name}</div>
      <button onClick={() => handleEdit()}>Edit</button>
      {edit ? (
        <>
          <input type='string' onChange={handleEmail} name='email' />
          <input type='sting' onChange={handleName} name='name' />
          <button onClick={handleSubmit}>Update</button>
        </>
      ) : null}
    </div>
  );
};

export default User;
