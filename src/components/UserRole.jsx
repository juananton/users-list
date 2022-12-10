import style from './UserRole.module.css';

const ROLE_STYLES = {
	teacher: ['Teacher', style.teacher],
	student: ['Student', style.student],
	other: ['Other', null]
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return <span className={`${style.tag} ${roleClassName}`}>{roleName}</span>;
};

export default UserRole;
