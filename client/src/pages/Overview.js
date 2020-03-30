import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuild } from "../redux/actions/guild.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { Loader } from "../components";

import { ErrorCard } from "../components/index";
import Question from "../components/Question";

/*eslint-disable*/

const Overview = ({ match }) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.guild.questions);
  const loading = useSelector(state => state.guild.loading);
  const error = useSelector(state => state.guild.error);

  useEffect(() => {
    dispatch(getGuild(match.params.slug));
  }, [match.params.slug]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorCard code="404" description="Page not found" />;
  }

  return (
    <SimpleGrid minChildWidth="400px" spacing={10} w="100%" m="4rem">
      <Flex height="100%" flexDir="column">
        {questions.map(question => (
          <Question question={question} key={question.id} />
        ))}
      </Flex>
      <Flex height="100%" flexDir="column">
        <Flex
          bg="white"
          height="200px"
          border="1px"
          borderStyle="solid"
          borderWidth="1px"
          borderColor="borderGray"
          rounded="lg"
          p="2rem"
          marginBottom="2rem"
          flexDir="column"
          justifyContent="space-between"
        ></Flex>
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
