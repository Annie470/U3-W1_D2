import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ arrayBook }) => {
  return (
    <>
    <Container className="py-4">
        <Row className="justify-content-center">
      {arrayBook.map((book) => (
          <Col xs={12} md={4} lg={2}>
        <SingleBook key={book.asin} book={book} /></Col>
      ))}
      </Row>
      </Container>
    </>
  );
};

export default BookList;
