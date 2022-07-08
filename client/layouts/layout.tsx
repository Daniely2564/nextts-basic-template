import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import Meta from "./meta";

import { GlobalStyle, globalTheme } from "../styles/globals";
import { GlobalContext } from "../contexts/global-context";

const Layout = ({ children }: any) => {
  const [state, _] = useContext(GlobalContext);

  return (
    <ThemeProvider theme={globalTheme}>
      <StyledLayout>
        <GlobalStyle themeColor={state.theme} />
        <Meta />
        {children}
      </StyledLayout>
    </ThemeProvider>
  );
};

const StyledLayout = styled.div``;

export default Layout;
