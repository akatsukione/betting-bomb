import React from "react";
import { DashboardStyledComponent, SidebarView, BombView } from "components";

export const DashboardContainer: React.FC = () => {
  const [betAmount, setBetAmount] = React.useState<number>(0.00);
  const [bombNum, setBombNum] = React.useState<number>(3);
  const [isBet, setBet] = React.useState<boolean>(false);
  return (
    <DashboardStyledComponent>
      <SidebarView
        betAmount={betAmount}
        bombNum={bombNum}
        setBetAmount={setBetAmount}
        setBombNum={setBombNum}
        isBet={isBet}
        setBet={setBet}
      />
      <BombView isBet={isBet} bombNum={bombNum}/>
    </DashboardStyledComponent>
  );
};
