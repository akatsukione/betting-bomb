import React from 'react'
import {CardItem} from './style'

interface CardComponentProps {
    isBomb:boolean,
    isOpened:boolean
}
export const CardComponent:React.FC<CardComponentProps> = (props) => {
  return (
    <CardItem className='bomb jewel'></CardItem>
  )
}
