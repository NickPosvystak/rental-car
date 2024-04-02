import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoHomeOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';

export const StyledContainer = styled.div`
position: fixed;
z-index: 1;
width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  /* padding-bottom: 18px; */
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);

  @media only screen and (min-width: 768px) {
    height: 84px;
  }
  @media only screen and (min-width: 1440px) {
    height: 100px;
  }
`;

export const StyledImgLogo = styled.img`
  padding-left: 10px;
  width: 50px;
  @media only screen and (min-width: 768px) {
    padding-left: 24px;
    width: 100px;
  }
  @media only screen and (min-width: 1440px) {
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
    font-size: var(--homeFont);
    border: none;
    border-radius: 6px;
    padding: 4px 12px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
  }
  @media only screen and (min-width: 1440px) {
    font-size: var(--headerFontSize);
    padding: 10px 18px;
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
