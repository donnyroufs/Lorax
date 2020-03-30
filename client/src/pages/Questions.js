import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGuild } from "../redux/actions/guild.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";

import Question from "../components/Question";

/*eslint-disable*/

const Questions = () => {
  const [question, setQuestion] = useState({});
  const dispatch = useDispatch();
  const { state } = useLocation();
  const questions = useSelector(state => state.guild.questions);

  const handleOnClick = e => {
    console.log(e);
  };

  useEffect(() => {
    dispatch(getGuild(state.guildId));
  }, []);

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

export default Questions;
