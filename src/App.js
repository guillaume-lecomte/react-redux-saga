import React, { Component } from "react";
import "./App.css";
import PostsList from "./containers/PostsListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The BlogPost</h1>
          <PostsList />
        </header>
      </div>
    );
  }
}

export default App;
