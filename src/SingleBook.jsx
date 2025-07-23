import { Card, Col } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    active : false
  }
  
  render() {
    const {book} = this.props
return (
            <Card className="h-100 d-flex flex-column " style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" />
      <Card.Body className='d-flex flex-column text-center'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        </Card.Body>
    </Card>
)
}}
export default SingleBook