import { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { v4 as uuid } from 'uuid';

const TodoForm = () => {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useContext(TodoContext);

	const addTodo = (e) => {
		e.preventDefault();

		if (!input || input.startsWith(' ')) {
			return;
		} else {
			setTodos([...todos, { id: uuid(), text: input, completed: false }]);
			setInput('');
		}
	};

	return (
		<StyledForm onSubmit={addTodo}>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				type='text'
				placeholder='What are your plans?'
			/>
			<button>Add Todo</button>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	margin-bottom: 5rem;
	display: flex;
	flex-direction: column;
	width: 50%;

	input {
		background: none;
		outline: none;
		border: 1px solid #1597bb;
		color: white;
		font-size: 2rem;
		padding: 1rem;
	}

	button {
		padding: 1rem 0;
		width: 100%;
		font-size: 1.5rem;
		font-weight: bold;
		background: #1597bb;
		color: white;
		border: none;
		font-family: inherit;
		cursor: pointer;
		outline: none;

		&:hover {
			opacity: 0.8;
		}
	}
`;

export default TodoForm;
