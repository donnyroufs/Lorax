import request from "../../utils/request";
import {
  GET_GUILDS,
  ERROR,
  SUCCESS_GUILDS,
  GET_GUILD,
  SUCCESS_GUILD,
  CLEAR_STATE
} from "../types";

// @GET: Gets all guilds, with question count.
export const getGuilds = () => async dispatch => {
  dispatch({
    type: GET_GUILDS
  });

  const data = await request("/api/guild");
  if (!data.ok)
    dispatch({
      type: ERROR
    });

  dispatch({
    type: SUCCESS_GUILDS,
    payload: {
      data: data.data
    }
  });
};

// @GET: Gets guild by ID with questions and answers.
// @NOTE: Should probably refactor this later on to
export const getGuild = (_, slug) => async (dispatch, getState) => {
  dispatch({
    type: GET_GUILD
  });
  const id = getState().guild.id;

  const data = await request(`/api/guild/overview/${id}?slug=${slug}`);

  if (!data.ok || data.data == null) {
    dispatch({
      type: ERROR
    });
  } else {
    dispatch({
      type: SUCCESS_GUILD,
      payload: {
        data: data.data
      }
    });
  }
};

export const clearState = () => async dispatch => {
  dispatch({
    type: CLEAR_STATE
  });
};
