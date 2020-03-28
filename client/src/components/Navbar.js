import React from "react";
import { FaHome } from "react-icons/fa";
import {
  Flex,
  List,
  ListItem,
  Heading,
  Stack,
  Box,
  PseudoBox
} from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Flex as="nav" w="300px" bg="#fff" h="100%" direction="column">
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
          Menu
        </Heading>
      </Stack>
      <List listStyleType="none" w="100%" padding="0">
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
            Home
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
      </List>
    </Flex>
  );
};

export default Navbar;
