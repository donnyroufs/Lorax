import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";

const Description = ({ title, description, createdAt }) => {
  return (
    <Flex
      bg="white"
      height="200px"
      border="1px"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="borderGray"
      rounded="lg"
      p="2rem"
      marginBottom="2rem"
      flexDir="column"
    >
      <Box as="header">
        <Heading fontSize="1.6rem">{title}</Heading>
        <Text fontSize=".9rem" opacity=".8">
          <strong>{createdAt}</strong>
        </Text>
      </Box>
      <Box marginTop="1rem">{description}</Box>
    </Flex>
  );
};

export default Description;
