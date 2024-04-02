import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useNavigate } from 'react-router-dom';
import { StyledBurgerContainer } from './StyledBurger.styled';

const options = ['Home', 'Catalog', 'Favorites'];

export default function LongMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOptionClick = option => {
    switch (option) {
      case 'Home':
        navigate('/');
        handleClose();
        break;
      case 'Catalog':
        navigate('/catalog');
        handleClose();
        break;
      case 'Favorites':
        navigate('/favorites');
        handleClose();
        break;
      default:
        break;
    }
  };

  return (
    <StyledBurgerContainer>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            top: '15px',
            right: '30px',
            width: '70vw',
            height: '30vh',
            backgroundColor: '#ebe5e5', 
            borderRadius: '8px', 
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
          },
        }}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </StyledBurgerContainer>
  );
}
