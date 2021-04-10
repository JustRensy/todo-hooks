import styled from 'styled-components';
import { Container } from '../../helpers/Container';
import { CgDarkMode } from 'react-icons/cg';

const Navbar = ({ themeToggle, theme, setTheme }) => {
	return (
		<StyledNav>
			<StyledContainer>
				<h1>Todo Application</h1>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
					<CgDarkMode onClick={themeToggle} className='themeToggle' />
				</ul>
			</StyledContainer>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	background: #212121;
	height: 4vh;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 10px;

	h1 {
		cursor: pointer;
		font-size: 2rem;
		color: #1597bb;
	}

	ul {
		display: flex;
		align-items: center;
		list-style: none;
		color: white;

		.themeToggle {
			font-size: 1.5rem;
			cursor: pointer;
			transition: all 0.3s ease;

			&:hover {
				color: #1597bb;
			}
		}
	}

	li {
		margin-right: 1.5rem;
		cursor: pointer;
		font-size: 1.2rem;
		transition: all 0.3s ease;

		&:hover {
			color: #1597bb;
		}
	}
`;

const StyledContainer = styled(Container)`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export default Navbar;
