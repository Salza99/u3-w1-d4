import { Col, Container, Row } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col xs={12} sm={4} className="mb-3">
          <img
            className="w-25 img-fluid"
            src="https://images.unsplash.com/photo-1593882100241-aef1449fe351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlicmFyeSUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="Library Logo"
          />
        </Col>
        <Col xs={12} sm={4}>
          <ul className="list-unstyled mb-3">
            <li>Info e contatti</li>
            <li>Ufficio stampa</li>
            <li>Regolamenti</li>
          </ul>
        </Col>
        <Col xs={12} sm={4}>
          <ul className="list-unstyled mb-3">
            <li>Management</li>
            <li>Storia</li>
            <li>Archivio storico</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
