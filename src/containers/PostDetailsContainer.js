import { connect } from "react-redux";
import { removePost } from "../actions/postActions";
import PostDetails from "../components/PostDetails";

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removePost(id)),
});

export default connect(null, mapDispatchToProps)(PostDetails);
