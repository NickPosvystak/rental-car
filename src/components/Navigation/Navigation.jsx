import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import {
  StyledHeader,
  StyledNavContainer,
  StyledNavLink,
} from './StyledNavigation.styled';
import { Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledHeader>
          <IoHomeOutline />
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledHeader>
        <StyledHeader>
          <IoCarSportOutline />
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        </StyledHeader>
        <StyledHeader>
          <MdFavoriteBorder />
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </StyledHeader>
      </StyledNavContainer>
      <Outlet />
    </>
  );
};
