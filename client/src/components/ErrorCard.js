import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

const ErrorCard = ({ code, description }) => {
  return (
    <Flex justifyContent="center" alignItems="center" w="100%">
      <Flex
        align="center"
        w="600px"
        h="300px"
        overflow="hidden"
        background="white"
        border="1px"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="borderGray"
        rounded="lg"
        paddingLeft="2rem"
        marginRight="2rem"
        minW="400px"
        marginBottom="2rem"
        justifyContent="center"
      >
        <Heading
          fontSize="1.7rem"
          letterSpacing="1px"
          textTransform="uppercase"
        >
          Error: {description} {code}!
        </Heading>
      </Flex>
    </Flex>
  );
};

export default ErrorCard;
