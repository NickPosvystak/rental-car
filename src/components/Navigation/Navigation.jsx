import React from 'react';

import {
  StyledCatalogIcon,
  StyledContainer,
  StyledFavoriteIcon,
  StyledHeader,
  StyledHomeIcon,
  StyledImgLogo,
  StyledNavContainer,
  StyledNavLink,
} from './StyledNavigation.styled';
import { Outlet } from 'react-router-dom';
import Logo from '../../images/LOGOCar.png';
import LongMenu from 'components/Burger/Burger';

export const Navigation = () => {
  return (
    <StyledContainer>
      <StyledImgLogo src={Logo} alt="logo" />

      <StyledNavContainer>
        <LongMenu />
        <StyledHeader>
          <StyledNavLink to="/" activeclassname="active">
            <StyledHomeIcon />
            Home
          </StyledNavLink>
        </StyledHeader>
        <StyledHeader>
          <StyledNavLink to="/catalog">
            <StyledCatalogIcon />
            Catalog
          </StyledNavLink>
        </StyledHeader>
        <StyledHeader>
          <StyledNavLink to="/favorites">
            <StyledFavoriteIcon />
            Favorites
          </StyledNavLink>
        </StyledHeader>
      </StyledNavContainer>
      <Outlet />
    </StyledContainer>
  );
};
