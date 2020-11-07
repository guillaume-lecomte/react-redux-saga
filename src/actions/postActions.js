export const ADD_POST = "ADD_POST";
export function addPost(newPost) {
  return { type: ADD_POST, payload: newPost };
}

export const REMOVE_POST = "REMOVE_POST";
export function removePost(id) {
  return { type: REMOVE_POST, payload: { id } };
}

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export function getPostsRequest() {
  return { type: GET_POSTS_REQUEST };
}

export const GET_POSTS = "GET_POSTS";
export function getPosts(posts) {
  return { type: GET_POSTS, payload: { posts } };
}
