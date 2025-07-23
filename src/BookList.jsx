import SingleBook from "./SingleBook";
import { Container, Row, Col, Form} from "react-bootstrap";
import { Component } from "react";

class BookList extends Component { 
     state = {
            cercato : ""
        }
    render () {
        //   const { arrayBook } = this.props per scrivere dopo direttamente
        // const filtrati = arrayBook.filter etc..;
    const filtrati =this.props.arrayBook.filter((book) =>
      book.title.toLowerCase().includes(this.state.cercato.toLowerCase())
    );
return (
    <>
    <Container className="d-flex flex-column align-items-center bg-warning-subtle" fluid>
 <Form.Group className="w-50 mt-3" controlId="searchbar">
        <Form.Control
          type="text"
          placeholder="Cerca.."
          value={this.state.cercato}
          onChange={(e) => this.setState({ cercato: e.target.value })}
        />
      </Form.Group>
    <Container className="py-4">
        <Row className="justify-content-center gy-2">
      {filtrati.map((book) => (
          <Col xs={12} md={4} lg={3} key={book.asin}>
        <SingleBook  book={book} /></Col>
      ))}
      </Row>
      </Container>
      </Container>
    </>
  );
}} 

export default BookList;
