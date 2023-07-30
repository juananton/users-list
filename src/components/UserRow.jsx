const UserRow = ({ name, active, role, ...props }) => (
  <div className='user' {...props}>
    <span className='name'>{name}</span>
    <span className='active'>{active}</span>
    <span className='role'>{role}</span>
  </div>
);

export default UserRow;
