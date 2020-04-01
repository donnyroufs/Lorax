import React from "react";
import { Flex, Box, Heading, Text, Avatar, Link } from "@chakra-ui/core";

const Answer = ({
  messageUrl,
  description,
  createdAt,
  User: { username, avatar }
}) => {
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
      <Flex as="header" alignItems="center">
        <Box marginRight="1rem">
          <Link href={messageUrl}>
            <Avatar name={username} src={avatar} />
          </Link>
        </Box>
        <Box>
          <Heading fontSize="1.6rem">{username}</Heading>
          <Text fontSize=".9rem" opacity=".8">
            <strong>{createdAt}</strong>
          </Text>
        </Box>
      </Flex>
      <Box marginTop="1rem">{description}</Box>
    </Flex>
  );
};

export default Answer;
