import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';

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
  padding: 10px 24px;
  margin-right: 24px;

  cursor: pointer;
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 10px;
  text-decoration: none;
  color: var(--primaryColor);
  &.active {
    color: var(--modelsColor);
  }
`;
export const StyledHomeIcon = styled(IoHomeOutline)`
  ${StyledNavLink}.active & {
    fill: var(--modelsColor);
  }
`;
export const StyledCatalogIcon = styled(IoCarSportOutline)`
  ${StyledNavLink}.active & {
    fill: var(--modelsColor);
  }
`;

export const StyledFavoriteIcon = styled(MdFavoriteBorder)`
  ${StyledNavLink}.active & {
    fill: var(--modelsColor);
  }
`;
export const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 128px;
`;

export const StyledImgLogo = styled.img`
width: 140px;

`;