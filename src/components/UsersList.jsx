import { useState } from 'react';
import UserRow from './UserRow';
import style from './UsersList.module.css';

const UsersList = ({ users }) => {
	const [search, setSearch] = useState('');

	const usersFiltered = filterUsersByName(users, search);
	const usersRendered = renderUsers(usersFiltered);

	return (
		<div className={style.wrapper}>
			<h3>Users list</h3>
			<input
				type='text'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
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

const renderUsers = users => {
	if (users - length === 0) return <p>No users to display</p>;

	return users.map(user => <UserRow key={user.id} {...user} />);
};

export default UsersList;
