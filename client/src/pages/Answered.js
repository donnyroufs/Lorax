import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers } from "../redux/actions/answers.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { Loader } from "../components";
import { AnimatedList } from "react-animated-list";

import { ErrorCard } from "../components/index";
import Question from "../components/Question";
import { Description, Answer } from "../components";

/*eslint-disable*/

const Answered = ({ match }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const questions = useSelector(state => state.answers.questions);
  const answers = useSelector(state => state.answers.answers);
  const loading = useSelector(state => state.answers.loading);
  const error = useSelector(state => state.answers.error);
  const guildId = useSelector(state => state.guild.id);

  useEffect(() => {
    dispatch(getAnswers(guildId, match.params.slug));
  }, [guildId]);

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
              <Answer {...answer} key={answer.id} />
            ))}
        </AnimatedList>
      </Flex>
    </SimpleGrid>
  );
};

export default Answered;
