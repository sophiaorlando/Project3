import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

class PostListItem extends React.Component {
  renderDate(dateString) {
    const date = new Date(dateString);

    return `${date.getMonth()} ${date.getFullYear()}`;
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <span className="tag" key={tag}>
          {tag}
        </span>
      );
    });
  }
  render() {
    const { post } = this.props;
    return (
      <Link to={`/posts/${post._id}`} className="post-list-item">
        <h3 className="title">{post.title}</h3>
        <span className="date">{this.renderDate(post.createdAt)}</span>
        <div className="tags">{this.renderTags(post.tags)}</div>
      </Link>
    );
  }
}

export default PostListItem;
