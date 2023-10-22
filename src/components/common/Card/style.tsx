import styled from "styled-components";
import {
  tileColor,
  sidebarColor,
  hoverColor,
  tileBackgroundColor,
} from "const";

export const CardItem = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  box-shadow: 0 0.3em 0 0 ${sidebarColor};
  background-color: ${tileColor};
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  animation: initial-load 0.15s ease;

  @keyframes initial-load {

    0% {
      transform: scale(0, 0);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  &:hover {
    background-color: ${hoverColor};
    cursor: pointer;
    transform: translateY(-0.15rem);
  }

  &:has(.covered) {
    box-shadow: none;
    animation: card-click 1s forwards;

    @keyframes card-click {
        // 0% { transform: scale(1); opacity: 1; background-color: ${tileColor}; }
        // 30% { transform: scale(1.1); opacity: 1; background-color: ${tileColor}; }
        // 70% { transform: scale(1); opacity: 1; background-color: ${tileColor}; }
        // 90% { transform: scale(0); opacity: 0; background-color: ${tileColor}; }
        // 100% { transform: scale(1); opacity: 1; background-color: ${tileBackgroundColor} }
    }
  }

  
  &.boomed {
    background-color: ${tileBackgroundColor};
    box-shadow: none;
    pointer-events: none;
  }
  &.boomed:hover {
    transform: translateY(0);
  }
`;

export const ExplosionContainer = styled.img`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  &:not(.covered) {
    display: none;
  }
`;

export const ItemContainer = styled.img`
visibility:visible;
  &.covered {
    
    width: 5rem;
    opacity: 1;
    pointer-events: auto;
    animation: item-click 1s forwards;

    @keyframes card-click {
        0% { transform: scale(1); opacity: 0; background-color: ${tileColor}; }
        70% { transform: scale(1); opacity: 0; background-color: ${tileColor}; }
        90% { transform: scale(0); opacity: 0; background-color: ${tileColor}; }
        100% { transform: scale(1); opacity: 1; background-color: ${tileBackgroundColor} }
    }
  }
  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
  opacity: 0.5;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
