import { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id: uuid(), text: 'Buy Milk', completed: false },
		{ id: uuid(), text: 'Learn React', completed: true },
		{ id: uuid(), text: 'Watch Football', completed: false },
	]);

	return (
		<TodoListWrapper>
			{todos.map((todo) => {
				return <Todo todo={todo} />;
			})}
		</TodoListWrapper>
	);
};

const TodoListWrapper = styled.div`
	width: 50%;
`;

export default TodoList;
