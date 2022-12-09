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
		name: 'Javier López',
		id: 3,
		active: false,
		role: 'student'
	},
	{
		name: 'María Pérez',
		id: 4,
		active: false,
		role: 'assistant'
	}
];

const App = () => (
	<UsersList users={[USERS]}>
		<h3>Users list</h3>
	</UsersList>
);

export default App;
