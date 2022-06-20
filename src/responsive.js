import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media screen and (max-width: 750px) {
      ${props}
    }
  `;
};

export const smallMobile = (props) => {
  return css`
    @media screen and (max-width: 450px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media screen and (max-width: 1250px) {
      ${props}
    }
  `;
};
