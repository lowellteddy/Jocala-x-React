import React, {useEffect} from 'react';
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

  return (
    <section className="contact-section white-bg position-relative overflow-hidden">
      <h2 className="title text-center">Contact</h2>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
            <div className="py-lg-5" id="contactDescription">
              <div className="pb-md-3 paragraph">
                <p>
                  We are proud of our history, our esteemed faculty, and our
                  dedicated professionals, who, year after year, provide the
                  environment and support to help our students realize their
                  dreams.
                </p>
                <p>
                  School of Interior Design is a private, not-for-profit college
                  devoted to the design of the interior environment. Our guiding
                  principle is that the successful design of an interior space
                  improves human welfare, and that the interior design
                  profession assumes an important role in ensuring that spaces
                  are beautiful, functional, healthy, safe, and built in a
                  socially and environmentally conscientious way.
                </p>
              </div>
              <a href="javascript:void(0)" className="common-btn">
                read more
                <img
                  src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg"
                  className="img-fluid"
                  alt="Arrow"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-box mt-4 my-md-0 position-relative">
              <img
                src="https://www.yudiz.com/codepen/interior-design/contact-bg.png"
                className="img-fluid"
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
