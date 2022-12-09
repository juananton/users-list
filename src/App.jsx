import Title from './components/Title';
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
	<UsersList users={USERS}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);

export default App;
