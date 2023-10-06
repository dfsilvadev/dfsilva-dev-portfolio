'use client';

import styled, { css } from 'styled-components';

export const LoaderContent = styled.main`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;
    background: ${theme.colors.primary.dark} url(/images/png/background-md.png)
      right top/contain no-repeat fixed;

    & > div {
      width: 100vw;
      height: 100vh;
      font-size: ${theme.font.sizes.small};
    }

    @media (min-width: 1200px) {
      background: ${theme.colors.primary.dark}
        url(/images/png/background-lg.png) right top/contain no-repeat fixed;
    }
  `}
`;
