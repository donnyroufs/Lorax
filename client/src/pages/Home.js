import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";

import { getGuilds } from "../redux/actions/guild.actions";

const Home = () => {
  const dispatch = useDispatch();
  const guilds = useSelector(state => state.guild.guilds);

  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch]);

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
