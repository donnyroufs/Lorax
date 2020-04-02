import React from "react";
import { Flex, Link } from "@chakra-ui/core";

const NavbarFooter = () => {
  return (
    <Flex justifyContent="center" marginTop="auto" marginBottom="2rem">
      <Link
        href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=bot"
        color="black"
        fontWeight="bold"
        bg="background"
        p="1rem"
        width="80%"
        display="flex"
        justifyContent="center"
        textDecoration="none"
      >
        Add Bot
      </Link>
    </Flex>
  );
};

export default NavbarFooter;
