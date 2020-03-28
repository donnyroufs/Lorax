import theme from "../theme";
import { ThemeProvider, Flex, Box } from "@chakra-ui/core";
import { Header, Navbar } from "./index";

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box bg="background" w="100%" h="100%">
      <Header />
      <Flex h="calc(100% - 100px)">
        <Navbar />
        {children}
      </Flex>
    </Box>
    <style jsx global>{`
      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        margin: 0;
        font-family: "Source Sans Pro";
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </ThemeProvider>
);

export default Layout;
