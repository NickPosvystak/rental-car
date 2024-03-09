import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    /* padding: 10px; */
  }
`;
export const StyledTitle = styled.h1`
  align-items: center;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 14px;
`;

export const StyledDescription = styled.p`
  text-align: justify;
  letter-spacing: 0.7px;
  line-height: 30px;
  /* padding: 10px 40px; */
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    font-size: var(--homeFont);
  }
`;

export const StyledImg = styled.img`
  text-align: center;
  width: 80%;
  transition: transform 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 500ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
