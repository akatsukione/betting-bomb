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
export const Sidebar = () => {
  const [isBet, setBet] = React.useState<boolean>(false);
  const onBetClicked = () => {
    setBet((prevState) => !prevState);
  };
  return (
    <SidebarContainer>
      <SidebarSection>
        <LabelFlexContainer>
          <LabelComponent>Bet Amount</LabelComponent>
          <LabelComponent className="btc-amount">BTC 0.00000000</LabelComponent>
        </LabelFlexContainer>
        <BetGroupComponent disableInput={isBet}/>
      </SidebarSection>
      {!isBet && (
        <SidebarSection>
          <LabelFlexContainer>
            <LabelComponent>Mines</LabelComponent>
          </LabelFlexContainer>
          <SelectComponent />
        </SidebarSection>
      )}
      {isBet && (
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
            />
          </SidebarSection>
          <SidebarSection>
            <RandomBtn>Pick random tile</RandomBtn>
          </SidebarSection>
        </>
      )}
      <SidebarSection>
        <ButtonComponent
          className={isBet ? "disable" : ""}
          onClick={onBetClicked}
        >
          {!isBet ? "Bet" : "Cashout"}
        </ButtonComponent>
      </SidebarSection>
    </SidebarContainer>
  );
};
