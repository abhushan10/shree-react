import meter1 from "../assets/img/shree/hannah.png";
import meter2 from "../assets/img/shree/Evie.png";
import meter3 from "../assets/img/shree/katie.png";
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="reviews">
   
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 >Reviews</h2>
                        <p>This is what our customers say about us.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Hannah</h5>
                                <p>” The lady was really<br></br> good and perfected <br></br>my bushy eyebrows. ”</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Evie</h5>
                                <p>” Visited them for eyebrow threading , really did <br></br> a great job , <br></br>highly recommended. ”</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Katie</h5>
                                <p>” Super relaxing Massage<br></br> helped me a lot <br></br>for migraine issues. ”</p>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
