import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css'; 

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Animate title
    gsap.set('.services-section .title', {
      y: -200,
      opacity: 0
    });

    gsap.to('.services-section .title', {
      duration: 1.6,
      y: 0,
      opacity: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top center',
        once: true,
        markers: false
      }
    });

    const imageClasses = [
      '.img-livingroom-1', '.img-livingroom-2', '.img-livingroom-3', '.img-livingroom-4',
      '.img-kitchen-1', '.img-kitchen-2', '.img-kitchen-3', '.img-kitchen-4',
      '.img-bedroom-1', '.img-bedroom-2', '.img-bedroom-3', '.img-bedroom-4',
      '.img-office-1', '.img-office-2', '.img-office-3', '.img-office-4'
    ];

    imageClasses.forEach((imgClass, index) => {
      gsap.set(imgClass, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0
      });

      gsap.to(imgClass, {
        duration: 1.5,
        x: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top center',
          end: 'bottom center',
          once: true,
          markers: false,
          scrub: 1
        }
      });
    });
  }, []);

  return (
    <section className="services-section white-bg position-relative overflow-hidden">
      <h2 className="title text-center">Services</h2>
      <div className="container">
        {/* Living Room Section */}
        <h3 className="subtitle text-center">Living Room</h3>
        <div className="grid-container">
          <div className="grid-item img-livingroom-1">
            <div className="service-box">
              <img
                src="../Assets/Images/coffee.jpg" 
                className="img-fluid"
                alt="Living Room"
              />
            </div>
          </div>
          <div className="grid-item img-livingroom-2">
            <div className="service-box">
              <img
                src="../Assets/Images/livingroom3.jpg" 
                className="img-fluid"
                alt="Living Room"
              />
            </div>
          </div>
          <div className="grid-item img-livingroom-3">
            <div className="service-box">
              <img
                src="../Assets/Images/livingroom2.jpg" 
                className="img-fluid"
                alt="Living Room"
              />
            </div>
          </div>
          <div className="grid-item img-livingroom-4">
            <div className="service-box">
              <img
                src="../Assets/Images/livingnoblurry.jpg" 
                className="img-fluid"
                alt="Living Room"
              />
            </div>
          </div>
        </div>
        <p className="description">
          The living room is the heart of the home, a space where family and friends gather to relax and connect. Our interior design team meticulously curates each living room with a perfect blend of comfort and elegance. We focus on creating an inviting ambiance with plush seating, warm lighting, and tasteful decor. The use of high-quality materials and attention to detail ensures that every element, from the soft textures of the cushions to the sophisticated lines of the furniture, contributes to a cohesive and luxurious environment. Our commitment to delivering the best results is evident in the harmonious balance of style and functionality, making the living room a sanctuary of tranquility and joy.
        </p>

        {/* Kitchen Section */}
        <h3 className="subtitle text-center">Kitchen</h3>
        <div className="grid-container">
          <div className="grid-item img-kitchen-1">
            <div className="service-box">
              <img
                src="../Assets/Images/blurrykreplce.jpg" 
                className="img-fluid"
                alt="Kitchen"
              />
            </div>
          </div>
          <div className="grid-item img-kitchen-2">
            <div className="service-box">
              <img
                src="../Assets/Images/kitchen2.jpg" 
                className="img-fluid"
                alt="Kitchen"
              />
            </div>
          </div>
          <div className="grid-item img-kitchen-3">
            <div className="service-box">
              <img
                src="../Assets/Images/kitchen3.jpg" 
                className="img-fluid"
                alt="Kitchen"
              />
            </div>
          </div>
          <div className="grid-item img-kitchen-4">
            <div className="service-box">
              <img
                src="../Assets/Images/kitchen4.jpg" 
                className="img-fluid"
                alt="Kitchen"
              />
            </div>
          </div>
        </div>
        <p className="description">
          The kitchen is the hub of culinary creativity and social interaction. Our designs transform this essential space into a stylish and efficient masterpiece. We prioritize functionality without compromising on aesthetics, integrating state-of-the-art appliances seamlessly with elegant cabinetry and countertops. The layout is thoughtfully designed to enhance workflow, ensuring that every utensil and ingredient is within easy reach. Whether it's a cozy breakfast nook or a grand kitchen island, we pay attention to every detail, ensuring that the kitchen is not only a place to cook but also a delightful area to gather and entertain. Our dedication to excellence shines through in every aspect of our kitchen designs, reflecting our passion for creating spaces that inspire and delight.
        </p>

        {/* Bedroom Section */}
        <h3 className="subtitle text-center">Bedroom</h3>
        <div className="grid-container">
          <div className="grid-item img-bedroom-1">
            <div className="service-box">
              <img
                src="../Assets/Images/bedroom.jpg" 
                className="img-fluid"
                alt="Bedroom"
              />
            </div>
          </div>
          <div className="grid-item img-bedroom-2">
            <div className="service-box">
              <img
                src="../Assets/Images/bedrroom1.jpg" 
                className="img-fluid"
                alt="Bedroom"
              />
            </div>
          </div>
          <div className="grid-item img-bedroom-3">
            <div className="service-box">
              <img
                src="../Assets/Images/bedroom2.jpg" 
                className="img-fluid"
                alt="Bedroom"
              />
            </div>
          </div>
          <div className="grid-item img-bedroom-4">
            <div className="service-box">
              <img
                src="../Assets/Images/bedroom3.jpg" 
                className="img-fluid"
                alt="Bedroom"
              />
            </div>
          </div>
        </div>
        <p className="description">
          The bedroom is a personal retreat, a space for rest and rejuvenation. Our design approach focuses on creating a serene and comfortable environment that promotes relaxation and peace. We carefully select soothing color palettes, luxurious fabrics, and bespoke furnishings to craft a bedroom that feels both intimate and opulent. The placement of lighting, the softness of the bedding, and the thoughtful incorporation of storage solutions all contribute to a harmonious and clutter-free space. Our unwavering commitment to quality and attention to detail ensures that the bedroom is a perfect blend of comfort and sophistication, providing a sanctuary where you can unwind and recharge.
        </p>

        {/* Office Section */}
        <h3 className="subtitle text-center">Office</h3>
        <div className="grid-container">
          <div className="grid-item img-office-1">
            <div className="service-box">
              <img
                src="../Assets/Images/office.jpg"
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-2">
            <div className="service-box">
              <img
                src="../Assets/Images/office2.jpg"
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-3">
            <div className="service-box">
              <img
                src="../Assets/Images/office3.jpg"
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-4">
            <div className="service-box">
              <img
                src="../Assets/Images/office4.jpg"
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
        </div>
        <p className="description">
          The office is a space for productivity and creativity. Our designs focus on creating a functional yet inspiring environment where work can flourish. We blend ergonomics with aesthetics, selecting furniture and layouts that promote efficiency and comfort. The use of natural light, combined with thoughtful decor elements, creates a motivating atmosphere that enhances focus and creativity. Each office design is tailored to the client's needs, ensuring that the workspace reflects their personality and encourages productivity. Our commitment to crafting innovative office solutions ensures that every detail is designed to support your work and enhance your experience.
        </p>
      </div>
      <div className="text-center mt-4">
        <button className="common-btn">Go Back</button>
      </div>
    </section>
  );
};

export default Services;
