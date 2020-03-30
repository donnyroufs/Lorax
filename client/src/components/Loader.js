import React from "react";
import { Spinner, Flex } from "@chakra-ui/core";

const Loader = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      h="100%"
      w="100%"
      justifyContent="center"
      alignItems="center"
      background="rgba(255,255,255,0.7)"
      transition="all .5s ease-in-out"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="purple"
        size="xl"
        transition="all .5s ease-in-out"
      />
    </Flex>
  );
};

export default Loader;
