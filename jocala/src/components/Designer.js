import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Designer.css'; // Ensure this CSS file exists

gsap.registerPlugin(ScrollTrigger);

const Designer = () => {
  useEffect(() => {
    // Animate text elements
    gsap.set(".designer-section .title, #designDescription", {
      y: -200,
      opacity: 0
    });

    gsap.to(".designer-section .title, #designDescription", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".designer-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Animate images with spin-in effect
    gsap.set(".designer-box img", {
      y: 200,
      opacity: 0,
      rotation: 360 // Initial rotation for spin-in effect
    });

    gsap.to(".designer-box img", {
      duration: 2,
      y: 0,
      opacity: 1,
      rotation: 0, // End rotation
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".designer-box",
        start: "top center",
        end: "center",
        markers: false
      }
    });

  }, []);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    console.log('Read more clicked');
  };

  return (
    <section className="designer-section black-bg theme-dark position-relative">
      <h2 className="title text-center">Designers</h2>
      <div className="container">
        <div className="row gx-4 align-items-stretch">
          <div className="col-md-6">
            <div className="designer-box position-relative">
              <div className="team-member team1">
                <img
                  src="../Assets/Images/WhatsApp Image 2024-10-21 at 22.05.32.jpeg"
                  className="img-fluid team1-img"
                  alt="Team Member 1"
                />
              </div>
              <div className="team-member team2">
                <img
                  src="../Assets/WhatsApp Image 2024-10-21 at 22.11.40.jpeg"
                  className="img-fluid team2-img"
                  alt="Team Member 2"
                />
              </div>
              <div className="team-member team3">
                <img
                  src="../Assets/Images/WhatsApp Image 2024-10-21 at 22.58.55.jpeg"
                  className="img-fluid team3-img"
                  alt="Team Member 3"
                />
              </div>
              <div className="box-border"></div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="py-4 py-lg-5" id="designDescription">
              <div className="pb-3 paragraph">
                <p>
                  Chartered by the Board of Regents of the University of the
                  State of TX in 1920, SID is authorized by the Board of Regents
                  to confer the Basic Interior Design certificate (on-site and
                  online), the degrees of Associate in Applied Science in
                  Interior Design (on-site and online), Bachelor of Fine Arts in
                  Interior Design, Master of Fine Arts in Interior Design,
                  Master of Professional Studies in Lighting Design, and Master
                  of Professional Studies in Sustainable Interior Environments.
                </p>
              </div>
              <a href="#" onClick={handleReadMoreClick} className="common-btn">
                read more
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

export default Designer;
