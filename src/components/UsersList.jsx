import UserRow from './UserRow';
import style from './UsersList.module.css';

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
		<div className={style.wrapper}>
			{children}
			{usersRendered}
		</div>
	);
};

export default UsersList;
