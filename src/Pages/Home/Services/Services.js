import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [ services, setServices ] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <Container>
      <h2 className="display-5 fw-bold text-uppercase text-center my-4 text-info">
        Dental SERVICES
      </h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Row>
    </Container>
  );
};

export default Services;
