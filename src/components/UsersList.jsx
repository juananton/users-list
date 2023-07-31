import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
  const [search, setSearch] = useState('');
  const [onlyActive, setOnlyActive] = useState(false);
  const [sortBy, setSortBy] = useState(0);

  let usersFiltered = filterActiveUsers(users, onlyActive);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = sortUsers(usersFiltered, sortBy);
  const usersRendered = RenderUsers(usersFiltered);

  return (
    <div className={style.wrapper}>
      <h1>Listado de usuarios</h1>
      <form className={style.form}>
        <input
          type='text'
          value={search}
          onChange={ev => setSearch(ev.target.value)}
        />
        <div className={style.active}>
          <input
            type='checkbox'
            checked={onlyActive}
            onChange={ev => setOnlyActive(ev.target.checked)}
          />
          <span>Sólo activos</span>
        </div>
        <select
          value={sortBy}
          onChange={ev => setSortBy(Number(ev.target.value))}
        >
          <option value={0}>Por defecto</option>
          <option value={1}>Por nombre</option>
        </select>
      </form>
      {usersRendered}
    </div>
  );
};

const filterUsersByName = (users, search) => {
  if (!search) return users;

  const lowerCasedSearch = search.toLowerCase();

  return users.filter(user =>
    user.name.toLowerCase().startsWith(lowerCasedSearch)
  );
};

const filterActiveUsers = (users, active) => {
  if (!active) return users;

  return users.filter(user => user.active);
};

const sortUsers = (users, sortBy) => {
  switch (sortBy) {
    case 1:
      return users.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    default:
      return users;
  }
};

const RenderUsers = users => {
  if (users.length <= 0) return <p>No hay usuarios</p>;
  return users.map(user => <UserRow key={user.name} {...user} />);
};

export default UsersList;
