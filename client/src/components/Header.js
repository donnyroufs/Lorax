import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Account from "./Account";

import { Flex, Link } from "@chakra-ui/core";

const Header = () => {
  const match = useRouteMatch("/:id");
  const guild = useSelector(state => state.guild.guilds);

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
        <Link
          w="300px"
          fontSize="3xl"
          fontWeight="bold"
          color="dark"
          letterSpacing={1.25}
          textDecoration="none"
        >
          {match &&
            guild
              .filter(g => g.id === match.params.id)
              .map(guild => guild.name)}

          {!match && "Discord Faq"}

          {/* {server ? server : "DiscordFAQ"} */}
        </Link>
        <Searchbar placeholder="Looking for an answer?" />
      </Flex>
      <Account />
    </Flex>
  );
};

export default Header;
