import styled from "styled-components";
// import { sidebarColor, fontColor, darkBtnColor, lightBtnColor, tileColor, hoverButtonColor } from "const";

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: auto auto auto auto auto;
  grid-template-reows: auto auto auto auto auto;
  gap: 0.5rem;
`;
export const NotifycationStyleComponent = styled.div`
  z-index:2;
  position: absolute;
  display: align;
  padding: 0.875rem 2rem;
  background-color: rgb(33 55 67);
  border: 3px solid rgb(0 231 1);
  border-radius: 0.375rem;
  justify-content: center;
  align-content: center;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
`;
export const BetTimesStyleComponent = styled.span`
  color: rgb(0 231 1);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const HorizontalBar = styled.div`
  display: block;
  background-color: rgb(47 69 83);
  width: 50%;
  height: 3px;
  margin: auto;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;
export const ProfitStyleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfitStyleComponent = styled.span`
  color: rgb(0 231 1);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-right: 0.25rem;
`;
export const DollarStyleComponent = styled.img`
  width: 1rem;
`;
