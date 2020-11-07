import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default ({
  postItem: { id, content, author, email, publishDate },
  remove,
}) => (
  <Fragment>
    <div className="postContent">
      <text>{content}</text>
    </div>
    <footer>
      <span>
        By <a href={`mailto:${email}`}>{author}</a>
      </span>
      , on <span>{new Date(publishDate).toLocaleDateString()}</span>
      <button
        className="deleteButton"
        onClick={() =>
          window.confirm("Are you sure you wish to delete this post?") &&
          remove(id)
        }
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </footer>
  </Fragment>
);
