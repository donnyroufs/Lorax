import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";

const Home = () => {
  const guilds = useSelector(state => state.guild.guilds);

  return (
    <React.Fragment>
      <Flex
        marginTop="2rem"
        w="100%"
        alignContent="flex-start"
        justifyContent="center"
      >
        <Flex
          flexWrap="wrap"
          alignContent="flex-start"
          width="1300px"
          justifyContent="space-between"
        >
          {guilds.map(guild => (
            <Card guild={guild} key={guild.id} />
          ))}
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Home;
