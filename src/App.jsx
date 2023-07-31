import UsersList from './components/UsersList';

const USERS = [
  {
    name: 'Pablo Castellanos',
    active: true,
    role: 'teacher',
  },
  {
    name: 'José Miguel Fernández',
    active: true,
    role: 'teacher',
  },
  {
    name: 'Javier lópez',
    active: false,
    role: 'student',
  },
];

const App = () => <UsersList users={USERS} />;

export default App;
