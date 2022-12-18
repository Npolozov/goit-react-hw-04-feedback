import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 130px;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 10px;
  svg {
    margin-right: 20px;
    width: 30px;
    height: 30px;
  }
  /* background-color: ${props => {
    switch (props.name) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'yellow';
      case 'bad':
        return 'red';
      default:
        return 'black';
    }
  }}; */
`;
