import { NavLink } from "react-router-dom"
import styled from 'styled-components';

function AuthNav () {
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
  
  const StyledContainer = styled.div
  `
 display: flex;
 gap: 40px;
 
 
  `
    return(
        <StyledContainer>
            <StyledLink to="login" >Login</StyledLink>
            <StyledLink to="register" >Register</StyledLink>

        </StyledContainer>
    )

}
export default AuthNav