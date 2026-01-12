import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
              👨‍🎓 Diploma Electronics (Computer) Engineering (Politeknik Merlimau) (CGPA 3.79)
              <br /> 👨‍💻 Assistant Engineer (1 year) at iRadar Sdn Bhd (<a href="https://iradar.com.my/">iradar.com.my</a>)
              <br /> 👨‍💻 Engineer Intern (5 months) (IoT & Embedded System Engineering) at iRadar Sdn Bhd (<a href="https://iradar.com.my/">iradar.com.my</a>)
              <br />
              <br />I'm familiar with PCB Design (preferably using KiCad), also an hobbyist in PCB design and IoT Development.
              <br />
              <br />Programming languages that I am great in are
              <i>
                <b className="purple"> C/C++, Embedded C (Arduino-based, STM32-based, PIC18/32) </b>
              </i>
              <br />
              <br />
              My fields of Interest are &nbsp;
              <i>
                <b className="purple">Electronics, computer and IoT </b> and
                also in any areas related to{" "}
                <b className="purple">
                  Tech.
                </b>
                <br />
                <br />
                More in About
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Syafiqlim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syafiqlim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
