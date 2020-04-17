import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "../components";
import { clearState } from "../redux/actions/guild.actions";
import { getProfile } from "../redux/actions/auth.actions";
import { Card } from "../components/index";
import { Flex } from "@chakra-ui/core";
import getToken from "../utils/getToken";

const Home = ({ match, history }) => {
  const guilds = useSelector((state) => state.guild.guilds);
  const loading = useSelector((state) => state.guild.loading);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      const accessToken = new URL(document.location).searchParams.get(
        "accessToken"
      );
      if (accessToken != null) {
        // Store in local storage
        localStorage.setItem("aft", accessToken);
        // Get Profile
        dispatch(getProfile());
        // Remove search param
        return history.push("/");
      }

      const sessionAccessToken = getToken();
      if (sessionAccessToken) {
        dispatch(getProfile());
      }
    }
  }, []);

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
