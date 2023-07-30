import UserRow from './UserRow';

const UsersList = ({ users }) => {
  const usersRendered = users.map(user => (
    <UserRow key={user.name} {...user} />
  ));
  return (
    <div className='list'>
      <h1>Listado de usuarios</h1>
      {usersRendered}
    </div>
  );
};

export default UsersList;
