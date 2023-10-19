import styled from "styled-components";
import { tileColor, fontColor, hoverButtonColor } from "const";
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  &.disableInput > *:hover{
    cursor: not-allowed;
  }
  &:not(.disableInput) button:hover{
    background-color: ${hoverButtonColor}
  }
  `;

export const BetbtnComponent = styled.button`
  padding: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  outline: 2px solid transparent;
  outline-offset: 2px;
  background-color: ${tileColor};
  color: ${fontColor};
  border-width: 0;
  width: 3.5rem;
  &.double-bet{
    position:relative;
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }  
  &.double-bet::before {
    width: 0.125rem;
    bottom: 25%;
    top: 25%;
    left: -1px;
    position: absolute;
    background-color: rgb(15 33 46);
    content: " ";
  }
`;
