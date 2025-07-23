import { Card, Col, Container, Row } from "react-bootstrap";

const SingleBook =({book})=> {
return (
    <Container className="py-4">
        <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
            <Card className="h-100 d-flex flex-column " style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed2" />
      <Card.Body className='d-flex flex-column text-center'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        </Card.Body>
    </Card></Col></Row></Container>
    
)
}
export default SingleBook