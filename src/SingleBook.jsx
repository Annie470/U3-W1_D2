import { Card, Col } from "react-bootstrap";

const SingleBook =({book})=> {
return (
            <Card className="h-100 d-flex flex-column " style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" />
      <Card.Body className='d-flex flex-column text-center'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        </Card.Body>
    </Card>
)
}
export default SingleBook