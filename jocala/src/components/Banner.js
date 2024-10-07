import React, {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Banner.css'; 

gsap.registerPlugin(ScrollTrigger);


const Banner = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Banner Big Image
    gsap.to("#bannerBigimg", {
      duration: 2,
      yPercent: 150,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    // Banner Big Text
    gsap.to("#headingBig", {
      duration: 1.5,
      scale: 2,
      delay: 0.8,
      transformOrigin: "top left",
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1,
      repeatRefresh: true
    });

    

  }, []);
  return (
    <section className="banner overflow-hidden">
      <div className="container">
        <div className="banner-box">
          <h1 id="headingBig">D</h1>
          <div className="banner-text">
            <h2 id="headingSmall">
              esign a Space <br />
              You Love.
            </h2>
            <h3 id="headingText">
              Let’s bring your creative <br />
              imagination to reality.
            </h3>
          </div>
          <div className="row gx-0">
            <div className="col-md-6 col-xxl-7 ms-auto">
              <div className="banner-img" id="bannerBigimg">
                <img
                  src="https://www.yudiz.com/codepen/interior-design/banner-img.jpg"
                  className="img-fluid"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Banner;
