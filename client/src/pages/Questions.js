import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../redux/actions/questions.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { Loader } from "../components";
import { AnimatedList } from "react-animated-list";

import { ErrorCard } from "../components/index";
import Question from "../components/Question";
import { Description } from "../components";

import { Search } from "../pages";
import useSearch from "../hooks/useSearch";

/*eslint-disable*/

const Questions = ({ match }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const questions = useSelector(state => state.questions.data);
  const loading = useSelector(state => state.questions.loading);
  const error = useSelector(state => state.questions.error);
  const guildId = useSelector(state => state.guild.id);
  const [initialLoad, query] = useSearch(match.params.slug);

  useEffect(() => {
    dispatch(getQuestions(guildId, match.params.slug));
    initialLoad.current = false;
  }, [guildId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorCard code="404" description="Page not found" />;
  }

  return query.length <= 0 ? (
    <SimpleGrid minChildWidth="400px" spacing={10} w="100%" m="4rem">
      <Flex height="100%" flexDir="column">
        <AnimatedList animation={"zoom"} initialAnimationDuration="2000">
          {questions.map(question => (
            <Question question={question} key={question.id} setShow={setShow} />
          ))}
        </AnimatedList>
      </Flex>
      <Flex height="100%" flexDir="column">
        <AnimatedList animation={"grow"}>
          {questions
            .filter(q => q.id === show)
            .map(question => (
              <Description {...question} key={question.id} />
            ))}
        </AnimatedList>
      </Flex>
    </SimpleGrid>
  ) : (
    <Search />
  );
};

export default Questions;
