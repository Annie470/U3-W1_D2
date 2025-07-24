import React, { Component } from 'react';
import { Alert, ListGroup } from 'react-bootstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    isError: false,
  };

  componentDidMount() {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Errore Server: ${response.status}`);
        }
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((error) => {
        this.setState({ isError: true });
        console.error(error);
      });
  }

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger">Errore</Alert>
        )}
        <AddComment id= {this.props.id}/>
        <CommentList comments={this.state.comments}/>
      </>
    );
  }
}

export default CommentArea;

