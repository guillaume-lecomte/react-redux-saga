import { takeEvery } from "redux-saga/effects";
import { GET_POSTS_REQUEST } from "../actions/postActions";
import { getPostsSaga } from "./postsSaga";

export default function* watchAll() {
  // takeEvery will listen for every GET_POSTS_REQUEST redux action that comes through.
  yield takeEvery(GET_POSTS_REQUEST, getPostsSaga);
}
