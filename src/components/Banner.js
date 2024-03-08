import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/shree/beautiful_girl_home.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const scrollToSelector = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
         
        
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">NO APPOINTMENT REQUIRED!</span>
                <h1>{`Beauty with Confidence`}</h1>
                <p>Threading, Waxing, Eye lashes Extension, Eye Brow Lamination, Eye Lashes Perming, Contact Lenses, Massage, Nails, Haircut and many more.</p>
     
                <button className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => scrollToSelector('#services')}>Our Offer <ArrowRightCircle size={25} /></button>
                
              </div>}
        
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col> */}
       
        </Row>
      </Container>
    </section>
  )
}
