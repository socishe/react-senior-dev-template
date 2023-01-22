
import React from 'react';
import './Users.scss';
import UsersList from '../components/UsersList';
const Users = () => {
  const USERS = [{id: 'u1', name: 'Sihle Socishe', image: '', places: 3}]
  return (
    <UsersList items={USERS} />
  );
}

export default Users;
