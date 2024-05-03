import React from "react";
import axios from "axios";

function Insert(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("quickForm");
    const formData = new FormData(form);
    let serializedFormData = {};

    for (let [key, value] of formData.entries()) {
      serializedFormData[key] = value;
    }

    // console.log(JSON.stringify(serializedFormData))

    axios({
      url: "http://localhost:8000/insert/",
      method: "post",
      data: JSON.stringify(serializedFormData),
    }).then((res) => {
      if (res.data.message) {
        alert(res.data.message);
      }
    });
  };
  return (
    <>
      <div>
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">{/* <h1>Validation</h1> */}</div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-10 ml-5">
                  <div className="card card-primary">
                    <div className="card-header">
                      <h3 className="card-title">Manage Users</h3>
                    </div>
                    <form id="quickForm" method="post">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="Name"
                                placeholder="Enter full name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Employee ID
                              </label>
                              <input
                                type="number"
                                name="empid"
                                className="form-control"
                                id="empId"
                                placeholder="Enter Employee ID"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Email Address
                              </label>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter Email Address"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Date Of Joining
                              </label>
                              <input
                                type="date"
                                name="date"
                                className="form-control"
                                id="doj"
                                placeholder="Enter date Of Joing"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputEmail1">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="exampleInputPassword1">
                                Confirm password
                              </label>
                              <input
                                type="password"
                                name="cpassword"
                                className="form-control"
                                id="cpassword"
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-primary"
                          onClick={(event) => {
                            handleSubmit(event);
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Insert;
