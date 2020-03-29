import request from "../../utils/request";
import { GET_GUILDS, ERROR, SUCCESS_GUILDS } from "../types";

export const getGuilds = () => async dispatch => {
  dispatch({
    type: GET_GUILDS
  });

  const data = await request("http://localhost:5000/api/guild");
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
