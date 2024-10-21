import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonials.css'; // Create and import your CSS file

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    gsap.set('.testimonial-section .title', {
      y: -200,
      opacity: 0
    });

    gsap.to('.testimonial-section .title', {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.testimonial-section',
        start: 'top center',
        end: 'center',
        markers: false
      }
    });

    // Other animations...

  }, []);

  const handleReadMoreClick = (event) => {
    event.preventDefault();
    // Add logic for "read more" action here, e.g., navigating to another section or displaying more content
    console.log('Read more clicked');
  };

  return (
    <section className="testimonial-section white-bg position-relative overflow-hidden">
      <h2 className="title text-center">Testimonials</h2>
      <div className="container">
        <div className="row g-0 left-row">
          <div className="col-md-6">
            <div className="content border-end-0">
              <h3>Praise Lavender</h3>
              <p>
                "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo.
                Quam elit ultrices urna, eget eleifend arcu risus id metus.
                Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien.
                Sed aliquam leo et semper vestibulum."
              </p>
              <a href="#" className="read-more" onClick={handleReadMoreClick}>
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img
                src="../Assets/Images/WhatsApp Image 2024-10-21 at 22.02.37.jpeg"
                className="img-fluid"
                alt="person"
              />
            </div>
          </div>
        </div>
        <div className="row g-0 reverse-row right-row">
          <div className="col-md-6">
            <div className="img-box">
              <img
                src="../Assets/Images/WhatsApp Image 2024-10-21 at 22.23.02.jpeg"
                className="img-fluid"
                alt="person"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content border-start-0">
              <h3>Gideon Ombewa</h3>
              <p>
                "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo.
                Quam elit ultrices urna, eget eleifend arcu risus id metus.
                Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien.
                Sed aliquam leo et semper vestibulum."
              </p>
              <a href="#" className="read-more" onClick={handleReadMoreClick}>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
