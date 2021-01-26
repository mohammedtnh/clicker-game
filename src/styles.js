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
  max-width: 25%;
  max-height: 25%;
`;

export const AttackButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 25%;
  max-height: 25%;
`;
