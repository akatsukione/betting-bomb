import styled from "styled-components";
import { tileColor, sidebarColor, hoverColor } from "const";
export const CardItem = styled.div`
width: 7rem;
height:7rem;
box-shadow: 0 0.3em 0 0 ${sidebarColor};
background-color:${tileColor};
border-radius: 0.5rem;
margin-bottom:0.5rem;
&:hover{
    background-color:${hoverColor};
    cursor: pointer;
    transform: translateY(-0.15rem);
}
&:active{
    transform:scale(1.1);
    transition-duration: 0.2s;
    cursor: pointer;
    background-color:red;
}
`