import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users, children }) => {
	const usersRendered =
		users.length > 0 ? (
			users.map(user => (
				<UserRow
					name={user.name}
					key={user.id}
					active={user.active}
					role={user.role}
				/>
			))
		) : (
			<p>No users to display</p>
		);
	return (
		<div className={style.wrapper}>
			{children}
			{usersRendered}
		</div>
	);
};

export default UsersList;
