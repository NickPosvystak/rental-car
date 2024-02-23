import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from '../../redux/selectors';
import { loadFavoritesFromStorage } from '../../redux/carReducer';
import { StyledBox } from './StyledFavorites.styled';

const Favorites = () => {
  const favoritesCars = useSelector(selectFavoritesCars);

  console.log('favoritesCars: ===>', favoritesCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);
  
  return (
    <>
      <StyledBox>
        {favoritesCars &&
          favoritesCars.map(car => <CatalogItem key={car.id} car={car} />)}
      </StyledBox>
    </>
  );
};

export default Favorites;
