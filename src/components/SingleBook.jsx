import { Card, Col } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected : false
  }
  changeBorder =()=> {
// this.setState({ selected: true });
//  this.setState(prevState => ({ selected: !prevState.selected })); per togglare
if (this.state.selected === true) {
  this.setState({selected:false})
} else {
  this.setState({selected:true})
}
  }
  render() {
    const {book} = this.props
    
return (
  <>
    <Card style={{ height: '100%' }} className={"d-flex flex-column" + (this.state.selected && "border-5 border-danger")}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" onClick={this.changeBorder}/>
      <Card.Body className='d-flex flex-column text-center justify-content-start'>
        <Card.Title>{book.title}</Card.Title>
        <div className="flex-grow-1 d-flex flex-column justify-content-end">
        <Card.Text className="text-start">{book.price}€</Card.Text>
        <Card.Text className="text-start">Categoria: {book.category}</Card.Text></div>
        </Card.Body>
        {this.state.selected && <CommentArea  className={'flex-grow-2'} id={book.asin}/>}
    </Card>
     
</>)
}}
export default SingleBook