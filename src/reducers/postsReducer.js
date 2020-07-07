import { FETCH_POSTS_REQUEST } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
