import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  padding: 1em;
  background: #8b5fc8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .logo {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.5em;
    > .logoWrapper {
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
      }
    }
    > h1 {
      font-style: italic;
      color: #9cc85f;
      font-family: monospace, sans-serif;
      font-size: 3em;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }

  > nav {
    margin-right: 1em;
    @media (max-width: 768px) {
      margin: 0 auto;
    }
    > ul {
      list-style: none;
      display: flex;
      gap: 1em;
      > li a {
        text-decoration: none;
        font-size: 1.1em;
        font-weight: bold;
        color: #9cc85f;
        transition: color 0.3s, opacity 0.3s;
        &:hover {
          color: #000;
          opacity: 0.6;
        }
      }
    }
  }
`;
