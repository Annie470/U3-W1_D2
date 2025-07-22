import { Container, Row, Col, Card} from 'react-bootstrap';
import horrorBooks from './assets/data/horror.json';

function CardsContainer() {
  return ( 
    <Container fluid className='p-3 bg-warning-subtle'>
        <Row className='g-2'>
        {console.log(horrorBooks)}
        { horrorBooks.map((book) => {
            return (
     <Col key={book.asin} xs={12} md={4} lg={3}>
       <Card className="h-100 d-flex flex-column " style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Card.Text>Categoria: {book.category}</Card.Text>
      </Card.Body>
    </Card>
    </Col>
            )
        })}
</Row>
    </Container>
  );
}

export default CardsContainer;