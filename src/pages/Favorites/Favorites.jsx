import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoritesCars } from '../../redux/selectors';
import { loadFavoritesFromStorage } from '../../redux/carReducer';
import {
  StyledBTN,
  StyledBox,
  StyledContainer,
  StyledImgBg,
  StyledTitle,
} from './StyledFavorites.styled';
import Car from '../../images/car.png';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const navigate = useNavigate();
  const favoritesCars = useSelector(selectFavoritesCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavoritesFromStorage());
  }, [dispatch]);

   const handleOptionClick = () => {
            navigate('/catalog');
          }
   
  return (
    <>
      <StyledBox>
        {favoritesCars.length === 0 ? (
          <StyledContainer>
            <StyledTitle>Here saves your favorites cars</StyledTitle>
            <StyledImgBg src={Car} alt="Car" />
            <StyledBTN onClick={()=> {handleOptionClick()}}>Go back to Catalog</StyledBTN>
          </StyledContainer>
        ) : (
          favoritesCars.map(car => <CatalogItem key={car.id} car={car} />)
        )}
      </StyledBox>
    </>
  );
};

export default Favorites;
