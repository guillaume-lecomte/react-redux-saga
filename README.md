# react-redux-saga

A small React exercise: a blog post list loaded with Redux-Saga from a fake API, where posts can be added, viewed and removed.

**Status: archived.** Learning exercise, last activity 2020-12-07. Not maintained.

## What it shows

- A saga middleware wired to the store: [`store.js`](src/store.js), [`sagas/index.js`](src/sagas/index.js) (`takeEvery` on the `GET_POSTS_REQUEST` action).
- A saga that calls an API with `call` and dispatches the result with `put`: [`postsSaga.js`](src/sagas/postsSaga.js).
- A fake API that waits one second and returns a local JSON file, to simulate the network: [`apis/posts.js`](src/apis/posts.js), [`data/postsData.json`](src/data/postsData.json).
- Actions, a reducer and connected containers, as in the Redux-only version: [`reducers/postReducer.js`](src/reducers/postReducer.js), [`src/containers`](src/containers).

## Stack

From [`package.json`](package.json): React 16.8, Redux 4, `react-redux` 6, Redux-Saga 1.1, `react-scripts` 2.1.8 (Create React App), Font Awesome icons.

## Run it

```bash
yarn install
yarn start
```

These commands were not run when this README was written.

## Known issues

- A failed request is only written to the console (`postsSaga.js`), nothing is shown to the user.
- The sample posts in `postsData.json` are placeholder text with names and email addresses.
- [`debug.log`](debug.log) is committed. It is a one-line Chrome error log from a Windows machine, and `.gitignore` does not exclude it.
- The dependencies are from 2020 (`react-scripts` 2.1.8) and `yarn audit` reports a large number of advisories for them. Do not deploy this as is.
- The only test is the default Create React App one.

## License

No license file in the repository.
