import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuild } from "../redux/actions/guild.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { Loader } from "../components";
import { AnimatedList } from "react-animated-list";

import { ErrorCard } from "../components/index";
import Question from "../components/Question";
import { Description, Answer } from "../components";

/*eslint-disable*/

const Overview = ({ match }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const questions = useSelector(state => state.guild.questions);
  const answers = useSelector(state => state.guild.answers);
  const loading = useSelector(state => state.guild.loading);
  const error = useSelector(state => state.guild.error);

  console.log(show);

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

        <AnimatedList animation={"grow"} initialAnimationDuration="2000">
          {answers
            .filter(q => q.id === show)
            .flatMap(q => q.data)
            .flatMap(answer => (
              <Answer {...answer} />
            ))}
        </AnimatedList>
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
