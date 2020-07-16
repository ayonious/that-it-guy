import styled from "styled-components";

export const TagDivWrapper = styled.div`
  background: ${(p) => p.theme.mainBlack};
  border-radius: 7px;
  padding: 0.2px 4px;
  display: inline-block;
  color: ${(p) => p.theme.mainWhite};
  margin-top: 0.1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  margin-right: 0.2rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;
  cursor: default;
`;

export const CrossButtonWrapper = styled.span`
  border: 1px solid ${(p) => p.theme.mainWhite};
  display: inline-block;
  margin: 0.2rem;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  cursor: pointer;
  padding-left: 5px;
  padding-right: 5px;
  :hover {
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
  }
`;

export const FiltersTextWrapper = styled.h3`
  margin-right: 5px;
`;

export const HeaderTagsWrapper = styled.h3`
  display: flex;
  flex-direction: row;
`;