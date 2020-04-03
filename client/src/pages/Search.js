import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Question, Description, Answer } from "../components/index";

import { Flex, SimpleGrid } from "@chakra-ui/core";
import { AnimatedList } from "react-animated-list";
import { clearState } from "../redux/actions/questions.actions";
// import { Card } from "../components/index";
// import { Loader } from "../components";

const Search = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const questions = useSelector(state => state.search.questions);

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);

  return (
    <SimpleGrid minChildWidth="400px" spacing={10} w="100%" m="4rem">
      <Flex height="100%" flexDir="column">
        <AnimatedList animation={"zoom"} initialAnimationDuration="2000">
          {questions.map(question => (
            <Question
              question={question}
              key={question.id}
              setShow={setShow}
              hack={true}
            />
          ))}
        </AnimatedList>
      </Flex>
      <Flex height="100%" flexDir="column">
        <AnimatedList animation={"grow"}>
          {questions
            .filter(q => q.QuestionId === show)
            .map(question => (
              <Description {...question} key={question.QuestionId} />
            ))}
        </AnimatedList>
        <AnimatedList animation={"grow"} initialAnimationDuration="2000">
          {questions
            .filter(q => q.QuestionId === show)
            .flatMap(q => q.Answers)
            .flatMap(answer => (
              <Answer {...answer} key={answer.id} />
            ))}
        </AnimatedList>
      </Flex>
    </SimpleGrid>
  );
};

export default Search;
