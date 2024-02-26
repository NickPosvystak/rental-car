import { Box } from '@mui/material';
import styled from 'styled-components';

export const StyledModalContainer = styled.div`
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
  width: 541px;
  height: 752px;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 40px;

  border-radius: 24px;

  background: var(--second-color);
`;
export const StyledImg = styled.img`
  object-fit: cover;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  padding-bottom: 10px;
`;
export const StyledModel = styled.span`
  color: var(--modelsColor);
`;

export const StyledModelBox = styled.div`
  font-size: var(--modalTitleFont);
  font-weight: var(--font-weight-500);
  line-height: 24px;
  padding-bottom: 8px;
`;

export const StyledDescription = styled.p`
  font-size: var(--modalDescriptionFont);
  font-weight: var(--font-weight-400);
  line-height: 18px;
  color: var(--modalDescriptionColor);
  padding-bottom: 14px;
`;
export const StyledModelDescription = styled.p`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-400);
  line-height: 20px;
  padding-bottom: 24px;
  color: var(--primaryColor);
`;
export const StyledFunc = styled.p`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-500);
  line-height: 20px;
  padding-bottom: 8px;
  color: var(--primaryColor);
`;
export const StyledFuncDesc = styled.p`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-500);
  line-height: 20px;
  color: var(--modalDescriptionColor);
  padding-bottom: 24px;
`;
export const StyledConditionsTitle = styled.h3`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-500);
  line-height: 20px;
  padding-bottom: 8px;
`;
export const StyledItems = styled.span`
  font-size: var(--modalDescriptionFont);
  font-weight: var(--font-weight-600);
  line-height: 18px;
  color: var(--modalItemsColor);
  padding: 7px 14px;
`;

export const StyledItemsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 50px;
`;
export const StyledBtn = styled.a`
  font-size: var(--modalModelFont);
  font-weight: var(--font-weight-600);
  line-height: 20px;
  color: var(--second-color);
  /* width: 168px;
  height: 44px; */
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  margin-top: auto;

  background: var(--modelsColor);

  transition-duration: 550ms;

  &:hover {
    transition-duration: 350ms;
    background: var(--hover-color);
  }
`;
