import React from "react";
import { Flex, Link } from "@chakra-ui/core";

const NavbarFooter = () => {
  return (
    <Flex justifyContent="center" marginTop="auto" marginBottom="2rem">
      <Link
        href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&permissions=8&scope=bot"
        color="white"
        textTransform="uppercase"
        fontWeight="bold"
        bg="purple"
        p="1rem"
        width="80%"
        display="flex"
        justifyContent="center"
        textDecoration="none"
        _hover={{
          textDecor: "none",
        }}
      >
        Add Bot
      </Link>
    </Flex>
  );
};

export default NavbarFooter;
