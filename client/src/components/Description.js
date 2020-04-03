import React from "react";
import { Flex, Box, Heading, Text, Avatar } from "@chakra-ui/core";

const Description = ({
  title,
  description,
  createdAt,
  User: { avatar, username }
}) => {
  return (
    <Flex
      bg="white"
      minH="300px"
      border="1px"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="borderGray"
      rounded="lg"
      p="2rem"
      marginBottom="2rem"
      flexDir="column"
    >
      <Flex as="header" alignItems="center">
        <Box marginRight="1rem">
          <Avatar name={username} src={avatar} />
        </Box>
        <Box>
          <Heading fontSize="1.6rem">{title}</Heading>
          <Text fontSize=".9rem" opacity=".8">
            <strong>{createdAt.split("T")[0]}</strong>
          </Text>
        </Box>
      </Flex>
      <Box marginTop="1rem">{description}</Box>
    </Flex>
  );
};

export default Description;
