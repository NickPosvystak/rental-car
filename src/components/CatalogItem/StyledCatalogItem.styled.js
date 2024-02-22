import styled from 'styled-components';
import { ReactComponent as HeartIcon } from '../../images/Icons/heart.svg';

export const StyledItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 275px;
  height: 426px;
  border-radius: 14px;
  transition: transform 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);
  }
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
`;
export const StyledHeartIcon = styled(HeartIcon)`
  position: absolute;
  top: 14px;
  right: 14px;

  fill: currentColor;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  stroke-width: 3.1633;

  width: 18px;
  height: 18px;
  cursor: pointer;
  transition-duration: 750ms;

  &:hover {
    width: 22px;
    height: 22px;
    scale: 1.5;
    transition-duration: 450ms;
    path {
      fill: red;
    }
  }
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
  transition-duration: 550ms;

  &:hover {
    transition-duration: 350ms;
    background: var(--hover-color);
  }
`;
