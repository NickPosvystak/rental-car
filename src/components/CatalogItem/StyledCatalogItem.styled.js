import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../images/Icons/heart.svg';

export const StyledItem = styled.li`
position: relative;
  display: flex;
  flex-direction: column;

  width: 275px;
  height: 426px;
  border-radius: 14px;
`;

export const StyledImg = styled.img`
  object-fit: cover;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.071%
    ),
    url(image);
  border-radius: 14px;

  width: 274px;
  height: 268px;
  &:focus {
    outline: none;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
export const StyledHeartIcon = styled(HeartIcon)`
  position: absolute;
  top: 12px;
  right: 12px;

  fill: currentColor;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  stroke-width: 3.1633;

  width: 24px;
  height: 24px;
`;

export const StyledModelName = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 14px;
  font-size: 16px;
  font-weight: var(--font-weight-500);
  line-height: 24px;
  letter-spacing: 0%;
`;
export const StyledCarDescription = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight-400);
  line-height: 18px;
  letter-spacing: 0%;
`;
export const StyledModel = styled.span`
  color: var(--modelsColor);
`;
export const StyledBtn = styled.button`
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
`;
