import styled from 'styled-components';

export const StyledBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  padding: 50px 107px 100px;
`;

export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const StyledTitle = styled.h2`
margin-bottom: 0;
`;

export const StyledImg = styled.img`
  transition: transform 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 500ms;
  &:hover {
    transform: scale(1.1);
  }
`;
