import React from "react";
import theme from "../theme";
import { CSSReset, ThemeProvider, Flex, Box } from "@chakra-ui/core";
import { Header, Navbar } from "./index";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box bg="background" w="100%" h="100%">
      <Header />
      <Flex h="calc(100% - 100px)">
        <Navbar />
        {children}
      </Flex>
    </Box>
  </ThemeProvider>
);

export default Layout;
