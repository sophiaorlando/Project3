import React from "react";
import PostListItem from "./PostListItem";
import axios from "axios";
import "./blog.css";

class PostList extends React.Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    this.getPosts();
  }
  async getPosts() {
    const response = await axios.get("/posts");
    this.setState({ posts: response.data });
    console.log(response);
  }

  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem post={post} key={post._id} />;
    });
  }
  render() {
    return (
      <div className="listContainer">
        <div className="post-list">{this.renderList()}</div>
      </div>
    );
  }
}

export default PostList;
