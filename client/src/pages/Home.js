import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";
import { Loader } from "../components";

const Home = () => {
  const guilds = useSelector(state => state.guild.guilds);
  const loading = useSelector(state => state.guild.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex m="4rem" flexWrap="wrap" w="100%" alignContent="flex-start">
      {guilds.map(guild => (
        <Card guild={guild} key={guild.id} />
      ))}
    </Flex>
  );
};

export default Home;
