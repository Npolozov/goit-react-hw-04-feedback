import { space, layout, color, flexbox } from 'styled-system';
import styled from '@emotion/styled';

export const Box = styled.div`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
`;

export const Options = styled.p`
  font-weight: 500;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
