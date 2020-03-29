import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";

const Home = () => {
  const guilds = useSelector(state => state.guild.guilds);

  return (
    <React.Fragment>
      <Flex p="2rem" flexWrap="wrap" w="100%" alignContent="flex-start">
        {guilds.map(guild => (
          <Card guild={guild} key={guild.id} />
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default Home;
