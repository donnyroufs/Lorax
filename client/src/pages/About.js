import React, { useState, useEffect } from "react";

import {
  Flex,
  Box,
  Text,
  Heading,
  Link,
  Divider,
  useClipboard,
  Icon,
  useToast
} from "@chakra-ui/core";

const About = ({ match }) => {
  const [value, setValue] = useState(false);
  const { onCopy, hasCopied } = useClipboard(value);
  const toast = useToast();

  useEffect(() => {
    if (value) {
      onCopy();
    }
  }, [onCopy, value]);

  if (hasCopied) {
    toast({
      position: "bottom-right",
      title: "success",
      description: "Copied heading url successfuly",
      status: "success",
      duration: 5000,
      isClosable: true
    });
  }
  return (
    <Flex
      flexWrap="wrap"
      w="100%"
      alignContent="center"
      justifyContent="center"
      bg="white"
      height="auto"
    >
      <Box p="4rem" maxW="750px" mb="200px" mt="50px">
        <Heading
          mb="2rem"
          fontSize="2rem"
          display="flex"
          justifyContent="space-between"
        >
          About
          <Icon
            name="link"
            fontSize="1.25rem"
            cursor="pointer"
            id="about"
            onClick={e =>
              setValue(`http://localhost:3000/about#${e.target.id}`)
            }
          />
        </Heading>
        <Text lineHeight="2.2rem" fontSize="1.05rem">
          Lorax is a discord bot that's being powered by an Express back-end and
          a React front-end. It's main purpose is to prevent people from asking
          the same question over and over again.
        </Text>
        <Text lineHeight="2.2rem" fontSize="1.05rem" mt="1.5rem">
          It detects whether questions has been asked already and gives the
          users similiar questions back. Though, the user can still decide to
          ask his question. That's up to him.
        </Text>
        <Text lineHeight="2.2rem" fontSize="1.05rem" mt="1.5rem">
          When you add Lorax to your server, you will get your own webpage where
          all the questions and answers will be listed.
        </Text>
        <Divider mt="2rem" />

        <Heading
          mb="2rem"
          mt="2rem"
          fontSize="2rem"
          display="flex"
          justifyContent="space-between"
        >
          How does it work?
          <Icon
            name="link"
            fontSize="1.25rem"
            cursor="pointer"
            id="how-does-it-work"
            onClick={e =>
              setValue(`http://localhost:3000/about#${e.target.id}`)
            }
          />
        </Heading>

        <Text lineHeight="2.2rem" fontSize="1.05rem" mt="1.5rem">
          The bot keeps track of titles and descriptions and grabs all the
          important keywords out of it by using TSVectors. As soon as someone
          asks a question it will figure out if there's a match based on the
          title and descriptions we have in our database.
        </Text>
        <Divider mt="2rem" />

        <Heading
          mb="2rem"
          mt="2rem"
          fontSize="2rem"
          display="flex"
          justifyContent="space-between"
        >
          Development
          <Icon
            name="link"
            fontSize="1.25rem"
            cursor="pointer"
            id="development"
            onClick={e =>
              setValue(`http://localhost:3000/about#${e.target.id}`)
            }
          />
        </Heading>

        <Text lineHeight="2.2rem" fontSize="1.05rem" mt="1.5rem">
          The application has been written by Donny Roufs and it's still in it's
          early stages. It's also open source so if you like to get your hands
          dirty then get the pull requests going!
        </Text>
        <Divider mt="2rem" />

        <Box as="footer" mt="2rem">
          <Link
            color="blue.500"
            display="block"
            href="https://discordapp.com/api/oauth2/authorize?client_id=693407160725536810&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=bot"
          >
            Subscribe to Lorax
          </Link>
          <Link
            display="block"
            color="blue.500"
            href="https://github.com/donnyroufs/Lorax"
          >
            Github Repo
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
