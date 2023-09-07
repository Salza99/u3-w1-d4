import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    searchValue: "",
  };

  render() {
    return (
      <Container>
        <h2>Cerca</h2>
        <div className="input-group justify-content-center">
          <div className="form-outline">
            <input
              id="search-focus"
              type="search"
              className="form-control"
              value={this.state.searchValue}
              onChange={(event) => this.setState({ searchValue: event.target.value })}
            />
          </div>
          <button type="button" className="btn btn-primary">
            Trova
          </button>
        </div>
        <h2 className="mb-4">Sfoglia</h2>
        <Row>
          {this.props.arrBooks
            .filter((book) => book.title.toLowerCase().includes(this.state.searchValue))
            .map((book) => (
              <SingleBook book={book} key={book.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
