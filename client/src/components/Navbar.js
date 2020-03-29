import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link as ReactLink } from "react-router-dom";
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
    >
      <Stack isInline align="center" marginTop="5rem">
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
          <PseudoBox
            as={ReactLink}
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
          </PseudoBox>
        </ListItem>
        {match && (
          <React.Fragment>
            <ListItem>
              <PseudoBox
                as={ReactLink}
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
                Questions
              </PseudoBox>
            </ListItem>
            <ListItem>
              <PseudoBox
                as="a"
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
              </PseudoBox>
            </ListItem>
          </React.Fragment>
        )}
      </List>

      {!match && (
        <Flex bg="dark" p="1rem" justifyContent="center" marginTop="auto">
          <Link
            href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&permissions=0&scope=bot"
            color="white"
          >
            Subscribe Bot
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
