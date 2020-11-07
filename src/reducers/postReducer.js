import { v4 as uuidv4 } from "uuid";
import { ADD_POST, REMOVE_POST, GET_POSTS } from "../actions/postActions";

const initialState = [];

function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_POST:
      const { title, content, author } = payload;
      return [
        ...state,
        {
          id: uuidv4(),
          title,
          content,
          author,
          publishDate: new Date(Date.now()).toISOString(),
        },
      ];
    case REMOVE_POST:
      const { id } = payload;
      return state.filter((post) => post.id !== id);
    case GET_POSTS:
      const { posts } = payload;
      return [...state, ...posts];

    default:
      return state;
  }
}

export default postReducer;
