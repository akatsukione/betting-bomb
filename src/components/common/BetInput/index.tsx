import React from "react";
import { BtcInputComponent } from "../BtcInput";
import { InputContainer, BetbtnComponent } from "./style";
import dollarSignImg from "assets/usd.png";
import { fontColor, basicColor } from "const";

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

interface BetGroupComponentProps {
  disableInput: boolean;
  betAmount: number;
  setBetAmount?: Dispatcher<number>;
}
export const BetGroupComponent: React.FC<BetGroupComponentProps> = (props:BetGroupComponentProps) => {
  const onClickBetAmount = (multi:number) =>{
    if (props.setBetAmount) {
      props.setBetAmount(props.betAmount*multi)
      console.log(props.betAmount)
    }
  }
  React.useEffect(()=>{
    console.log(props.betAmount)
  },[props.betAmount])
  return (
    <InputContainer className={props.disableInput ? `disableInput` : ``}>
      <BtcInputComponent
        type="number"
        icon={dollarSignImg}
        classname="bet-amount"
        disable={props.disableInput}
        background={basicColor}
        color={fontColor}
        setAction={props.setBetAmount}
        initialValue = {props.betAmount}
      />
      <BetbtnComponent onClick={() => onClickBetAmount(0.5)}>½</BetbtnComponent>
      <BetbtnComponent onClick={() => onClickBetAmount(2)} className="double-bet">2×</BetbtnComponent>
    </InputContainer>
  );
};
