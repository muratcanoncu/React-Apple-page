import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class form extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name & Surname</Form.Label>
            <Form.Control type="text" placeholder="John Smith" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control type="email" placeholder="johnsmith@mail.com" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I accept Terms & Conditions" />
          </Form.Group>
          <Button variant="success" type="submit">
            Subscribe
          </Button>
        </Form>
      </div>
    );
  }
}
