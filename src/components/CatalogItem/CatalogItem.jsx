import { useDispatch, useSelector } from 'react-redux';
import {
  StyledBtn,
  StyledCarDescription,
  StyledHeartIcon,
  StyledImg,
  StyledItem,
  StyledModel,
  StyledModelName,
} from './StyledCatalogItem.styled';
import { useState } from 'react';
import { addToFavorites, removeFromFavorites } from '../../redux/carReducer';
import { selectFavoritesCars } from '../../redux/selectors';
import { SvgHeart } from './SvgHeart';

export const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoritesCars = useSelector(selectFavoritesCars);

  if (!car) {
    return null;
  }

  const handleToggleFavorites = () => {
    if (isFavorite) {
      console.log('isFavorite: ', isFavorite);
      dispatch(removeFromFavorites(car.id));
      console.log('removeFromFavorites(car.id): ', removeFromFavorites(car.id));
    } else {
      if (!favoritesCars.some(favoriteCar => favoriteCar.id === car.id)) {
        dispatch(addToFavorites(car));
      }
    }
    setIsFavorite(prevState => !prevState);
  };

  const addressParts = car.address.split(',').map(part => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <StyledItem>
      <StyledImg src={car.img} alt={car.make} />
      <SvgHeart isFavorite={isFavorite} onClick={handleToggleFavorites} />

      <StyledModelName>
        <span>
          {car.make.charAt(0).toUpperCase() + car.make.slice(1)},&nbsp;
          <StyledModel>{car.model}</StyledModel>
          &nbsp;{car.year},
        </span>
        <span>{car.rentalPrice}</span>
      </StyledModelName>
      <StyledCarDescription>
        {city}, {country} | {car.rentalCompany} | {car.type} | {car.id} |{' '}
        {car.accessories[0]}
      </StyledCarDescription>
      <StyledBtn
      // carId={car.id}
      // carInfo={{
      //   img,
      //   make,
      //   model,
      //   year,
      //   city,
      //   country,
      //   type,
      //   id,
      //   accessories,
      //   functionalities,
      //   rentalPrice,
      //   rentalCompany,
      //   address,
      //   rentalConditions,
      //   mileage,
      // }}
      >
        Learn more
      </StyledBtn>
    </StyledItem>
  );
};
