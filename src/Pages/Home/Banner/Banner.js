import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <header className="banner-section">
      <Container className="h-100 d-flex align-items-center">
        <Col lg={8}>
          <h2 className="display-4 fw-bold text-light text-uppercase">
            New Life Begins with a Confident Smile
          </h2>
          <p className="text-light fs-5 fw-normal">
            Hi, I'm professional dentist. I enjoys all areas of comprehensive
            dental care from preventive treatment and simple restorations to
            root canals, crown and bridge work and cosmetic care.
          </p>
          <Button
            variant="primary"
            className="rounded-pill px-4 py-2 text-white"
          >
            Get Appointment
          </Button>
        </Col>
      </Container>
    </header>
  );
};

export default Banner;
