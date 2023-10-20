import styled from "styled-components";
import { sidebarColor, fontColor, darkBtnColor, lightBtnColor, tileColor, hoverButtonColor } from "const";

export const SidebarContainer = styled.div`
  width: 24rem;

  padding: 0.75rem;
  background-color: ${sidebarColor};
`;
export const SidebarSection = styled.div`
  width: 100%;
  margin-bottom: 0.75rem;
`;
export const SettingGroup = styled.div`
  
`;
export const LabelFlexContainer = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
export const LabelComponent = styled.label`
  color: ${fontColor};
  font-weight: 500;
  font-size: 0.875rem;
  &.${(props) => props.className} {
    padding-top: 4px;
    display: inline-block;
    font-size: 0.75rem;
    line-height: 1rem;
    vertical-align: bottom;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const BetBtn = styled.button`
  padding: 10px;
`;
export const FlexContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  // justify-content: space-between;
`;
export const RandomBtn = styled.button`
  border-radius: 0.25rem;
  border-color: rgb(47 69 83);
  padding: 0.625rem;
  padding-right: 2rem;
  font-weight: 500;
  // cursor: not-allowed;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 2px solid ${tileColor};
  outline: 2px solid transparent;
  outline-offset: 2px;
  color: ${fontColor};
  background-color: ${tileColor};
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2),0 1px 2px 0 rgba(0,0,0,0.12);
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: ${hoverButtonColor};
    border-color: ${hoverButtonColor};
    cursor: pointer;
  }
`;
export const ButtonComponent = styled.button`
  background-color: ${darkBtnColor};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 3.5rem;
  border-width: 0;
  
  &:not(.disable):hover {
    background-color: ${lightBtnColor};
    cursor: pointer;
  }
  &.disable:hover {
    background-color:red;
    cursor: not-allowed;
  }
  &.disable {
    opacity:0.5;
    pointer-events:none;
  }
`;
