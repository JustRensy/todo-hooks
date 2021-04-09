import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Todo = ({ todo }) => {
	const [todos, setTodos] = useContext(TodoContext);

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<TodoWrapper>
			<li>{todo.text}</li>
			<TiDeleteOutline onClick={deleteTodo} className='deleteIcon' />
		</TodoWrapper>
	);
};

const TodoWrapper = styled.div`
	list-style: none;
	padding: 1rem;
	font-size: 1.75rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #1597bb;
	margin-bottom: 1rem;

	.deleteIcon {
		cursor: pointer;
		color: #d70000;
		font-size: 2.5rem;
	}
`;

export default Todo;
