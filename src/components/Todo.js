import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { GrDrag } from 'react-icons/gr';
import { db } from '../firebase';

const Todo = ({ todo }) => {
	const [todos, setTodos] = useContext(TodoContext);

	return (
		<TodoWrapper>
			<GrDrag className='dragIcon' />
			<li>{todo.text}</li>
			<TiDeleteOutline
				onClick={() => db.collection('todos').doc(todo.id).delete()}
				className='deleteIcon'
			/>
		</TodoWrapper>
	);
};

const TodoWrapper = styled.div`
	list-style: none;
	padding: 1rem;
	font-size: 1.75rem;
	color: white;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #1597bb;
	margin-bottom: 1rem;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}

	.deleteIcon {
		cursor: pointer;
		color: #d70000;
		font-size: 2.5rem;
		transition: all 0.3s ease;

		&:hover {
			color: red;
		}
	}

	.dragIcon {
		cursor: pointer;
	}
`;

export default Todo;
