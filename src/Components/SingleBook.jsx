import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} xl={3} className="g-4" key={this.props.book.asin}>
        <Card className="h-100">
          <Card.Img
            className="object-fit-contain img-fluid h-50"
            variant="top"
            src={this.props.book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
            style={{ border: this.state.selected ? "3px solid red" : "none" }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            {this.state.selected && <CommentArea bookId={this.props.book.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
