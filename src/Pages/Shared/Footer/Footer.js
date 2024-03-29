import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram, AiFillYoutube, AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row xs={1} md={2} lg={3}>
          <Col className="mb-3">
            <img src={Logo} alt="" />
            <p className="my-4">
              I enjoys all areas of comprehensive dental care from preventive
              treatment and simple restorations to root canals, crown and bridge
              work and cosmetic care.
            </p>
          </Col>
          <Col className="d-flex justify-content-lg-center mb-3">
            <div>
              <h2>Our Services</h2>
              <p>Oral exam</p>
              <p>Teeth whitening</p>
              <p>Teeth repair</p>
              <p>Support 24/7</p>
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <FaFacebookF className="bg-info p-2 rounded fs-1"></FaFacebookF>
              </Col>
              <Col>
                <BsTwitter className="bg-info p-2 rounded fs-1"></BsTwitter>
              </Col>
              <Col>
                <AiFillInstagram className="bg-info p-2 rounded fs-1"></AiFillInstagram>
              </Col>
              <Col>
                <AiFillYoutube className="bg-info p-2 rounded fs-1"></AiFillYoutube>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <div className="d-flex my-3">
              <div>
                <AiFillPhone className="fs-3"></AiFillPhone>
              </div>
              <div className="ms-2">
                <h4>+880-163-8548-900</h4>
              </div>
            </div>
            <div className="d-flex my-3">
              <div>
                <BsFillEnvelopeFill className="fs-3"></BsFillEnvelopeFill>
              </div>
              <div className="ms-2">
                <h4 className="fw-normal">mdnizam12109@gmail.com</h4>
              </div>
            </div>
          </Col>
        </Row>
        <div className="text-center">
            <hr />
          <p>Copyright © reserved by MARTIN {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
