import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h4 style={{ textAlign: "justify" }}>
            🧍 Muhammad Syafiq Bin Muhammad Syafee Lim
            <br />
            🏠 Melaka, Malaysia
            <br />
            👨‍🎓 Diploma Electronics (Computer) Engineering, Politeknik Merlimau
            <br />
            👨‍💻Engineer Intern (IoT & Embedded System Engineering) at iRadar Sdn Bhd (<a href="https://iradar.com.my/">iradar.com.my</a>)
            <br />
            <br />
            </h4>
            <h3 style={{textAlign: "justify"}}> 
                Skills, Languages, Tools
          </h3>
          <ul>
            <li className="about-activity">
              <h4>Programming Languages : </h4>
              <ImPointRight /> C/C++ (including C Preprocessor), Embedded C (Arduino-based, STM32-based, PIC18/32), JavaScript, TypeScript, Python, SQL, Bash Scripting
            </li>
            <li className="about-activity">
              <h4>IoT, Embedded & Electronic Skills : </h4>
              <ImPointRight /> uC : Arduino-based uC, ESP32/8266, STM32-based uC, Raspberry Pi <br/>
              <ImPointRight /> Interfaces & Protocols : UART, I2C, SPI, BLE, WiFi, TCP/IP, UDP, HTTP/HTTPS, MQTT, GSM/LTE, 5G, LoRa, CoAP, Modbus, SSH <br/>
              <ImPointRight /> RTOS : FreeRTOS <br/>
              <ImPointRight /> Debugging : JTAG, OpenOCD <br/>
              <ImPointRight /> Electronic Circuits Design, PCB Design, THT & SMT Soldering, testing & troubleshooting (multimeter, oscilloscope)
            </li>
            <li className="about-activity">
              <h4>Web Development Skills</h4>
              <ImPointRight /> Front-End : HTML, CSS, JavaScript, React, Vite <br />
              <ImPointRight /> Back-End : Node.js (JavaScript, TypeScript), Express.js, MySQL
            </li>
          </ul>
            <br />
            <br />
          <p style={{textAlign: "justify"}}> 
                Achievements and Certfications (Certs and badges verifications are available on LinkedIn)
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Arcitura Certified IoT Architect (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Postman API Fundamentals Student Expert certification (2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> WorldSkills Malaysia Belia Electronics Participant Certificate (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> EDIAs 32nd and PERKAYA 25th Gold (Best Innovation) Awardee
            </li>
            <li className="about-activity">
              <ImPointRight /> Coursera Google Cybersecurity Professional Certificate (Ongoing)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Cloud Skill Badges (2022-2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Codered Certificates of Achievements (Cyber Security Courses) (2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> Google Developer Skill Badges (2023)
            </li>
            <li className="about-activity">
              <ImPointRight /> Chairman of JKE PMM Club (2024)
            </li>
            <li className="about-activity">
              <ImPointRight /> Malaysia Future Leaders School (MFLS) Tier 2 Certificate (2019)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
