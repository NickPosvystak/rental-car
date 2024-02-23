import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBtnMore = styled.button`
  font-size: 14px;
  font-weight: var(--font-weight-600);
  line-height: 20px;

  color: var(--second-color);

  border-radius: 12px;
  background: var(--modelsColor);
  width: 274px;
  height: 44px;
  margin-top: auto;
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
  height: 652px;
  background-color: background-paper;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 40px;

  border-radius: 24px;

  background: rgb(255, 255, 255);
`;
export const StyledModel = styled.span`
  color: var(--modelsColor);
`;

export const StyledModelBox = styled.div`
  font-size: var(--modalTitleFont);
  font-weight: var(--font-weight-500);
  line-height: 24px;
`;

export const StyledDescription = styled.p`
  font-size: var(--modalDescriptionFont);
  font-weight: var(--font-weight-400);
  line-height: 18px;
  color: var(--modalDescriptionColor);
`;