import { Box, Badge, Stack, Flex, Image, Heading } from "@chakra-ui/core";
const Card = () => {
  return (
    <Flex
      align="center"
      w="400px"
      maxH="120px"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      background="white"
      border="1px"
      borderStyle="solid"
      borderColor="borderGray"
      paddingLeft="2rem"
      cursor="pointer"
    >
      <Image
        src="https://images.unsplash.com/photo-1547886569-4b9d93ddcef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
        alt="server"
        size="75px"
        rounded="8px"
        objectFit="cover"
      />
      <Flex direction="column" paddingLeft="2rem">
        <Heading as="h3" size="lg" margin="0 0 .5rem 0">
          Awesome Server
        </Heading>
        <Stack isInline spacing={4} align="center">
          <Badge
            rounded="full"
            backgroundColor="dark"
            p=".5rem"
            color="white"
            fontSize="xs"
          >
            244 Comments
          </Badge>
          <Box as="span">12024 Users</Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Card;
