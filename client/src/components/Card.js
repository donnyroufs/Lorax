import React from "react";
import { Box, Badge, Stack, Flex, Image, Heading } from "@chakra-ui/core";

const Card = ({ guild }) => {
  return (
    <Flex
      align="center"
      w="400px"
      height="120px"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      background="white"
      border="1px"
      borderStyle="solid"
      borderColor="borderGray"
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
            rounded="full"
            backgroundColor="lightPurple"
            p=".5rem .75rem"
            color="purple"
            fontSize="xs"
          >
            0 Questions
          </Badge>
          <Box as="span">{guild.memberCount} Users</Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Card;
