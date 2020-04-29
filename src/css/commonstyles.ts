import styled from "styled-components";

export const LinkDivWrapper = styled.div`
  a {
    border: 1px solid ${(p) => p.theme.mainBlack};
    padding: 4px 8px;
    display: inline-block;
    color: ${(p) => p.theme.mainBlack};
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
    :hover {
      background: ${(p) => p.theme.mainBlack};
      color: ${(p) => p.theme.mainWhite};
    }
  }
`;

export const CodeDivWrapper = styled.div`
  color: rgb(255, 255, 255);
  background: #232323;
  padding: 15px;
  border-radius: 8px;
  margin: 0 -1rem 1.5rem;
`;

export const TopMostDivWrapper = styled.div`
  font-family: "Comic Neue", cursive;
  background: ${(p) => p.theme.mainWhite};
  color: ${(p) => p.theme.mainBlack};
`;
