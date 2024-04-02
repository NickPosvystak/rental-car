import { Box } from '@mui/material';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const StyledModalContainer = styled.div`
  position: relative;
  margin-top: auto;
`;
export const StyledBtnMore = styled.button`
  font-size: 14px;
  font-weight: var(--font-weight-600);
  line-height: 20px;

  color: var(--second-color);

  border-radius: 12px;
  background: var(--modelsColor);
  width: 274px;
  height: 44px;
  cursor: pointer;
  transition-duration: 550ms;

  &:hover {
    transition-duration: 350ms;
    background: var(--hover-color);
  }
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-height: 100vh;
  padding: 16px 12px;
  border: 2px solid #000;
  /* box-shadow: 24px; */

  border-radius: 24px;
  background: var(--second-color);

  @media only screen and (min-width: 768px) {
    width: 541px;
    height: 752px;
    padding: 40px;
  }
`;
export const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  padding-bottom: 10px;

  @media only screen and (min-width: 768px) {
    width: 461px;
    height: 248px;
  }
`;
export const StyledModel = styled.span`
  color: var(--modelsColor);
`;

export const StyledModelBox = styled.div`
  font-size: var(--font_1);
  padding-bottom: 2px;

  @media only screen and (min-width: 768px) {
    font-size: var(--modalTitleFont);
    font-weight: var(--font-weight-500);
    line-height: 24px;
    padding-bottom: 8px;
  }
`;

export const StyledDescription = styled.p`
  font-size: var(--font_2);
  padding-bottom: 8px;
  color: var(--modalDescriptionColor);

  @media only screen and (min-width: 768px) {
    font-size: var(--modalDescriptionFont);
    font-weight: var(--font-weight-400);
    line-height: 18px;
    padding-bottom: 14px;
  }
`;
export const StyledModelDescription = styled.p`
  font-size: var(--font_3);
  padding-bottom: 14px;
  color: var(--primaryColor);

  @media only screen and (min-width: 768px) {
    font-size: var(--modalModelFont);
    font-weight: var(--font-weight-400);
    line-height: 20px;
    padding-bottom: 24px;
  }
`;
export const StyledFunc = styled.p`
  font-size: var(--font_4);
  font-weight: var(--font-weight-500);
  padding-bottom: 4px;
  color: var(--primaryColor);

  @media only screen and (min-width: 768px) {
    font-size: var(--modalModelFont);
    line-height: 20px;
    padding-bottom: 8px;
  }
`;
export const StyledFuncDesc = styled.p`
  font-size: var(--font_4);
  color: var(--modalDescriptionColor);
  line-height: 16px;
  padding-bottom: 16px;

  @media only screen and (min-width: 768px) {
    font-size: var(--modalModelFont);
    font-weight: var(--font-weight-500);
    padding-bottom: 24px;
  }
`;
export const StyledConditionsTitle = styled.h3`
  font-size: var(--modalModelFont);
  line-height: 10px;
  padding-bottom: 4px;

  @media only screen and (min-width: 768px) {
    font-weight: var(--font-weight-500);
    line-height: 20px;
    padding-bottom: 8px;
  }
`;
export const StyledItems = styled.span`
  font-size: var(--font_2);
  line-height: 12px;
  color: var(--modalItemsColor);
  padding: 4px 12px;

  @media only screen and (min-width: 768px) {
    font-size: var(--modalDescriptionFont);
    font-weight: var(--font-weight-600);
    line-height: 18px;
    padding: 7px 14px;
  }
`;

export const StyledItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding-bottom: 22px;

  @media only screen and (min-width: 768px) {
    gap: 8px;
    padding-bottom: 50px;
  }
`;
export const StyledBtn = styled.a`
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
export const StyledCloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  color: var(--hover-color);
  cursor: pointer;
  transition: transform 0.3s ease 250ms;

  &:hover {
    transform: rotate(90deg);
  }
  @media only screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    top: 22px;
    right: 18px;
  }
`;
