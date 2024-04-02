import styled from 'styled-components';

export const StyledBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  justify-content: space-evenly;
  padding-top: 84px;
  padding-bottom: 50px;
  @media only screen and (min-width: 768px) {
    padding-top: 110px;
  }
  @media only screen and (min-width: 1440px) {
    padding-top: 130px;
  }
`;
