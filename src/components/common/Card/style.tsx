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
  &.open-card {
    z-index: 1;
    // background-color: ${tileBackgroundColor};
    animation: container-click 1s forwards;

    @keyframes container-click {
      0% {
        transform: scale(1);
        background-color: ${tileColor};
      }
      40% {
        transform: scale(1.1);
        background-color: ${tileColor};
      }
      80% {
        transform: scale(1);
        background-color: ${tileColor};
      }
      99% {
        transform: scale(0);
        background-color: ${tileColor};
      }
      100% {
        transform: scale(1);
        background-color: ${tileBackgroundColor};
      }
    }
    box-shadow: none;
  }


  &.boomed:not(.open-card) {
    // background-color: ${tileBackgroundColor};
    animation: boomeed-animation 1s forwards;

    @keyframes boomeed-animation {
      0% {
        transform: scale(1);
        background-color: ${tileColor};
      }
      40% {
        transform: scale(1);
        background-color: ${tileColor};
      }
      80% {
        transform: scale(1);
        background-color: ${tileColor};
      }
      99% {
        transform: scale(0);
        background-color: ${tileColor};
      }
      100% {
        transform: scale(1);
        background-color: ${tileBackgroundColor};
      }
    }
    box-shadow: none;
    pointer-events: none;
  }
  &.boomed:hover {
    transform: translateY(0);
  }
  &.open-card > .covered{
    visibility: visible;
  }
`;

export const ExplosionContainer = styled.img`
  visibility: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  &:not(.covered) {
    display: none;
  }
  &.covered {
    z-index: 2;
    
    opacity: 1;
    width: 9rem;
    pointer-events: auto;


    animation: boom-action 1s forwards;
    animation-delay:0.3s;

    @keyframes boom-action {
      0% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      50% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        visibility:visible;
      }
    }
  }
  
`;

export const ItemContainer = styled.img`
  visibility: hidden;
  &.covered {
    width: 5rem;
    pointer-events: auto;
    animation: item-click 1s forwards;
    animation-delay:0.3s;

    @keyframes item-click {
      0% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      50% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        visibility:visible;
      }
    }
  }
  
  &.boomed:not(.covered){
    opacity:0.5;
      animation: others-boom-action 1s forwards;
      animation-delay:0.3s;
  
      @keyframes others-boom-action {
        0% {
          visibility:visible;
          transform: scale(0);
          opacity: 0;
        }
        50% {
          visibility:visible;
          transform: scale(0);
          opacity: 0;
        }
        100% {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 0.5;
          visibility:visible;
        }
      }
  
  }
  &.covered.boomed {
    width: 5rem;
    opacity: 3;
    pointer-events: auto;
    animation: bomb-click 1s forwards;
    animation-delay:0.3s;
    @keyframes bomb-click {
      0% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      50% {
        visibility:visible;
        transform: scale(0);
        opacity: 0;
      }
      100% {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        visibility:visible;
      }
    }
  }
  opacity: 0.5;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;
