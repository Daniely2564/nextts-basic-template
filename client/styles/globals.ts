import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  themeColor: "white" | "black";
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  a{ color: inherit; text-decoration: none; }
`;

export const globalTheme = {
  sideNavWidth: 66,
};
