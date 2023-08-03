import { USER_ROLES } from '../lib/contexts/UserRoles';
import style from './UserRole.module.css';

const ROLES = {
  [USER_ROLES.TEACHER]: ['Profesor', style.teacher],
  [USER_ROLES.STUDENT]: ['Alumno', style.student],
  [USER_ROLES.OTHER]: ['Otro', style.other],
};

const UserRole = ({ role }) => {
  const [roleName, roleClassName] = ROLES[role] || ROLES.other;

  return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};

export default UserRole;
