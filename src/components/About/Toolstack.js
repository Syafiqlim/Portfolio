import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDigitalOcean, FaAws } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiKicad,
  SiWindows11,
  SiGooglecloud ,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKicad />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDigitalOcean />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
    </Row>
  );
}

export default Toolstack;
