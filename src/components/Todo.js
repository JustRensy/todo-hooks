import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';

const Todo = ({ todo }) => {
	return (
		<TodoWrapper>
			<li>{todo.text}</li>
			<TiDeleteOutline className='deleteIcon' />
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
