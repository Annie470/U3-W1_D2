import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comm: {
      author: "",
      comment: "",
      rate: "",
      elementId: this.props.id,
    },
  };

  postComm = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODgyMWYzMmZlMzZkMDAwMTU5NzU4MTYiLCJpYXQiOjE3NTMzNTgxMzAsImV4cCI6MTc1NDU2NzczMH0.e0s40I7Kn-R4ZbRhY2HdP17MOyFqP76G-kLpdCuZ1Xs",
      },
      body: JSON.stringify(this.state.comm),
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento inviato con successo!");
          this.setState({
            comm: {
              author: "",
              comment: "",
              rate: "",
              elementId: this.props.id, 
            },
          });
        } else {
          alert("Errore nell'invio del commento");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        alert("Errore di rete");
      });
  };

  render() {
    return (
      <Form onSubmit={this.postComm}>
        <Form.Group controlId="commentAdd" className="mb-2">
          <Form.Control
            type="email"
            placeholder="Email"
            value={this.state.comm.author}
            onChange={(e) =>
              this.setState({
                comm: {
                  ...this.state.comm,
                  author: e.target.value,
                },
              })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Control
            type="number"
            placeholder="Rate (1-5)"
            min="1"
            max="5"
            value={this.state.comm.rate}
            onChange={(e) =>
              this.setState({
                comm: {
                  ...this.state.comm,
                  rate: e.target.value,
                },
              })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Commento"
            value={this.state.comm.comment}
            onChange={(e) =>
              this.setState({
                comm: {
                  ...this.state.comm,
                  comment: e.target.value,
                },
              })
            }
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;


