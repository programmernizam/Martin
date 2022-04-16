import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, img, text } = service;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button>Book Appointment</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
