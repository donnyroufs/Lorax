import NextLink from "next/link";
import { Flex, List, ListItem, Link } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Flex as="nav">
      <List listStyleType="none">
        <ListItem>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
        </ListItem>
      </List>
    </Flex>
  );
};

export default Navbar;
