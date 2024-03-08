import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import shree_map from "../assets/img/shree/shree_map.png";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp ">
          <Row>
            <Col lg={12} md={6} xl={5}>
            <h3 className="text-center">Opening Hours</h3>
            <div className="table-container">
                        <table className="open_hrs_table">
                          <tbody>
                            <tr>
                              <td>Opening Day</td>
                              <td>Hours</td>
                            </tr>
                            <tr>
                              <td>Monday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                            <tr>
                              <td>Tuesday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                            <tr>
                              <td>Wednesday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                            <tr>
                              <td>Thrusday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                            <tr>
                              <td>Friday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                            <tr>
                              <td>Saturday</td>
                              <td>9am - 5pm</td>
                      
                            </tr>
                         
                          
                          </tbody>
                        </table>


                        <table className="open_hrs_table">
                          <tbody>
                            <tr>
                              <td>Contact Us</td>
                              
                            </tr>
                            <tr>
                              <td>Email: assist@shreebrowbar.co.uk</td>
                            </tr>
                            <tr>
                              <td>Phone: 07242352357</td>
                              
                         
                      
                            </tr>
                         
                          
                          </tbody>
                        </table>
                        
                      </div>  
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7} className="text-center">
              <div>
              <h3 className="text-center">Find us at: </h3>
              <img src={shree_map} className="shree_map_img" alt="Shree Map" style={{ width: "91%", borderRadius: "20px" } } />
              </div>
            

            </Col>
          </Row>
        </div>
      </Col>
  )
}
