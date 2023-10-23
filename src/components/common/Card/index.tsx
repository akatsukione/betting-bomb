import React from "react";
import { CardItem, ExplosionContainer, ItemContainer } from "./style";
import { Dispatcher } from "types";

import bomb from "assets/bomb.svg";
import jewel from "assets/gem.svg";
import explosion from "assets/explosion.gif";
interface CardComponentProps {
  isBet: boolean;
  isBoom: boolean;
  isBomb: boolean;
  openedArray: number[];
  setBoom: Dispatcher<boolean>;
  setOpenedArray: Dispatcher<number[]>;
  order: number;
  isCashable: boolean;
  setCashable: Dispatcher<boolean>;
  setBet: Dispatcher<boolean>;
}
export const CardComponent: React.FC<CardComponentProps> = (props) => {
  const onCardClick = (i: number) => {
    if (props.isBet) {
      props.setOpenedArray((oldArray) => [...oldArray, props.order]);
      props.setCashable(true);
    }
    if (props.isBomb) {
      props.setBoom(true);
      props.setBet(false);
    }
  };

  return (
    <CardItem
      className={`${props.openedArray.includes(props.order) ? "open-card" : ""}
       ${
        props.isBoom ? "boomed" : ""
      }`}
      onClick={() => onCardClick(props.order)}
    >
      <ExplosionContainer
        className={props.openedArray.includes(props.order) ? "covered" : ""}
        src={props.isBomb ? explosion : ""}
        alt=""
      />
      <ItemContainer
        className={`${
          props.openedArray.includes(props.order) ? "covered " : ""
        } ${
          (props.isBoom)
            ? "boomed"
            : ""
        }`}
        src={props.isBomb ? bomb : jewel}
        // hidden={!props.isBoom}
        alt=""
      />
    </CardItem>
  );
};
