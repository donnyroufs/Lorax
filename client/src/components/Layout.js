import React from "react";
import theme from "../theme";
import { CSSReset, ThemeProvider, Flex, Box } from "@chakra-ui/core";
import { Header, Navbar } from "./index";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box bg="background" w="100%" h="100%">
        <Header />
        <Navbar />
        <Flex h="calc(100% - 100px)" marginTop="100px" marginLeft="300px">
          {children}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
