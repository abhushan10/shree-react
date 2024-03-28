import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/shree/logo_for_linkedin.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/shreebrowbar/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="">Shree Brow Bar Limited, registered in England and Wales, company registration number 12978942, registered office 120 Mortimer St, Herne Bay, CT6 5EB.</p>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
