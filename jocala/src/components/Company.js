import React from 'react';
import './Company.css'; // Create and import your CSS file

const Company = () => {
  return (
    <section className="company-section white-bg position-relative overflow-hidden">
      <h2 className="title text-center">Company</h2>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
            <div className="py-lg-5" id="compDescription">
              <div className="pb-md-3 paragraph">
                <p>
                  We are proud of our history, our esteemed faculty, and our
                  dedicated professionals, who, year after year, provide the
                  environment and support to help our clients realize their
                  dreams.
                </p>
                <p>
                  Jocala Interiors is a private, 
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
            <div className="compy-box mt-4 my-md-0 position-relative">
              <img
                src="https://www.yudiz.com/codepen/interior-design/company-bg.png"
                className="img-fluid"
                alt="Company"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;