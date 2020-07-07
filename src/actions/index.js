export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});
