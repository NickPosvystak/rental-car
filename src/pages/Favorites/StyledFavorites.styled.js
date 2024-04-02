import styled from 'styled-components';

export const StyledBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 29px;
  row-gap: 50px;
  padding: 86px 107px 100px;
  @media only screen and (min-width: 768px) {
    padding: 110px 107px 100px;
  }
  @media only screen and (min-width: 1440px) {
    padding: 130px 107px 100px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const StyledTitle = styled.h2`
  font-size: var(--font_1);
  padding: 50px 10px 30px;
  margin-bottom: 0;
  @media only screen and (min-width: 768px) {
    font-size: var(--homeFont);
    padding: 120px 10px 20px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: var(--headerFontSize);
    padding: 120px 10px 20px;
  }
`;

export const StyledImgBg = styled.img`
  width: 100vw;
  transition: transform 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 500ms;
  &:hover {
    transform: scale(1.1);
  }
`;
export const StyledBTN = styled.button`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-600);
  line-height: 20px;
  color: var(--second-color);
  /* width: 168px;
  height: 44px; */
  border-radius: 10px;
  margin-top: auto;
  padding: 8px 16px;
  background: var(--modelsColor);

  transition-duration: 550ms;

  &:hover {
    transition-duration: 350ms;
    background: var(--hover-color);
  }

  @media only screen and (min-width: 768px) {
    padding: 12px 50px 12px 50px;
  }
`;
