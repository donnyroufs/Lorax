import theme from '../theme';
import { ThemeProvider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Box bg="white" w="100%">
            { children }
        </Box>
    </ThemeProvider>
  )
  
export default Layout
  