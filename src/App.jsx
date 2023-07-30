import UsersList from './components/UsersList';

const USERS = [
  {
    name: 'Pablo Castellanos',
    active: 'Activo',
    role: 'Profesor',
  },
  {
    name: 'José Miguel Fernández',
    active: 'Activo',
    role: 'Profesor',
  },
  {
    name: 'Javier lópez',
    active: 'Activo',
    role: 'Alumno',
  },
];

const App = () => <UsersList users={USERS} />;

export default App;
