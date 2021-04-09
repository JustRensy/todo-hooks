import styled from 'styled-components';

const Todo = ({ todo }) => {
	return (
		<TodoWrapper>
			<li>{todo.text}</li>
			<i>X</i>
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

	i {
		color: red;
		font-weight: bold;
		cursor: pointer;
	}
`;

export default Todo;
