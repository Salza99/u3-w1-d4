import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      this.props && (
        <ListGroup.Item>
          {this.props.comment.author} {this.props.comment.comment}
        </ListGroup.Item>
      )
    );
  }
}
export default SingleComment;
