import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
function Navigation() {
  const isLogged = useSelector(state => state.auth.isLoggedIn);
  const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-weight: 400;
    font-size: 40px;
    line-height: 2;
    text-align: center;
    transition: color 250ms linear;
    &.active {
      color: #3f51b5;
    }
    :hover {
      color: #3f51b5;
    }
  `;

  const StyledContainer = styled.div`
    display: flex;
    gap: 20px;
  `;
  return (
    <StyledContainer>
      <StyledLink to="/">Home</StyledLink>
      {isLogged && <StyledLink to="contacts">Contacts</StyledLink>}
    </StyledContainer>
  );
}
export default Navigation;
