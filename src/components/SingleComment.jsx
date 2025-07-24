import { Component } from "react";
import CommentList from "./CommentList";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    render() {
        return (
        <>
        <ListGroup>
            <ListGroup.Item key={this.props.comment._id} className='text-dark'>
                <h5 className='text-danger'>{this.props.comment.author}</h5> 
                <p>{this.props.comment.comment}</p> 
                <h6 className='text-end'>{new Date(this.props.comment.createdAt).toLocaleDateString()}</h6>
                </ListGroup.Item>
        </ListGroup>
      </>
        )
    }
}
export default SingleComment;