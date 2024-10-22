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
        end: 'center',
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
        <h2 className="title text-center">Services</h2>
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
          <h1>LIVING ROOM</h1>
        The living room is the heart of the home, a space where family and friends gather to relax and connect.
        Our interior design team meticulously curates each living room with a perfect blend of comfort and elegance. 
        We focus on creating an inviting ambiance with plush seating, warm lighting, and tasteful decor.
        The use of high-quality materials and attention to detail ensures that every element, from the soft textures of the cushions to the sophisticated lines of the furniture, contributes to a cohesive and luxurious environment.
        Our commitment to delivering the best results is evident in the harmonious balance of style and functionality, making the living room a sanctuary of tranquility and joy.
        </p>

        {/* Kitchen Section */}
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
          <h1>KITCHEN</h1>
        
        The kitchen is the hub of culinary creativity and social interaction. 
        Our designs transform this essential space into a stylish and efficient masterpiece.
        We prioritize functionality without compromising on aesthetics, integrating state-of-the-art appliances seamlessly with elegant cabinetry and countertops. 
        The layout is thoughtfully designed to enhance workflow, ensuring that every utensil and ingredient is within easy reach. 
        Whether it's a cozy breakfast nook or a grand kitchen island, we pay attention to every detail, ensuring that the kitchen is not only a place to cook but also a delightful area to gather and entertain. 
        Our dedication to excellence shines through in every aspect of our kitchen designs, reflecting our passion for creating spaces that inspire and delight.
          
        </p>

        {/* Bedroom Section */}
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
          <h1>BEDROOM</h1>
          
        The bedroom is a personal retreat, a space for rest and rejuvenation. 
        Our design approach focuses on creating a serene and comfortable environment that promotes relaxation and peace. 
        We carefully select soothing color palettes, luxurious fabrics, and bespoke furnishings to craft a bedroom that feels both intimate and opulent. 
        The placement of lighting, the softness of the bedding, and the thoughtful incorporation of storage solutions all contribute to a harmonious and clutter-free space. 
        Our unwavering commitment to quality and attention to detail ensures that the bedroom is a perfect blend of comfort and sophistication, providing a sanctuary where you can unwind and recharge.
          
        </p>

        {/* Office Section */}
        <div className="grid-container">
          <div className="grid-item img-office-1">
            <div className="service-box">
              <img
                src="../Assets/Images/office.jpg" // Replace with your image
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-2">
            <div className="service-box">
              <img
                src="../Assets/Images/office2.jpg" // Replace with your image
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-3">
            <div className="service-box">
              <img
                src="../Assets/Images/office3.jpg" // Replace with your image
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
          <div className="grid-item img-office-4">
            <div className="service-box">
              <img
                src="../Assets/Images/office4.jpg" // Replace with your image
                className="img-fluid"
                alt="Office"
              />
            </div>
          </div>
        </div>
        <p className="description">
          <h1>OFFICE</h1>
          
        The office is a space where productivity and creativity thrive. 
        Our interior design team creates offices that are both functional and inspiring. 
        We emphasize ergonomic furniture, ample natural light, and a layout that enhances focus and efficiency. 
        The use of sleek, modern materials and innovative design elements creates a professional yet inviting atmosphere. 
        Whether it's a home office or a corporate workspace, we tailor our designs to meet the specific needs of our clients, ensuring that the space supports their work style and goals. 
        Our dedication to excellence and our passion for design are evident in every detail, making the office a place where great ideas come to life.


         
        </p>
      </div>
    </section>
  );
};

export default Services;
