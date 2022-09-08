import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  width: 350px;
  padding: 1.5em;

  border: 2px solid #8b5fc8;
  border-radius: 10px;

  background-color: #ebf4df;

  box-shadow: 2px 2px 3px #8b5fc8;
`;
