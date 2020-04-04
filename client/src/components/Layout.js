import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import theme from "../theme";
import { CSSReset, ThemeProvider, Flex, Box } from "@chakra-ui/core";
import { Header, Navbar } from "./index";
import { clearState } from "../redux/actions/questions.actions";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  // @BUG: There's an insane loop going on with clearing search state; using this as a quick solution for now.
  useEffect(() => {
    if (location.search <= 0) {
      dispatch(clearState());
    }
  }, [dispatch, location.search]);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box bg="background" w="100%" h="100%">
        <Header />
        <Navbar />
        <Flex h="100%" marginTop="100px" marginLeft="300px">
          {children}
        </Flex>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
