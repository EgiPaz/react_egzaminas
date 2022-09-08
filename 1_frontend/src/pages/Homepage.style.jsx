import styled from 'styled-components';

export const StyledHomepageMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5em;
  }
`;

export const StyledHomepageLeft = styled.div`
  font-weight: bold;
  width: 25%;
  height: 100%;
  max-height: 400px;
  padding: 1em;
  background-color: #ededed;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #555;
  > h3 {
    margin-bottom: 1em;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const StyledHomepageRight = styled.div`
  width: 70%;
  padding: 1em;
  background-color: #ededed;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 1px 1px 2px #555;
  > h3 {
    margin-bottom: 0.5em;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  > thead {
    text-align: left;
    border-bottom: 1px solid black;
    > tr {
      > th {
        padding: 4px;
      }
    }
  }
  > tbody {
    > tr {
      border-bottom: 1px solid black;
      background-color: #fefefe;
      &:hover {
        background-color: #ebf4df;
      }
      font-size: 14px;
      > td {
        border-right: 1px solid black;
        border-left: 1px solid black;
        padding: 4px;
      }
    }
  }
`;
