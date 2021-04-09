import Navbar from './components/Layout/Navbar';
import TodoList from './components/TodoList';
import { Container } from './helpers/Container';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';
import { TodoProivder } from './context/TodoContext';

const App = () => {
	return (
		<TodoProivder>
			<div className='app'>
				<Navbar />
				<StyledContainer>
					<TodoWrapper>
						<TodoForm />
						<TodoList />
					</TodoWrapper>
				</StyledContainer>
			</div>
		</TodoProivder>
	);
};

const TodoWrapper = styled.div`
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;
`;

const StyledContainer = styled(Container)`
	height: 100%;
`;

export default App;
