import { connect } from "react-redux";
import { fetchPostsRequest } from "../actions";
import PostsList from "../components/postsList";

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsRequest })(PostsList);
