import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments &&
          this.props.comments.map((c) => {
            return <SingleComment key={c._id} comment={c} />;
          })}
      </ListGroup>
    );
  }
}

export default CommentsList;
