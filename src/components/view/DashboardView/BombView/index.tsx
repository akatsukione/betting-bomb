import React from "react";
import { CardComponent } from "components";
import DollarImg from 'assets/usd.png'
import {
  CardContainer,
  NotifycationStyleComponent,
  HorizontalBar,
  BetTimesStyleComponent,
  ProfitStyleContainer,
  ProfitStyleComponent,
  DollarStyleComponent
} from "./style";
import { Dispatcher } from "types";
interface BombViewProps {
  isBet: boolean;
  bombNum: number;
  openedArray: number[];
  setOpenedArray: Dispatcher<number[]>;
  isBoom: boolean;
  setBoom: Dispatcher<boolean>;
  bombs: number[];
  isCashable: boolean;
  setCashable: Dispatcher<boolean>;
  isCashed:boolean;
  setBet: Dispatcher<boolean>;
}

export const BombView: React.FC<BombViewProps> = (props) => {
  const numbers: number[] = Array.from({ length: 25 }, (_, i) => i + 1);
  return (
    <CardContainer>
      {numbers.map((i) => {
        return (
          <CardComponent
            isBet={props.isBet}
            isBoom={props.isBoom}
            setBoom={props.setBoom}
            openedArray={props.openedArray}
            setOpenedArray={props.setOpenedArray}
            isBomb={props.bombs.includes(i)}
            isCashable={props.isCashable}
            setCashable={props.setCashable}
            key={i}
            setBet={props.setBet}
            order={i}
          />
        );
      })}
      <NotifycationStyleComponent hidden = {!props.isCashed}>
        <BetTimesStyleComponent>{0.04*Array.from(new Set(props.openedArray)).length}×</BetTimesStyleComponent>
        <HorizontalBar></HorizontalBar>
        <ProfitStyleContainer>
        <ProfitStyleComponent>0.00</ProfitStyleComponent>
        <DollarStyleComponent src={DollarImg} alt=""/>
        </ProfitStyleContainer>
      </NotifycationStyleComponent>
    </CardContainer>
  );
};
