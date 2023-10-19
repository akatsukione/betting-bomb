import styled from "styled-components";
import { basicColor, tileColor, fontColor } from "const";

export const InputComponentContainer = styled.div`
    position:relative;
    width:100%;
    box-sizing:border-box;
`;
export const MineSelectComponent = styled.select<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  padding: 0.625rem;
  font-weight: 500;
  // cursor: not-allowed;
  font-size: 0.875rem;
  line-height: 1.25rem;
  background-color: ${basicColor};
  border: 2px solid ${tileColor};
  outline: 2px solid transparent;
  outline-offset: 2px;
  width:100%;
  color: ${fontColor};
`;
