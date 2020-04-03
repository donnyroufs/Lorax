import React from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Flex, List, ListItem, Heading, Stack, Box } from "@chakra-ui/core";
import useGuild from "../hooks/useGuild";

import { NavbarFooter } from "../components";

const Navbar = () => {
  const match = useRouteMatch("/:id");
  const isGuild = useGuild();

  return (
    <Flex
      as="nav"
      w="300px"
      maxW="300px"
      minW="300px"
      bg="#fff"
      direction="column"
      position="fixed"
      h="calc(100vh - 100px)"
      borderRight="1px"
      borderStyle="solid"
      borderColor="background"
    >
      <Stack isInline align="center" marginTop="5rem" marginBottom="2rem">
        <Box
          as={FaHome}
          color="dark"
          opacity="0.6"
          fontSize="1.25rem"
          marginLeft=".7rem"
        />
        <Heading
          as="h5"
          color="dark"
          opacity="0.6"
          fontSize="xl"
          margin="0 0 0 .5rem"
        >
          Home
        </Heading>
      </Stack>
      <List listStyleType="none" w="100%" padding="0">
        <ListItem>
          <ReactLink
            to="/"
            exact={true}
            className="ducktaped-chakra-react-link"
          >
            {isGuild ? "Home" : "Go Back"}
          </ReactLink>
        </ListItem>

        {isGuild && (
          <ListItem>
            <ReactLink
              to={`/about`}
              exact={true}
              className="ducktaped-chakra-react-link"
            >
              About
            </ReactLink>
          </ListItem>
        )}

        {!isGuild && (
          <React.Fragment>
            <ListItem>
              <ReactLink
                to={`/${match.params.id}`}
                exact={true}
                className="ducktaped-chakra-react-link"
              >
                Overview
              </ReactLink>
            </ListItem>
            <ListItem>
              <ReactLink
                to={`/${match.params.id}/questions`}
                className="ducktaped-chakra-react-link"
              >
                Questions
              </ReactLink>
            </ListItem>
            <ListItem>
              <ReactLink
                to={`/${match.params.id}/answered`}
                className="ducktaped-chakra-react-link"
              >
                Answered
              </ReactLink>
            </ListItem>
          </React.Fragment>
        )}
      </List>

      {isGuild && <NavbarFooter />}
    </Flex>
  );
};

export default Navbar;
