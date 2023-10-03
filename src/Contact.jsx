import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    number: "",
    Email: "",
    msg: "",
  });

  const inputevent = (eve) => {
    const { name, value } = eve.target;

    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const isFormValid =
      data.fullname !== "" &&
      data.number !== "" &&
      data.Email !== "" &&
      data.msg !== "";

      if (isFormValid) {
        alert("Your data is submitted");
        setData({
          fullname: "",
          number: "",
          Email: "",
          msg: "",
        });
      } else {
        alert("Please fill in all fields before submitting.");
      }
    };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container  contact_name">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=" Enter your name"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputevent}
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your mobile number"
                  name="number"
                  value={data.number}
                  onChange={inputevent}
                />
              </div>
              <div className="mb-2">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Email address"
                  name="Email"
                  value={data.Email}
                  onChange={inputevent}
                />
              </div>

              <div className="mb-2">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputevent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
