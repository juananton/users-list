import UserRow from './UserRow';

const UsersList = ({ users, children }) => {
	const usersRendered = users.map(user => (
		<UserRow
			name={user.name}
			key={user.id}
			active={user.active}
			role={user.role}
		/>
	));

	return (
		<div className='list'>
			{children}
			{usersRendered}
		</div>
	);
};

export default UsersList;
