import React, { useState, Fragment } from "react";

const AddPost = ({ add }) => {
  const initialState = {
    title: "",
    content: "",
    author: "",
  };
  const [currentPost, setCurrentPost] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost({ ...currentPost, [name]: value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    add(currentPost);
    setCurrentPost(initialState);
  };

  return (
    <Fragment>
      <form className="form-inline" onSubmit={handleSubmit}>
        <label>Title :</label>
        <input
          name="title"
          type="text"
          value={currentPost.title}
          placeholder="Enter post's title"
          onChange={(event) => handleInputChange(event)}
          required
        />
        <label>Content :</label>
        <textarea
          name="content"
          value={currentPost.content}
          onChange={(event) => handleInputChange(event)}
          required
        />
        <label>Author :</label>
        <input
          name="author"
          type="text"
          value={currentPost.author}
          placeholder="Who's writing?"
          onChange={(event) => handleInputChange(event)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </Fragment>
  );
};

export default AddPost;
