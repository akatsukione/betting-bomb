import React from "react";
import { MineSelectComponent, InputComponentContainer } from "./style";

export const SelectComponent: React.FC = () => {
  return (
    <InputComponentContainer>
      <MineSelectComponent defaultValue={3}>
        {/* {[1,2,3,4,5,6,7,8,9,10].map((i) => {
           return <option value='i' key='i'>{i}</option>
        })} */}
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </MineSelectComponent>
    </InputComponentContainer>
  );
};
