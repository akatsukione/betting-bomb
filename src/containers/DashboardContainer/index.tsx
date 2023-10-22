import React from "react";
import { DashboardStyledComponent, SidebarView, BombView } from "components";

export const DashboardContainer: React.FC = () => {
  const [betAmount, setBetAmount] = React.useState<number>(0.0);
  const [bombNum, setBombNum] = React.useState<number>(3);
  const [isBet, setBet] = React.useState<boolean>(false);
  const [isCashable, setCashable] = React.useState<boolean>(false);
  const [openedArray, setOpenedArray] = React.useState<number[]>([]);
  const [isBoom, setBoom] = React.useState<boolean>(false);
  const [bombArray, setBombArray] = React.useState<number[]>([])
  const [isCashed, setCashed] = React.useState<boolean>(false)

  const numbers: number[] = Array.from({ length: 25 }, (_, i) => i + 1);
  // React.useEffect(()=>{
  //   if (isBet) {
  //     setBombArray(random_bombs([...numbers], bombNum))
  //   }
  // },[bombNum])
  React.useEffect(()=>{
    if (isBet) {
      setBombArray(random_bombs([...numbers], bombNum))
    }
  },[isBet])

  function random_bombs(range: number[], n: number) {
    const sample: number[] = [];
    for (let i = 0; i < n; i++) {
      const index = Math.floor(Math.random() * range.length);
      const removedValue = range.splice(index, 1)[0];
      sample.push(removedValue);
    }
    return sample;
  }

  return (
    <DashboardStyledComponent>
      <SidebarView
        openedArray={openedArray}
        setOpenedArray={setOpenedArray}
        betAmount={betAmount}
        bombNum={bombNum}
        setBetAmount={setBetAmount}
        setBombNum={setBombNum}
        isBet={isBet}
        isCashable={isCashable}
        setCashable={setCashable}
        setBoom={setBoom}
        setBet={setBet}
        bombArray = {bombArray}
        setCashed = {setCashed}
        />
      <BombView
        isBoom={isBoom}
        setBoom={setBoom}
        openedArray={openedArray}
        setOpenedArray={setOpenedArray}
        isBet={isBet}
        bombNum={bombNum}
        bombs={bombArray}
        isCashable={isCashable}
        setCashable={setCashable}
        setBet = {setBet}
        isCashed = {isCashed}
        />
    </DashboardStyledComponent>
  );
};
