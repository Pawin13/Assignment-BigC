import type { AppProps } from "next/app";
import React, { Fragment, useState, FC, useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { usernameContext } from "@/contexts/userProfileContext";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  colors: {
    primary: string;
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string>("Admin");
  return (
    <>
      <GlobalStyle />
      <usernameContext.Provider value={{ username, setUsername }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </usernameContext.Provider>
    </>
  );
}
