import NextLink from "next/link";
import Searchbar from "./Searchbar";
import Account from "./Account";

import { Flex, Link } from "@chakra-ui/core";

const Header = ({ server }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="white"
      height="100px"
      px="2rem"
      border="1px"
      borderStyle="solid"
      borderColor="background"
    >
      <Flex as="div" align="center">
        <NextLink href="/">
          <Link
            w="300px"
            fontSize="3xl"
            fontWeight="bold"
            color="dark"
            letterSpacing={1.25}
            textDecoration="none"
          >
            {server ? server : "DiscordFAQ"}
          </Link>
        </NextLink>
        <Searchbar placeholder="Looking for an answer?" />
      </Flex>
      <Account />
    </Flex>
  );
};

export default Header;
