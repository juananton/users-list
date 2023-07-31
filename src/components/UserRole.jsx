import style from './UserRole.module.css';

const ROLES = {
  teacher: ['Profesor', style.teacher],
  student: ['Alumno', style.student],
  other: ['Otro', style.other],
};

const UserRole = ({ role }) => {
  const [roleName, roleClassName] = ROLES[role] || ROLES.other;

  return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};

export default UserRole;
