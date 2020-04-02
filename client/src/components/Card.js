import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { Box, Badge, Stack, Flex, Image, Heading } from "@chakra-ui/core";

const Card = ({ guild }) => {
  return (
    <Flex
      as={ReactLink}
      to={`/${guild.slug}/`}
      align="center"
      w="400px"
      height="120px"
      overflow="hidden"
      background="white"
      border="1px"
      borderStyle="solid"
      borderWidth="1px"
      borderColor="borderGray"
      rounded="lg"
      paddingLeft="2rem"
      cursor="pointer"
      marginRight="2rem"
      minW="400px"
      marginBottom="2rem"
    >
      <Image
        src={guild.avatar}
        alt="server"
        size="75px"
        rounded="8px"
        objectFit="cover"
      />
      <Flex direction="column" paddingLeft="2rem">
        <Heading as="h3" size="lg" margin="0 0 .5rem 0">
          {guild.name}
        </Heading>
        <Stack isInline spacing={4} align="center">
          <Badge
            rounded="5px"
            backgroundColor="lightPurple"
            p=".5rem .75rem"
            color="purple"
            fontSize="xs"
          >
            {guild.Questions.length}{" "}
            {guild.Questions.length > 1 ? "Questions" : "Question"}
          </Badge>
          <Box as="span">{guild.memberCount} Users</Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Card;
