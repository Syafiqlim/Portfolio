import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h4 style={{ textAlign: "left" }}>
            🧍 Muhammad Syafiq Bin Muhammad Syafee Lim
            <br />
            🏠 Melaka, Malaysia
            <br />
            👨‍🎓 Diploma Electronics (Computer) Engineering, Politeknik Merlimau
            <br />
            👨‍💻Engineer Intern (IoT & Embedded System Engineering) at iRadar Sdn Bhd (<a href="https://iradar.com.my/">iradar.com.my</a>)
            <br />
            <br />
            <br />
            </h4>
            <h3 style={{textAlign: "left", fontWeight:'bold'}}> 
                Skills, Languages, Tools
          </h3>
          <ul>
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>Programming Languages : </h4>
              <ImPointRight /> C/C++ (including C Preprocessor), Embedded C (Arduino-based, STM32-based, PIC18/32), JavaScript, TypeScript, Python, SQL, Bash Scripting
            </li>
            <br />
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>IoT, Embedded & Electronic Skills : </h4>
              <ImPointRight /> uC : Arduino-based uC, ESP32/8266, STM32-based uC, PIC18/32-based uC, Raspberry Pi, Pi Pico <br/>
              <ImPointRight /> Interfaces & Protocols : UART, I2C, SPI, BLE, WiFi, TCP/IP, UDP, HTTP/HTTPS, MQTT, GSM/LTE, 5G, LoRa, CoAP, Modbus, SSH <br/>
              <ImPointRight /> RTOS : FreeRTOS <br/>
              <ImPointRight /> Debugging : JTAG, OpenOCD <br/>
              <ImPointRight /> Electronic Circuits Design, PCB Design, THT & SMT Soldering, testing & troubleshooting (multimeter, oscilloscope)
            </li>
            <br />
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>Web Development Skills</h4>
              <ImPointRight /> Front-End : HTML, CSS, JavaScript, React, Vite <br />
              <ImPointRight /> Back-End : Node.js (JavaScript, TypeScript), Express.js, MySQL
            </li>
            <br />
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>Software Development</h4>
              <ImPointRight /> React Native, Electron, Kotlin
            </li>
            <br />
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>Linux Distro familiarities</h4>
              <ImPointRight /> Debian-based, Ubuntu-based
            </li>
            <br />
            <li className="about-activity">
              <h4 style={{fontWeight:'bold'}}>Cloud Technology</h4>
              <ImPointRight /> Google Cloud Platform, AWS, Digital Ocean, Vercel
            </li>
          </ul>
            <br />
            <br />
          <p style={{textAlign: "left"}}> 
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
