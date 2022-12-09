import style from './UserRow.module.css';

const UserRow = ({ name, active, role, ...props }) => {
	const activeClassName = active ? style.active : style.inactive;

	const ROLE_STYLES = {
		teacher: ['Profesor', style.teacher],
		student: ['Alumno', style.student],
		other: ['Otro', null]
	};

	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other;

	return (
		<div className={style.wrapper} {...props}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<div className={style.status}>
				<span className={activeClassName}>
					{active ? 'Activo' : 'Inactivo'}
				</span>
			</div>
			<div className={style.role}>
				<span className={`${style.tag} ${roleClassName}`}>{roleName}</span>
			</div>
		</div>
	);
};

export default UserRow;
