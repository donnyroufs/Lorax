import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Flex } from "@chakra-ui/core";
import { UserQuestion, Loader } from "../components/index";
import { AnimatedList } from "react-animated-list";
import { getQuestions } from "../redux/actions/profile.actions";

const UserQuestions = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuthenticated) {
      dispatch(getQuestions(auth.userId));
    }
  }, [auth.isAuthenticated]);

  if (profile.loading) {
    return <Loader />;
  }

  return (
    <SimpleGrid minChildWidth="500px" spacing={10} columns={2} w="100%" m="4rem">
      <AnimatedList animation={"zoom"} initialAnimationDuration="2000">
        {profile.data.map((question) => (
          <UserQuestion question={question} username={auth.username} key={question.id} />
        ))}
      </AnimatedList>
    </SimpleGrid>
  );
};

export default UserQuestions;
