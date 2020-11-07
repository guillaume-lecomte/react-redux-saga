import { connect } from "react-redux";
import PostsList from "../components/PostsList";
import { getPostsRequest } from "../actions/postActions";

const mapStateToProps = (state) => ({
  list: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPostsRequest: () => dispatch(getPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
