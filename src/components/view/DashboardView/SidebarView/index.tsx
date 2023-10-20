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
  isBet: boolean,
  betAmount: number,
  bombNum: number,
  setBombNum: Dispatcher<number>,
  setBetAmount?: Dispatcher<number>,
  setBet: Dispatcher<boolean>,
}

export const SidebarView:React.FC<SidebarProps> = (props:SidebarProps) => {

  const onBetClicked = () => {
    props.setBet((prevState) => !prevState);
  };
 
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
              <LabelComponent>Total profit (0×)</LabelComponent>
              <LabelComponent className="btc-amount">
                BTC 0.00000000
              </LabelComponent>
            </LabelFlexContainer>
            <BtcInputComponent
              type="text"
              icon={dollarImg}
              background={tileColor}
              color={fontColor}
              initialValue={3}
            />
          </SidebarSection>
          <SidebarSection>
            <RandomBtn>Pick random tile</RandomBtn>
          </SidebarSection>
        </>
      )}
      <SidebarSection>
        <ButtonComponent
          className={props.isBet ? "disable" : ""}
          onClick={onBetClicked}
        >
          {!props.isBet ? "Bet" : "Cashout"}
        </ButtonComponent>
      </SidebarSection>
    </SidebarContainer>
  );
};
