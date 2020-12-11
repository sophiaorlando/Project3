import React from "react";
import axios from "axios";
import "./blog.css";

class Post extends React.Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.getPost();
  }
  async getPost() {
    const response = await axios.get(`/posts/${this.props.match.params.id}`);
    this.setState({ post: response.data });
  }
  renderHTML() {
    return { __html: this.state.post.html };
  }
  renderPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
  }

  render() {
    return <div className="container">{this.renderPost()}</div>;
  }
}

export default Post;
