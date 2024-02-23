import * as React from 'react';
import Modal from '@mui/material/Modal';
import { StyledBox, StyledBtnMore, StyledDescription, StyledModel, StyledModelBox } from './StyledModal.styled';

export default function CarModal({ carInfo }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
      const addressParts = carInfo.address.split(',').map(part => part.trim());
      const city = addressParts[1];
      const country = addressParts[2];

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
            <img
              src={carInfo.img}
              alt={carInfo.make}
              width="461"
              height="248"
            />
            <StyledModelBox>
              <span>
                {carInfo.make.charAt(0).toUpperCase() + carInfo.make.slice(1)}&nbsp;
                <StyledModel>{carInfo.model},</StyledModel>
                &nbsp;{carInfo.year}
              </span>
            </StyledModelBox>
            <div>
              <StyledDescription>
                {city}, {country} | id:{carInfo.id}| Year:
                {carInfo.year}| Type:{carInfo.type} | fuelConsumption:
                {carInfo.fuelConsumption} | engineSize:
                {carInfo.engineSize}
              </StyledDescription>
              <p>{carInfo.description}</p>
            </div>
            <div>
              <h2>Accessories and functionalities:</h2>
              <p>{carInfo.functionalities}.trim('|')</p>
            </div>
            <div>
              <p>Minimum age:{carInfo.rentalConditions[0]}</p>
              <p>{carInfo.rentalConditions[1]}</p>
              <p>{carInfo.rentalConditions[2]}</p>
              <p>Mileage:{carInfo.mileage}</p>
              <p>Price:{carInfo.rentalPrice}</p>
            </div>
            <a href="tel:+380730000000">Rental car</a>
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
}
