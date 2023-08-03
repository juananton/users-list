import UsersList from './components/UsersList';

const USERS = [
  {
    username: 'Pablo',
    name: 'Pablo Castellanos',
    active: true,
    role: 'teacher',
  },
  {
    username: 'jose',
    name: 'José Miguel Fernández',
    active: true,
    role: 'teacher',
  },
  {
    username: 'javier',
    name: 'Javier lópez',
    active: false,
    role: 'student',
  },
];

const App = () => <UsersList initialUsers={USERS} />;

export default App;
