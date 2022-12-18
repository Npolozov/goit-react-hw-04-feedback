import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: 130px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 18px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  svg {
    margin-right: 20px;
    width: 30px;
    height: 30px;
  }
`;
