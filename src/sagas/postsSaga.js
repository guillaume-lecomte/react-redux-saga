import { put, call } from "redux-saga/effects";
import { fetchPostsRequest } from "../actions";
import API from "../services/postsApi";

export function* fetchPostsSaga() {
  try {
    const response = yield call(API.getPosts);
    yield put(fetchPostsRequest(response.data));
  } catch (error) {
    console.log(error);
  }
}
