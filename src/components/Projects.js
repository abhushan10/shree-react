import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/shree_services/1.png";
import projImg2 from "../assets/img/shree_services/2.png";
import projImg3 from "../assets/img/shree_services/3.png";
import projImg4 from "../assets/img/shree_services/4.png";
import projImg5 from "../assets/img/shree_services/5.png";
import projImg6 from "../assets/img/shree_services/6.png";
import projImg7 from "../assets/img/shree_services/7.png";
import projImg8 from "../assets/img/shree_services/8.png";
import projImg9 from "../assets/img/shree_services/9.png";
import pricelist from "../assets/img/shree_services/Shree_Brow_bar_Price_list.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Eye Brow Threading",
      description: "Shaping your Eyebrows",
      imgUrl: projImg1,
    },
    {
      title: "Whole Body Waxing",
      description: "Body waxing with care",
      imgUrl: projImg2,
    },
    {
      title: "Tinting",
      description: "enhance, shape, darken, & define your brows",
      imgUrl: projImg3,
    },
    {
      title: "Steam Facial with Scrubs",
      description: "opens up the skil pores, Effective for removing blackheads and whiteheads.",
      imgUrl: projImg4,
    },
    {
      title: "Head Massage",
      description: "Relaxing indian head massage, helps migraine.",
      imgUrl: projImg5,
    },
    {
      title: "EyeLashes Extention",
      description: "Gives the natural eyelashes a fuller, more dramatic look.",
      imgUrl: projImg6,
    },
    {
      title: "EyeLashes Lamination",
      description: "Lash lift that includes a nourishing treatment. ",
      imgUrl: projImg7,
    },
    {
      title: "OPI/Shellac Nails",
      description: "Nail polish cured under UV and can last upto 14 days.",
      imgUrl: projImg8,
    },
    {
      title: "Manicure & Pedicure",
      description: "Manicure: Trimming, shaping, and buffing fingernails. Pedicure: Exfoliating the skin on your feet before soaking them in warm water",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Our Offer</h2>
                <p> We have skilled treatment & Beauty care services. You can choose each of our Experts @ there working day</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Price List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experts</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <img src={pricelist} alt="" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <p>Find our Therapists specifically at our working shift.</p>
                    <div className="table-container">
                        <table className="custom-table">
                          <tbody>
                            <tr>
                              <td>Beauty Therapist</td>
                              <td>Day</td>
                              <td>Hours</td>
                            </tr>
                            <tr>
                              <td>Rashmi</td>
                              <td>Mon-Sat</td>
                              <td>9am-5pm</td>
                            </tr>
                            <tr>
                              <td>Rita</td>
                              <td>Unboarding</td>  {/* Rita Day section */}
                              <td>Arranging</td>   {/* Rita hour section */}
                            </tr>
                            <tr>
                              <td>Sammy</td>
                              <td>Unboarding</td>  {/* Seema Day section */}
                              <td>Arranging</td>    {/* Seema Hour section */}
                            </tr>
                          </tbody>
                        </table>
                      </div>                

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
