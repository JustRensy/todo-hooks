import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = () => {
	const [todos] = useContext(TodoContext);

	return (
		<TodoListWrapper>
			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} />;
			})}
		</TodoListWrapper>
	);
};

const TodoListWrapper = styled.div`
	width: 50%;
`;

export default TodoList;
