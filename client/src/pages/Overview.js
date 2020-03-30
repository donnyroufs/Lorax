import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuild } from "../redux/actions/guild.actions";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { Loader } from "../components";
import { AnimatedList } from "react-animated-list";

import { ErrorCard } from "../components/index";
import Question from "../components/Question";
import { Description } from "../components";

/*eslint-disable*/

const Overview = ({ match }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const questions = useSelector(state => state.guild.questions);
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
        <AnimatedList animation={"slide"} initialAnimationDuration="4000">
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
              <Description
                title={question.title}
                description={question.description}
                createdAt={question.createdAt}
                key={question.id}
              />
            ))}
        </AnimatedList>
      </Flex>
    </SimpleGrid>
  );
};

export default Overview;
