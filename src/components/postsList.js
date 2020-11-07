import React, { Fragment, Component } from "react";
import PostDetails from "../containers/PostDetailsContainer";
import AddPost from "../containers/AddPostContainer";

class PostsList extends Component {
  componentDidMount() {
    this.props.getPostsRequest();
  }

  render() {
    const { list } = this.props;
    return (
      <Fragment>
        <AddPost />
        <hr className="solid" />

        {list && list.length > 0 ? (
          list.map((post) => (
            <div key={post.id} className="postContainer">
              <header>{post.title}</header>
              <PostDetails postItem={post} />
            </div>
          ))
        ) : (
          <div className="loader" />
        )}
      </Fragment>
    );
  }
}

export default PostsList;
