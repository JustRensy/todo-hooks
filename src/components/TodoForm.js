import styled from 'styled-components';

const TodoForm = () => {
	return (
		<StyledForm>
			<input type='text' placeholder='What are your plans?' />
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
		/* margin-bottom: 1rem; */
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
