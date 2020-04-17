import request from "../../utils/request";
import { ERROR, GET_QUESTIONS, SUCCESS_QUESTIONS, CLEAR_STATE } from "../types";

// @GET: Gets all questions that do not have answers yet.
export const getQuestions = (id) => async (dispatch) => {
  dispatch({
    type: GET_QUESTIONS,
  });

  const data = await request(`/api/user/questions/${id}`);

  console.log(data);

  if (!data.ok || data.data == null) {
    dispatch({
      type: ERROR,
    });
  } else {
    dispatch({
      type: SUCCESS_QUESTIONS,
      payload: {
        data: data.data,
      },
    });
  }
};

export const clearState = () => async (dispatch) => {
  dispatch({
    type: CLEAR_STATE,
  });
};
