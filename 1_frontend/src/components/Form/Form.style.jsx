import styled from 'styled-components';

export const StyledForm = styled.form`
  > button {
    padding: 4px 14px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 5px 0;
    transition: background-color 0.1s ease-in;
    &:hover {
      opacity: 0.8;
      background-color: #ebf4df;
    }
  }
`;
