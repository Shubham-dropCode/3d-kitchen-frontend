import React from "react";

const contactus = () => {
  return (
    <section className="contact-section section_padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              className="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                    //   onFocus="this.placeholder = ''"
                    //   onBlur="this.placeholder = 'Enter Message'"
                      placeholder="Enter Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                    //   onFocus="this.placeholder = ''"
                    //   onBlur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                    //   onFocus="this.placeholder = ''"
                    //   onBlur="this.placeholder = 'Enter email address'"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                    //   onFocus="this.placeholder = ''"
                    //   onBlur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <a href="#" className="btn_3 button-contactForm">
                  Send Message
                </a>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home" />
              </span>
              <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet" />
              </span>
              <div className="media-body">
                <h3>00 (440) 9865 562</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email" />
              </span>
              <div className="media-body">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactus;
