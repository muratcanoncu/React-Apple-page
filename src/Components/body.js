import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export default class body extends Component {
  render() {
    const { name, year, price, rate, photo } = this.props;
    return (
      <div>
        <Card
          style={{
            width: "20rem",
            margin: "10px 15px",
          }}
        >
          <Card.Img
            variant="top"
            src={photo}
            style={{ width: "100%", height: "350px" }}
          />
          <Card.Body>
            <Card.Title className="font-weight-bolder">{name}</Card.Title>
            <Card.Text>
              Published:{year}
              <br />
              Rate:{rate}
              <br />
              Price:{price}
            </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
