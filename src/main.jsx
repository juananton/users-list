import { createRoot } from 'react-dom/client';
import Title from './components/Title';
import UsersList from './components/UsersList';
import './index.css';

const USERS = [
	{
		name: 'Pablo Castellanos',
		id: 1,
		active: 'Activo',
		role: 'Profesor'
	},
	{
		name: 'José Miguel Fernández',
		id: 2,
		active: 'Activo',
		role: 'Profesor'
	},
	{
		name: 'Javier López',
		id: 3,
		active: 'Activo',
		role: 'Alumno'
	}
];

const app = (
	<UsersList users={USERS}>
		<Title>Listado de usuarios</Title>
	</UsersList>
);
const container = document.getElementById('root');

createRoot(container).render(app);
