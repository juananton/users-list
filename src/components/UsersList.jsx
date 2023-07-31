import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
  const usersRendered =
    users.length > 0 ? (
      users.map(user => <UserRow key={user.name} {...user} />)
    ) : (
      <p>No hay usuarios</p>
    );
  return (
    <div className={style.list}>
      <h1>Listado de usuarios</h1>
      {usersRendered}
    </div>
  );
};

export default UsersList;
