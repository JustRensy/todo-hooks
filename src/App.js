import Navbar from './components/Layout/Navbar';
import TodoList from './components/TodoList';
import { Container } from './helpers/Container';
import TodoForm from './components/TodoForm';
import styled from 'styled-components';
import { TodoProivder } from './context/TodoContext';
import Footer from './components/Layout/Footer';

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
					<Footer />
				</StyledContainer>
			</div>
		</TodoProivder>
	);
};

const TodoWrapper = styled.div`
	height: 100%;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10rem;
`;

const StyledContainer = styled(Container)`
	height: 96vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export default App;
