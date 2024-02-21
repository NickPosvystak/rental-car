import {
  StyledBtn,
  StyledCarDescription,
  StyledHeartIcon,
  StyledImg,
  StyledItem,
  StyledModel,
  StyledModelName,
} from './StyledCatalogItem.styled';
// import { ReactComponent as HeartIcon } from '../../images/Icons/heart.svg';

export const CatalogItem = ({ car }) => {
  if (!car) {
    return null;
  }

  const addressParts = car.address.split(',').map(part => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <StyledItem>
      <StyledImg src={car.img} alt={car.make} />
      {/* <StyledIconBtn onClick={() => toggleFavorite(id)}>
        <StyledHeart className={isFavorite(id) ? 'favorite' : ''} />
      </StyledIconBtn> */}
      <StyledHeartIcon />
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
