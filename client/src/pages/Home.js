import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../components";
import { clearState } from "../redux/actions/guild.actions";

import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";

const Home = ({ match }) => {
  const guilds = useSelector((state) => state.guild.guilds);
  const loading = useSelector((state) => state.guild.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Flex m="4rem" flexWrap="wrap" w="100%" alignContent="flex-start">
      {guilds.map((guild) => (
        <Card guild={guild} key={guild.id} />
      ))}
    </Flex>
  );
};

export default Home;
