import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Contact.css'; // Create and import your CSS file

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.set(".contact-box, .contact-border", {
      opacity: 0,
      scale: 0
    });

    gsap.to(".contact-box, .contact-border", {
      duration: 1.6,
      opacity: 1,
      scale: 1,
      transformOrigin: "top right",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".contact-us",
        start: "top center",
        end: "bottom",
        markers: false
      }
    });
  }, []);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    // Add logic for "read more" action here, e.g., navigating to another section or displaying more content
    console.log('Read more clicked');
  };

  return (
    <section className="contact-us position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4>School of Interior Design</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <img
                  src="https://www.yudiz.com/codepen/interior-design/location.svg"
                  className="img-fluid"
                  alt="Location"
                />
                <a className="nav-link pe-none" href="#">
                  633 Pleasant Brook Autoroute, Columbus, TX 19092
                </a>
              </li>
              <li className="nav-item">
                <img
                  src="https://www.yudiz.com/codepen/interior-design/email.svg"
                  className="img-fluid"
                  alt="Email"
                />
                <a className="nav-link" href="mailto:info@design.com">
                  info@design.com
                </a>
              </li>
              <li className="nav-item">
                <img
                  src="https://www.yudiz.com/codepen/interior-design/call.svg"
                  className="img-fluid"
                  alt="Call"
                />
                <a className="nav-link" href="tel:2150021500">215-002-1500</a>
              </li>
            </ul>
          </div>
          <div className="col-md-7">
            <div className="contact-info">
              <div className="contact-box"></div>
              <div className="contact-border"></div>
              <h3>Follow Us!</h3>
              <p>
                Please fill out the form below with any questions you may have
                and someone will respond to you shortly. Thank You.
              </p>
              <a href="#" className="common-btn" onClick={handleReadMoreClick}>
                Follow
                <img
                  src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg"
                  className="img-fluid"
                  alt="Arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
