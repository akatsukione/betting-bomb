import React from "react";
import { MineSelectComponent, InputComponentContainer } from "./style";
import { Dispatcher } from "types";
interface SelectComponentProps {
  bombNum: number,
  setBombNum: Dispatcher<number>
}
export const SelectComponent: React.FC<SelectComponentProps> = (props) => {
  const onSelectAction = (value:number) => {
    props.setBombNum(value)
  }
  return (
    <InputComponentContainer>
      <MineSelectComponent defaultValue={props.bombNum} onChange={(e) => onSelectAction(parseInt(e.target.value))}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((i) => {
           return <option value={i} key={i}>{i}</option>
        })}
      </MineSelectComponent>
    </InputComponentContainer>
  );
};
