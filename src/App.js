import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PostsList from "./containers/postsListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <PostsList />
      </div>
    </div>
  );
}

export default App;
