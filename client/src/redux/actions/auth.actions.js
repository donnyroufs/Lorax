import request from "../../utils/request";
import { ERROR, GET_PROFILE, SUCCESS_PROFILE, LOGGED_OUT } from "../types";
import getToken from "../../utils/getToken";

// @GET: Gets all questions that do not have answers yet.
export const getProfile = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE,
  });

  const accessToken = getToken();

  const req = new Request("/api/auth/me", {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await request(req);

  if (data.ok) {
    dispatch({
      type: SUCCESS_PROFILE,
      payload: {
        ...data.data,
      },
    });
  } else {
    dispatch({
      type: ERROR,
    });
  }
};

export const logout = () => async (dispatch) => {
  const accessToken = getToken();

  const req = new Request("api/auth/logout", {
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  await request(req);
  // Who cares about error handeling right
  localStorage.removeItem("aft");
  return dispatch({
    type: LOGGED_OUT,
  });
};

// export const getAccessToken = () => async (dispatch) => {
//   const req = new Request("/api/auth/refresh", {
//     credentials: "include",
//   });
//   const data = await request(req);
//   console.log(data);
// };
