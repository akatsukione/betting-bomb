import React from "react";
import {
  InputComponent,
  InputIconContainer,
  InputComponentContainer,
  IconImage,
} from "./style";

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

interface InputComponentType<T> {
  icon?: string;
  color: string;
  type: string;
  background: string;
  disable?: boolean;
  classname?: string;
  setAction?: Dispatcher<T>;
  initialValue: number;
}
export const BtcInputComponent: React.FC<InputComponentType<number>> = (
  props
) => {
  const changeValue = (amount:number) => {
    if (props.setAction) {
      props.setAction(amount)
    }
  }
  return (
    <InputComponentContainer>
      <InputComponent
        type={props.type}
        value={props.type === 'number' ? Number(props.initialValue).toFixed(2):props.initialValue}
        step="0.01"
        className={
          (props.classname ?? "") + (props.disable ? " disableInput" : "")
        }
        backgroundcolor={props.background}
        color={props.color}
        onChange={(e)=>{
          changeValue(parseFloat(e.target.value))
        }}
        readOnly = {props.type === 'text'}
      />
      <InputIconContainer>
        <IconImage src={props.icon} alt="" />
      </InputIconContainer>
    </InputComponentContainer>
  );
};
