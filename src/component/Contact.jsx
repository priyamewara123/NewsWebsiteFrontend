import React from "react";
const Contact = () => {
  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="form">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="map">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.985767636229!2d-73.52689268518203!3d40.78432704112558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c281127307115f%3A0x90d5abaf2f0279de!2sTerry%20Ln%2C%20Jericho%2C%20NY%2011753%2C%20USA!5e0!3m2!1sen!2sbd!4v1580837516748!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  condimentum quam ac mi viverra dictum. In efficitur ipsum
                  diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
                  finibus.
                </p>
                <h4>
                  <i className="fa fa-map-marker"></i>123 Priya, New York, USA
                </h4>
                <h4>
                  <i className="fa fa-envelope"></i>email@example.com
                </h4>
                <h4>
                  <i className="fa fa-phone"></i>+123-456-7890
                </h4>
                <div className="social">
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
