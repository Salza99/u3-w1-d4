import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    selectedId: this.props.bookId,
    comments: "",
  };
  async componentDidMount() {
    try {
      const response = await fetch(URL + this.state.selectedId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YzllMzhkM2Q0OTAwMTRjZmQ3ZjgiLCJpYXQiOjE2OTQwOTE3NDcsImV4cCI6MTY5NTMwMTM0N30.v0TngLY8LkpTmZB0YtRm5BHtHHEapBH0xwpcSyb5cs8",
        },
      });
      const data = await response.json();
      this.setState({ comments: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment comment={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
