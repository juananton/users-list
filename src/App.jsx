import UsersList from './components/UsersList';
import './styles/index.css';

const USERS = [
	{
		name: 'Pablo Castellanos',
		id: 1,
		active: true,
		role: 'teacher'
	},
	{
		name: 'José Miguel Fernández',
		id: 2,
		active: true,
		role: 'teacher'
	},
	{
		name: 'Javier García',
		id: 3,
		active: false,
		role: 'student'
	},
	{
		name: 'María Pérez',
		id: 4,
		active: false,
		role: 'assistant'
	},
	{
		name: 'Alejandro González',
		id: 5,
		active: true,
		role: 'student'
	}
];

const App = () => <UsersList users={USERS} />;

export default App;
