import styled from "styled-components";
import {hoverColor, tileColor } from "const";

interface InputComponentProps {
  backgroundcolor: string;
}
export const InputComponentContainer = styled.div`
    position:relative;
    box-sizing:border-box;
`;
export const InputComponent = styled.input<
InputComponentProps
>`
border-top-left-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;
  border-color: rgb(47 69 83);
  padding: 0.625rem;
  padding-right: 2rem;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 2px solid ${tileColor};
  outline: 2px solid transparent;
  outline-offset: 2px;
  color:${(props) => props.color};
  background-color:${(props) => props.backgroundcolor};
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 2px 0 rgba(0,0,0,0.12);
  box-sizing:border-box;
  &.disableInput{
    pointer-events: none;
  }
  &:not(.bet-amount){
    border-radius: 0.25rem;
  }
  &:hover {
    border-color: ${hoverColor}
  }
`;
  
export const InputIconContainer = styled.div`
top: 0;
bottom: 0;
padding-right: 0.75rem;
right: 0;
position:absolute;
display: flex;
align-items: center;

`;
export const IconImage = styled.img`
  height: 1rem
`;
