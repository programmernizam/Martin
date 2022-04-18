import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyPhoto from "../../images/my_photo.png";
import "./About.css";

const About = () => {
  return (
    <Container className="about-section">
      <Row xs={1} md={2} className="shadow p-5 border align-content-center">
        <Col>
          <img className="shadow p-3 border" src={MyPhoto} alt="" />
        </Col>
        <Col>
          <h2>About Me</h2>
          <p className="m-0">
            <strong>Name:</strong> MD Nizam Uddin
          </p>
          <p>
            <strong>City:</strong> Chandpur
          </p>
          <h2>My Goals</h2>
          <p>
            Thanks for giving me this golden opportunity to introduce myself
            before this panel. I’m a Junior-programmer I will working on web
            development sector last 6month and still trying to improve my skills
            and always try to learn as many thing as possible. And My Future
            Goals is Become an Full Stack Web Developer and learn or work some
            more programming languages And My last 6 month goal is trying got a
            internship and improve my skills with corporate level and do
            something better whit programming sector. My vision is one day I
            will job in google.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
