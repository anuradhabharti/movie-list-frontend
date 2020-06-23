import { FETCH_TOKEN, FETCH_USER, LOGOUT_USER } from "../actions/types";

const initialState = {
  user: {},
  token: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        user: {},
        token: ""
      };
    default:
      return state;
  }
}
