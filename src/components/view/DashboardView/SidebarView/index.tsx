import React from "react";
import {
  SidebarSection,
  SidebarContainer,
  LabelFlexContainer,
  LabelComponent,
  ButtonComponent,
  FlexContainer,
  SettingGroup,
  RandomBtn,
} from "./style";
import { BetGroupComponent } from "components/common";
import { SelectComponent } from "components";
import { BtcInputComponent } from "components/common/BtcInput";
import bombImg from "assets/bomb.png";
import jewelImg from "assets/jewel.png";
import dollarImg from "assets/usd.png";
import { fontColor, tileColor } from "const";

type Dispatcher<S> = React.Dispatch<React.SetStateAction<S>>;

interface SidebarProps {
  openedArray: number[],
  setOpenedArray: Dispatcher<number[]>,
  isBet: boolean,
  betAmount: number,
  bombArray: number[],
  bombNum: number,
  setBombNum: Dispatcher<number>,
  setBetAmount?: Dispatcher<number>,
  setBet: Dispatcher<boolean>,
  setBoom: Dispatcher<boolean>,
  isCashable:boolean,
  setCashable: Dispatcher<boolean>,
  setCashed: Dispatcher<boolean>,
}

export const SidebarView:React.FC<SidebarProps> = (props:SidebarProps) => {

  const onBetClicked = () => {
    props.setBet((prevState) => !prevState);
    props.setBoom(false)
    props.setCashable(false)
    props.setOpenedArray([])
    props.setCashed(false)
  };
  const onCashClicked = () => {
    props.setBet((prevState) => !prevState);
    props.setBoom(true)
    props.setCashable(false)
    // props.setOpenedArray([])
    props.setCashed(true)
  };
  const generateRandom = () =>{
    var arr = props.openedArray;
    var r = Math.floor(Math.random() * 25) + 1;
    
    if(arr.indexOf(r) === -1){
      props.setOpenedArray(oldArray => [...oldArray, r])
      if (props.bombArray.includes(r)) {
        props.setBoom(true)
        props.setBet(false)
      } 
      props.setCashable(true)
    }else{
      generateRandom()
    }
  }
  return (
    <SidebarContainer>
      <SidebarSection>
        <LabelFlexContainer>
          <LabelComponent>Bet Amount</LabelComponent>
          <LabelComponent className="btc-amount">BTC {Number(0.000048*props.betAmount).toFixed(8)}</LabelComponent>
        </LabelFlexContainer>
        <BetGroupComponent betAmount={props.betAmount} setBetAmount={props.setBetAmount} disableInput={props.isBet}/>
      </SidebarSection>
      {!props.isBet && (
        <SidebarSection>
          <LabelFlexContainer>
            <LabelComponent>Mines</LabelComponent>
          </LabelFlexContainer>
          <SelectComponent bombNum={props.bombNum} setBombNum={props.setBombNum}/>
        </SidebarSection>
      )}
      {props.isBet && (
        <>
          <FlexContainer>
            <SettingGroup>
              <LabelFlexContainer>
                <LabelComponent>Mines</LabelComponent>
              </LabelFlexContainer>
              <BtcInputComponent
                type="text"
                icon={bombImg}
                background={tileColor}
                color="rgb(255 255 255)"
                initialValue={props.bombNum}
              />
            </SettingGroup>
            <SettingGroup>
              <LabelFlexContainer>
                <LabelComponent>Gems</LabelComponent>
              </LabelFlexContainer>
              <BtcInputComponent
                type="text"
                icon={jewelImg}
                background={tileColor}
                color="rgb(255 255 255)"
                initialValue={25-props.bombNum}
              />
            </SettingGroup>
          </FlexContainer>

          <SidebarSection>
            <LabelFlexContainer>
              <LabelComponent>Total profit ({0.04*Array.from(new Set(props.openedArray)).length}×)</LabelComponent>
              <LabelComponent className="btc-amount">
                BTC {0.000048*props.betAmount*Array.from(new Set(props.openedArray)).length}
              </LabelComponent>
            </LabelFlexContainer>
            <BtcInputComponent
              type="text"
              icon={dollarImg}
              background={tileColor}
              color={fontColor}
              initialValue={Array.from(new Set(props.openedArray)).length*0.04*props.betAmount}
            />
          </SidebarSection>
          <SidebarSection>
            <RandomBtn onClick={generateRandom}>Pick random tile</RandomBtn>
          </SidebarSection>
        </>
      )}
      <SidebarSection>
        <ButtonComponent
          onClick={onBetClicked}
          hidden={props.isBet}
        >
          Bet
        </ButtonComponent>
        <ButtonComponent
          className={!props.isCashable ? "disable" : ""}
          onClick={onCashClicked}
          hidden={!props.isBet}
        >
          Cashout
        </ButtonComponent>
      </SidebarSection>
    </SidebarContainer>
  );
};
