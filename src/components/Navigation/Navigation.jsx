import React from 'react';

import {
  StyledCatalogIcon,
  StyledFavoriteIcon,
  StyledHeader,
  StyledHomeIcon,
  StyledNavContainer,
  StyledNavLink,
} from './StyledNavigation.styled';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <StyledNavContainer>
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
    </>
  );
};
