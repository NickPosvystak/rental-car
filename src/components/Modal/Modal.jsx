import * as React from 'react';
import Modal from '@mui/material/Modal';
import {
  StyledBox,
  StyledBtn,
  StyledBtnMore,
  StyledConditionsTitle,
  StyledDescription,
  StyledFunc,
  StyledFuncDesc,
  StyledImg,
  StyledItems,
  StyledItemsBox,
  StyledModel,
  StyledModelBox,
  StyledModelDescription,
} from './StyledModal.styled';

export default function CarModal({ carInfo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addressParts = carInfo.address.split(',').map(part => part.trim());
  const city = addressParts[1];
  const country = addressParts[2];

  const minimumAgeMatch = carInfo.rentalConditions.match(/Minimum age: (\d+)/);
  const minimumAge = minimumAgeMatch ? minimumAgeMatch[1] : '';

  const rentalConditions = carInfo.rentalConditions.split('\n').slice(1);

  return (
    <div>
      <StyledBtnMore onClick={handleOpen}>Learn more</StyledBtnMore>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <div>
            <StyledImg src={carInfo.img} alt={carInfo.make} />
            <StyledModelBox>
              <span>
                {carInfo.make.charAt(0).toUpperCase() + carInfo.make.slice(1)}
                &nbsp;
                <StyledModel>{carInfo.model},</StyledModel>
                &nbsp;{carInfo.year}
              </span>
            </StyledModelBox>
            <div>
              <StyledDescription>
                {city}, {country} | id:{carInfo.id} | Year:
                {carInfo.year} | Type:{carInfo.type} | fuelConsumption:
                {carInfo.fuelConsumption} | engineSize:
                {carInfo.engineSize}
              </StyledDescription>
              <StyledModelDescription>
                {carInfo.description}
              </StyledModelDescription>
            </div>
            <div>
              <StyledFunc>Accessories and functionalities:</StyledFunc>
              <StyledFuncDesc>
                {carInfo.functionalities.map(func => func).join(' | ')}
              </StyledFuncDesc>
            </div>
            <div>
              <StyledConditionsTitle>RentalConditions</StyledConditionsTitle>
              <StyledItemsBox>
                <StyledItems>
                  Minimum age: <StyledModel>{minimumAge}</StyledModel>
                </StyledItems>
                {rentalConditions.map((condition, index) => (
                  <StyledItems key={index}>{condition}</StyledItems>
                ))}

                <StyledItems>
                  Mileage:{' '}
                  <StyledModel>
                    {Number(carInfo.mileage).toLocaleString()}
                  </StyledModel>
                </StyledItems>
                <StyledItems>
                  Price: <StyledModel>{carInfo.rentalPrice}</StyledModel>
                </StyledItems>
              </StyledItemsBox>
            </div>
            <StyledBtn href="tel:+380730000000">Rental car</StyledBtn>
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
}
