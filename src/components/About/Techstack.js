import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaMicrochip, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import {
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiCplusplus,
  SiArduino,
  SiStmicroelectronics,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStmicroelectronics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiCircuitry />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt  />
      </Col>
    </Row>
  );
}

export default Techstack;
