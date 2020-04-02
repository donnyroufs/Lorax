import request from "../../utils/request";
import { ERROR, SUCCESS_ANSWERS, GET_ANSWERS } from "../types";

// @GET: Gets all questions that do not have answers yet.
export const getAnswers = (id, slug) => async dispatch => {
  dispatch({
    type: GET_ANSWERS
  });

  const data = await request(`/api/answer/${id}?slug=${slug}`);
  console.log(data);
  if (!data.ok || data.data == null) {
    dispatch({
      type: ERROR
    });
  } else {
    dispatch({
      type: SUCCESS_ANSWERS,
      payload: {
        data: data.data
      }
    });
  }
};
