import { Card, Col } from "react-bootstrap";
import { Component } from "react";

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
  
    <Card className={"h-100 d-flex flex-column " + (this.state.selected && "border-5 border-danger")} style={{ minHeight: '350px' }}>
<Card.Img variant="top" src={book.img} className="card-img-fixed" onClick={this.changeBorder}/>

      <Card.Body className='d-flex flex-column text-center'>
        <Card.Title className='flex-grow-1'>{book.title}</Card.Title>
        </Card.Body>
    </Card>
)
}}
export default SingleBook