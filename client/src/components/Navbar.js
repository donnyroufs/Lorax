import React from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
  Flex,
  List,
  ListItem,
  Heading,
  Stack,
  Box,
  PseudoBox,
  Link
} from "@chakra-ui/core";

const Navbar = () => {
  // @TODO: Add a slug to the database
  const match = useRouteMatch("/:id");
  return (
    <Flex
      as="nav"
      w="300px"
      maxW="300px"
      minW="300px"
      bg="#fff"
      h="100%"
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
              <Link
                as={ReactLink}
                to="overview"
                exact={true}
                display="block"
                _hover={{
                  bg: "lightPurple",
                  color: "purple",
                  fontWeight: "bold"
                }}
                p="1rem 3rem"
                cursor="pointer"
              >
                Overview
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={ReactLink}
                to="questions"
                exact={true}
                display="block"
                _hover={{
                  bg: "lightPurple",
                  color: "purple",
                  fontWeight: "bold"
                }}
                p="1rem 3rem"
                cursor="pointer"
              >
                Questions
              </Link>
            </ListItem>
            <ListItem>
              <Link
                as={ReactLink}
                to="answered"
                display="block"
                _hover={{
                  bg: "lightPurple",
                  color: "purple",
                  fontWeight: "bold"
                }}
                p="1rem 3rem"
                cursor="pointer"
              >
                Answered
              </Link>
            </ListItem>
          </React.Fragment>
        )}
      </List>

      {!match && (
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
      )}
    </Flex>
  );
};

export default Navbar;
