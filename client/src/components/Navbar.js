import React from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Flex, List, ListItem, Heading, Stack, Box } from "@chakra-ui/core";

import { NavbarFooter } from "../components";

const Navbar = () => {
  const match = useRouteMatch("/:id");
  console.log(match);
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
            {match && "Go Back"}
            {!match && "Home"}
          </ReactLink>
          {/* <Link
            as={ReactLink}
            exact={true}
            to="/"
            display="block"
            _hover={{
              bg: "lightPurple",
              color: "purple",
              fontWeight: "bold"
            }}
            p="1rem 3rem"
            cursor="pointer"
          >
            {match && "Go Back"}
            {!match && "Home"}
          </Link> */}
        </ListItem>
        {match && (
          <React.Fragment>
            <ListItem>
              <ReactLink
                as={ReactLink}
                to={`${match.url}/`}
                exact={true}
                className="ducktaped-chakra-react-link"
              >
                Overview
              </ReactLink>
            </ListItem>
            <ListItem>
              <ReactLink
                as={ReactLink}
                to="questions"
                exact={true}
                className="ducktaped-chakra-react-link"
              >
                Questions
              </ReactLink>
            </ListItem>
            <ListItem>
              <ReactLink
                as={ReactLink}
                to="answered"
                className="ducktaped-chakra-react-link"
              >
                Answered
              </ReactLink>
            </ListItem>
          </React.Fragment>
        )}
      </List>

      {!match && <NavbarFooter />}
    </Flex>
  );
};

export default Navbar;
