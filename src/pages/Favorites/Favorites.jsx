import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from '../../redux/selectors';
import { loadFavoritesFromStorage } from '../../redux/carReducer';
import {
  StyledBox,
  StyledContainer,
  StyledImg,
  StyledTitle,
} from './StyledFavorites.styled';
import Car from '../../images/car.png';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavoritesCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

  return (
    <>
      <StyledBox>
        {favoritesCars.length === 0 ? (
          <StyledContainer>
            <StyledTitle>Here saves favorite cars</StyledTitle>
            <StyledImg src={Car} alt="Car" />
          </StyledContainer>
        ) : (
          favoritesCars.map(car => <CatalogItem key={car.id} car={car} />)
        )}
      </StyledBox>
    </>
  );
};

export default Favorites;
