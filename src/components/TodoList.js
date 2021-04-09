import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = () => {
	const [todos] = useContext(TodoContext);

	return (
		<TodoListWrapper>
			<h2>Todos: {todos.length}</h2>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</TodoListWrapper>
	);
};

const TodoListWrapper = styled.div`
	width: 50%;

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
`;

export default TodoList;
