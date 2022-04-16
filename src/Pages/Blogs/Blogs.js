import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Blog1 from "../../images/blogs_1.png";

const Blogs = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={Blog1} />
            <Card.Body>
              <Card.Title className="fw-bold">
                Difference between authorization and authentication?
              </Card.Title>
              <Card.Text>
                <Row>
                  <Col>
                    <h6>1.Authentication verifies who the user is.</h6>
                    <h6>
                      2.Authentication works through passwords, one-time pins,
                      biometric information, and other information provided or
                      entered by the user.
                    </h6>
                    <h6>
                      3.Authentication is the first step of a good identity and
                      access management process.
                    </h6>
                    <h6>
                      4.Authentication is visible to and partially changeable by
                      the user.
                    </h6>
                    <h6>
                      5.Example: By verifying their identity, employees can gain
                      access to an HR application that includes their personal
                      pay information, vacation time, and 401K data.
                    </h6>
                  </Col>
                  <Col>
                    <h6>
                      1.Authorization determines what resources a user can
                      access.
                    </h6>
                    <h6>
                      2.Authorization works through settings that are
                      implemented and maintained by the organization.
                    </h6>
                    <h6>
                      3.Authorization always takes place after authentication.
                    </h6>
                    <h6>
                      4.Authorization isn’t visible to or changeable by the
                      user.
                    </h6>
                    <h6>
                      5.Example: Once their level of access is authorized,
                      employees and HR managers can access different levels of
                      data based on the permissions set by the organization.
                    </h6>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
              <Card.Img variant="top" src=""/>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
