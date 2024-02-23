import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: end;
  padding: 40px;
  font-size: var(--headerFontSize);
  padding-right: 126px;
`;
export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px 24px;;
  margin-right: 24px;

  cursor: pointer;
`;
export const StyledNavLink = styled(NavLink)`
  padding-left: 10px;
  text-decoration: none;
`;
