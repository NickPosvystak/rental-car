import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 90px;
  height: 24px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  /* padding-bottom: 84px; */

  font-size: var(--loadBtnFont);
  font-weight: var(--font-weight-500);
  line-height: 24px;
  text-decoration-line: underline;
  color: var(--modelsColor);

  cursor: pointer;
  transition-duration: 550ms;

  &:hover {
    transition-duration: 350ms;
    color: var(--hover-color);
  }
`;

export const StyledText = styled.h2`
text-align: center;
`