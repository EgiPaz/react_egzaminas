import styled from 'styled-components';

export const StyledInputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding: 0 4px;
`;

export const StyledInputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;

  i {
    color: #ccc;
    font-size: 14px;
  }
`;

export const StyledHelperText = styled.p`
  padding-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  color: red;
`;
