import React from "react";
import { InputComponent, InputIconContainer, InputComponentContainer, IconImage } from "./style";
interface InputComponentType {
  icon?: string;
  color: string;
  type: string;
  background: string;
  disable?: boolean;
  classname?:string;
}
export const BtcInputComponent: React.FC<InputComponentType> = (props) => {
  return (
    <InputComponentContainer>
      <InputComponent type={props.type} defaultValue='0.00' step="0.01" className={(props.classname ?? '') + (props.disable ? ' disableInput' : '')} backgroundcolor={props.background} color={props.color}/>
      <InputIconContainer>
        <IconImage src={props.icon} alt=""/>
      </InputIconContainer>
      
    </InputComponentContainer>
  );
};
