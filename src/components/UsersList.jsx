import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
  const [search, setSearch] = useState('');
  const normalizeSearch = search.toLowerCase();

  const usersFiltered = search
    ? users.filter(user => user.name.toLowerCase().startsWith(normalizeSearch))
    : users;

  const usersRendered =
    usersFiltered.length > 0 ? (
      usersFiltered.map(user => <UserRow key={user.name} {...user} />)
    ) : (
      <p>No hay usuarios</p>
    );
  return (
    <div className={style.list}>
      <h1>Listado de usuarios</h1>

      <input
        type='text'
        name='search'
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      {usersRendered}
    </div>
  );
};

export default UsersList;
