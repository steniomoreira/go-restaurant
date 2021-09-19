import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean
};

const colors = {
  orange: '#ff9000'
}


export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  background: #fff;
  border-radius: 8px;
  padding: 18px 24px;
  width: 100%;
  font-size: 16px;

  & + div {
    margin-top: 24px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 100px;
    line-height: 36px;
  }

  color: red;

  ${props =>
    props.isFocused &&
    `
      color: ${colors.orange};
      border-color: ${colors.orange};
    `}

  ${props =>
    props.isFilled &&
    `
      color: ${colors.orange};
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
