import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 34px;
`;

export const StyledImgLogo = styled.img`
width: 50px;
@media only screen and (min-width: 768px){

  width: 140px;
}
`;
export const StyledNavContainer = styled.div`
  display: flex;
  justify-content: end;
  font-size: var(--headerFontSize);
`;
export const StyledHeader = styled.div`
display: none;

@media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 6px;
    padding: 10px 18px;
    /* margin-right: 24px; */
    cursor: pointer;
  
    &:last-child {
      margin-right: 0;
    }

}
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
