import request from "../../utils/request";
import { ERROR, GET_QUESTIONS, SUCCESS_QUESTIONS } from "../types";

// @GET: Gets all questions that do not have answers yet.
export const getQuestions = (id, slug) => async dispatch => {
  dispatch({
    type: GET_QUESTIONS
  });

  const data = await request(`/api/question/${id}?slug=${slug}`);
  if (!data.ok || data.data == null) {
    dispatch({
      type: ERROR
    });
  } else {
    dispatch({
      type: SUCCESS_QUESTIONS,
      payload: {
        data: data.data
      }
    });
  }
};
