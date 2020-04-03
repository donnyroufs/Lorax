import request from "../../utils/request";
import {
  ERROR,
  GET_RESULTS,
  SUCCESS_RESULTS,
  SET_QUERY,
  NO_RESULTS
} from "../types";

// @GET: Gets all questions that do not have answers yet.
export const setQuery = query => async dispatch => {
  dispatch({
    type: SET_QUERY,
    payload: {
      query
    }
  });
};

export const getSearchResults = (id, slug) => async (dispatch, getState) => {
  dispatch({
    type: GET_RESULTS
  });

  const query = getState().search.query;

  const data = await request(
    `/api/question/search/?question=${query}&id=${id}&slug=${slug}`
  );

  if (data.ok && data.data[0].length <= 0) {
    return dispatch({
      type: NO_RESULTS
    });
  }

  if (!data.ok) {
    return dispatch({
      type: ERROR
    });
  }

  // Get all answers for the questions
  for (let [i, question] of data.data[0].entries()) {
    const answersData = await request(
      `/api/question/search/${question.QuestionId}?id=${id}&slug=${slug}`
    );

    data.data[0][i] = {
      ...question,
      Answers: answersData.data.Answers
    };
  }

  // We got valid data back
  return dispatch({
    type: SUCCESS_RESULTS,
    payload: {
      data: data.data[0]
    }
  });
};

// question/search/?question=how do you cook&id=undefined&slug=faq-bot-testing
