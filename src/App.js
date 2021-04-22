import { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import TodoList from './components/TodoList';
import { Container } from './helpers/Container';
import TodoForm from './components/TodoForm';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from './themes';
import { TodoProivder } from './context/TodoContext';
import Footer from './components/Layout/Footer';

const App = () => {
	const [theme, setTheme] = useState('dark');

	const themeToggle = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyle />
			<TodoProivder>
				<div className='app'>
					<Navbar themeToggle={themeToggle} theme={theme} setTheme={setTheme} />
					<StyledContainer>
						<TodoWrapper>
							<TodoForm />
							<TodoList />
						</TodoWrapper>
						<Footer />
					</StyledContainer>
				</div>
			</TodoProivder>
		</ThemeProvider>
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
