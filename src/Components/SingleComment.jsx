import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    return (
      this.props && (
        <ListGroup.Item className="bg-info">
          <p>
            Autore:<strong>{this.props.comment.author}</strong>
          </p>{" "}
          <p>
            Commento:<strong>{this.props.comment.comment}</strong>
          </p>
        </ListGroup.Item>
      )
    );
  }
}
export default SingleComment;
