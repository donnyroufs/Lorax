import React from "react";
import { Flex, Box, Heading, Text, Badge, PseudoBox } from "@chakra-ui/core";

const Question = ({ question, setShow, hack, show }) => {
  const handleOnClick = (e) => {
    setShow(hack ? question.QuestionId : question.id);
    window.scrollTo(0, 0);
  };

  return (
    <PseudoBox
      bg="white"
      minH="200px"
      height="auto"
      border="1px"
      display="flex"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="borderGray"
      rounded="lg"
      p="2rem"
      marginBottom="2rem"
      flexDir="column"
      justifyContent="space-between"
      onClick={handleOnClick}
      cursor="pointer"
      transition="0.3s ease all"
      className={show === question.id ? "question-active" : ""}
      _hover={{
        borderColor: "purple",
      }}
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
    </PseudoBox>
  );
};

export default Question;
