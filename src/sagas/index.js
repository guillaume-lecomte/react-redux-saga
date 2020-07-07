import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions";
import { fetchPostsSaga } from "../sagas/postsSaga";

export default function* watchAll() {
  yield takeEvery(actionTypes.FETCH_POSTS_REQUEST, fetchPostsSaga);
}
