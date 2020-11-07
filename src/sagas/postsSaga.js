import { put, call } from "redux-saga/effects";
import { getPosts } from "../actions/postActions";
import API from "../apis/posts";

// Generator function, which returns a Generator object
export function* getPostsSaga() {
  try {
    const response = yield call(API.getPosts);
    yield put(getPosts(response));
  } catch (error) {
    console.warn(error);
  }
}
