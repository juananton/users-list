import style from './UserDisplay.module.css';

const UserDisplay = ({ name, username }) => {
  return (
    <div>
      <div>{name}</div>
      <div className={style.username}>@{username}</div>
    </div>
  );
};

export default UserDisplay;
