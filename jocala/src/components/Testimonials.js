import React, {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Testimonials.css'; // Create and import your CSS file

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    gsap.set(".testimonial-section .title", {
      y: -200,
      opacity: 0
    });

    gsap.to(".testimonial-section .title", {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top center",
        end: "center",
        markers: false
      }
    });

    // Other animations...

  }, []);

  return (
    <section className="testimonial-section black-bg theme-dark position-relative overflow-hidden">
      <h2 className="title text-center">Testimonials</h2>
      <div className="container">
        <div className="row gx-4 align-items-stretch">
          <div className="col-md-6 align-self-center order-md-last">
            <div className="testimonial-description py-lg-5">
              <div className="pb-3 paragraph">
                <p>
                  At SID, we often say that we “grow our own” — meaning that our
                  outstanding graduates and talented students become the next
                  generation of SID instructors.
                </p>
                <p>
                  Our students consistently praise SID's practical,
                  project-based curriculum, which prepares them to excel in
                  professional practice. Our exceptional faculty members
                  provide unparalleled mentorship and guidance, and our
                  supportive community fosters lifelong connections.
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
            <div className="testimonial-box mt-4 my-md-0 position-relative">
              <img
                src="https://www.yudiz.com/codepen/interior-design/testimonial-bg.png"
                className="img-fluid"
                alt="Testimonial"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
