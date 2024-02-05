import { css, keyframes } from "styled-components";

export const adminAnimation = css`
  .admin-appear {
    transform: translateY(100%);
  }

  .admin-appear-active {
    transform: translateY(0%);
    transition: transform 0.3s ease-in-out;
  }
`;

export const basketCardsAnimation = css`
  .basketCards-appear {
    transform: translateX(100px);
    opacity: 0.7;
  }

  .basketCards-appear-active {
    transform: translateX(0px);
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .basketCards-enter {
    transform: translateX(100px);
    opacity: 0;
  }

  .basketCards-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .basketCards-exit {
    transform: translateX(-100px);
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
`;

export const scaleUpElement = keyframes`
from {
    transform: scale(0);
}

to {
    transform: scale(1);
}
`;

export const menuCardsAnimation = css`
  .menu-cards-enter {
    transform: translateX(-100px);
  }

  .menu-cards-enter-active {
    transform: translateX(0);
    transition: transform 300ms;
  }

  .menu-cards-exit-active {
    scale: 0;
    transition: scale 300ms;
  }
`;
