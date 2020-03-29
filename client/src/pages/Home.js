import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";

import { getGuilds } from "../redux/actions/guild.actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGuilds());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Flex p="2rem">
        <Card />
      </Flex>
    </React.Fragment>
  );
};

export default Home;
