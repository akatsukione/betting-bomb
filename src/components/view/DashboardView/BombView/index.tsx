import React from "react";
import { CardComponent } from "components";
import {
  CardContainer,
} from "./style";
interface BombViewProps {
    isBet:boolean,
    bombNum: number,
}
export const BombView:React.FC<BombViewProps> = (props) => {
    const numbers:number[] = Array.from({ length: 25 }, (_, i) => i + 1);
    function random_bombs(range:number[], n:number) {
        const sample:number[] = [];
        for(let i=0; i<n; i++) {
            const index = Math.floor(Math.random() * range.length);
            const removedValue = range.splice(index, 1)[0];
            sample.push(removedValue);
        }
      
        return sample;
      }
      
      const random_bombs_array = random_bombs(numbers, props.bombNum);
    //   console.log(numbers)
  return (
    <CardContainer>
        {
            numbers.map(i => {
                return <CardComponent isBomb={random_bombs_array.includes(i)} isOpened={false} key={i}/>
            })
        }
    </CardContainer>
  );
};
