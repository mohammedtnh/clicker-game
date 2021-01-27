import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
color: ${(props) => props.theme.mainColor};
background: ${(props) => props.theme.backgroundColor};
}
`;

export const MonsterImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 100%;
`;

export const AttackButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  max-width: 100%;
  max-height: 100%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: block;
`;

export const WeaponWrapper = styled.div`
  width: 18rem;
  div {
    &.card-header {
      text-align: center;
      color: black;
      font-weight: bold;
    }
    &.card-body {
      text-align: center;
      color: black;
    }
  }
  img {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    max-height: 50%;
    align-items: center;
  }
`;
