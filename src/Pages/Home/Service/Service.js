import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, text, price } = service;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Row className="align-items-center">
            <Col md={4}>
              <Card.Title>${price}</Card.Title>
            </Col>
            <Col md={8}>
              <Button>
                <Link
                  className="text-white text-decoration-none"
                  to={"/checkout"}
                >
                  Book Appointment
                </Link>
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
