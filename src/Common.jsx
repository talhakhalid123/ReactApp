import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto pt-5">
              <div className="row align-items-center">
                <div className=" col-md-6 pt-5">
                  <h1>
                    {props.name}<br/>
                    <strong className="text-success">
                      Digital Marketing
                    </strong>
                  </h1>
                  <h2 className="my-3 fs-3"> We have the the best team</h2>
                  <NavLink to={props.visit} className="btn btn-primary rounded-2">
                    {props.btnname}
                  </NavLink>
                </div>
                <div className="col-lg-6 text-center header_image">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home pic"
                  />
                </div>
              </div>
              <div className="testimonial text-center pt-5">
                <h1>Testimonials</h1>
                <p className="justify-content-center my-3">
                  Digital marketing is a dynamic and essential component of
                  modern business strategies. It encompasses a wide array of
                  online tactics and tools to connect with target audiences,
                  promote products or services, and build brand presence in the
                  digital landscape. Leveraging platforms like social media,
                  search engines, email, and websites, digital marketing enables
                  businesses to reach potential customers with precision,
                  tailoring messages and content to suit individual preferences.
                  This data-driven approach not only enhances brand visibility
                  but also allows for real-time tracking and analysis of
                  campaign performance, enabling businesses to adapt and
                  optimize their strategies swiftly. In today's interconnected
                  world, mastering the art of digital marketing is crucial for
                  staying competitive and relevant in the ever-evolving digital
                  marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
