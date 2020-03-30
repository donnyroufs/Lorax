import React from "react";
import { Flex, Box, Heading, Text, Badge } from "@chakra-ui/core";

const Question = ({ question, setShow }) => {
  const handleOnClick = e => {
    setShow(question.id);
    console.log(question.id);
  };

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
      justifyContent="space-between"
      onClick={handleOnClick}
    >
      <Box as="header">
        <Heading fontSize="1.6rem">{question.title}</Heading>
        <Text fontSize=".9rem" opacity=".8">
          Question asked by <strong>@{question.User.username}</strong>
        </Text>
      </Box>

      <Flex justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Badge
            rounded="5px"
            backgroundColor="purple"
            p=".5rem .75rem"
            color="white"
            fontSize="xs"
          >
            {question.channelName}
          </Badge>
        </Box>
        <Box>
          <Badge
            rounded="5px"
            backgroundColor="lightPurple"
            p=".5rem .75rem"
            color="dark"
            fontSize="xs"
          >
            {question.Answers.length} Answers
          </Badge>
          <Badge
            rounded="5px"
            p=".5rem .75rem"
            bg="tranparent"
            color="dark"
            fontSize="xs"
          >
            {question.views} Views
          </Badge>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Question;
