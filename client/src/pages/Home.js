import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGuilds } from "../redux/actions/guild.actions";

import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";
import { Loader } from "../components";

const Home = ({ match }) => {
  const dispatch = useDispatch();

  const guilds = useSelector(state => state.guild.guilds);
  const loading = useSelector(state => state.guild.loading);

  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch, match.url]);

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
