import { useState } from "react";
import NextLink from "next/link";
import Account from "./Account";

import {
  Flex,
  Link,
  InputGroup,
  Input,
  InputLeftElement,
  Icon
} from "@chakra-ui/core";

const Header = ({ server }) => {
  const [value, setValue] = useState("");
  const handleOnChange = ({ target }) => setValue(target.value);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      bg="white"
      height="100px"
      px="2rem"
      borderBottom="1px solid gray"
    >
      <Flex as="div" align="center">
        <NextLink href="/">
          <Link w="300px">
            {server ? server : "Currently not on a server."}
          </Link>
        </NextLink>

        <InputGroup border="none">
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input
            type="search"
            placeholder="Looking for an answer?"
            border="none"
            value={value}
            onChange={handleOnChange}
          />
        </InputGroup>
      </Flex>

      <Account />
    </Flex>
  );
};

export default Header;
