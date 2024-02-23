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
import { addToFavorites, removeFromFavorites } from '../../redux/carReducer';
import { selectFavoritesCars } from '../../redux/selectors';

export const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavoritesCars);

   const isFavorite = favoritesCars.some(
     favoriteCar => favoriteCar.id === car.id
   );

 const handleToggleFavorites = () => {
   if (isFavorite) {
     dispatch(removeFromFavorites(car.id));
   } else {
     dispatch(addToFavorites(car));
   }
  };
  
  const addressParts = car.address.split(',').map(part => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <StyledItem>
      <StyledImg src={car.img} alt={car.make} />
      <StyledHeartIcon
        isFavorite={isFavorite}
        onClick={handleToggleFavorites}
      />

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
