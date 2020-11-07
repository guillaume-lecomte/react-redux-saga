import { connect } from "react-redux";
import { addPost } from "../actions/postActions";
import AddPost from "../components/AddPost";

const mapDispatchToProps = (dispatch) => ({
  add: (postItem) => dispatch(addPost(postItem)),
});

export default connect(null, mapDispatchToProps)(AddPost);
