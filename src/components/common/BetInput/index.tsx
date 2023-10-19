import React from 'react'
import { BtcInputComponent } from '../BtcInput'
import { InputContainer, BetbtnComponent } from './style';
import dollarSignImg from 'assets/usd.png';
import { fontColor, basicColor } from 'const';
interface BetGroupComponentProps {
  disableInput: boolean;
}
export const BetGroupComponent:React.FC<BetGroupComponentProps> = (props) => {
  return (
    <InputContainer className={props.disableInput?`disableInput`:``}>
        <BtcInputComponent  type = "number"  icon={dollarSignImg} classname='bet-amount' disable = {props.disableInput} background={basicColor} color={fontColor}/>
        <BetbtnComponent>½</BetbtnComponent>
        <BetbtnComponent className='double-bet'>2×</BetbtnComponent>
    </InputContainer>
  )
}
