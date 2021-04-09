import styled from 'styled-components';
import { Container } from '../../helpers/Container';

const Navbar = () => {
	return (
		<StyledNav>
			<StyledContainer>
				<h1>Todo Application</h1>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
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
		list-style: none;
	}

	li {
		margin-right: 1.5rem;
		cursor: pointer;
		font-size: 1.2rem;

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
