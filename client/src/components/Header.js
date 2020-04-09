import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Account from "./Account";
import useGuild from "../hooks/useGuild";

import { Flex, Link } from "@chakra-ui/core";

const Header = () => {
  const match = useRouteMatch("/:slug");
  const guild = useSelector((state) => state.guild.guilds);
  const isGuild = useGuild();

  return (
    <Flex
      position="fixed"
      top="0"
      width="100%"
      zIndex="5"
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
          _hover={{
            textDecor: "none",
          }}
        >
          {!isGuild &&
            guild
              .filter((g) => g.slug === match.params.slug)
              .map((guild) => guild.name)}
          {isGuild && "Lorax beta"}
        </Link>
        {!isGuild && (
          <Searchbar placeholder="Looking for a specific question?" />
        )}
      </Flex>
      <Account />
    </Flex>
  );
};

export default Header;
