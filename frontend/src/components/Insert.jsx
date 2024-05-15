import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Insert() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const handleSubmit = (e, action) => {
    e.preventDefault();
    const form = document.getElementById("quickForm");
    const formData = new FormData(form);
    let serializedFormData = {
      action: action,
    };
    if (id) {
      serializedFormData["id"] = id;
    }

    for (let [key, value] of formData.entries()) {
      if (value !== "") {
        serializedFormData[key] = value;
      } else {
        alert("Please fill all the required info");
        return;
      }
    }
    axios({
      url: `${process.env.REACT_APP_URL}:${process.env.REACT_APP_BACKEND_PORT}/insert/`,
      method: "post",
      data: JSON.stringify(serializedFormData),
      headers: {
        Authorization: process.env.REACT_APP_API_AUTHORIZATION,
      },
    }).then((res) => {
      if (res.data.message) {
        alert(res.data.message);
      }
    });
  };

  useEffect(() => {
    if (id) {
      try {
        axios
          .get(`${process.env.REACT_APP_URL}:${process.env.REACT_APP_BACKEND_PORT}/user/${id}`, {
            headers: {
              Authorization: process.env.REACT_APP_API_AUTHORIZATION,
            },
          })
          .then((res) => {
            const data = res.data.data;
            setUser(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      } catch (e) {}
    }
  }, []);

  const validateInput = () => {};

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
                      <h3 className="card-title">Manage .Users</h3>
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
                                value={user.name ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({ ...user, name: e.target.value })
                                }
                                onBlur={(e) => {
                                  const err =
                                    document.getElementById("nameErr");
                                  if (e.target.value.match(/[1-9]/g)) {
                                    err.innerHTML =
                                      "Please enter Alphabates only";
                                  } else {
                                    err.innerHTML = "";
                                  }
                                }}
                                placeholder="Enter full name"
                              />
                              <div
                                className="error text-danger"
                                id="nameErr"
                              ></div>
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
                                value={user.empid ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({ ...user, empid: e.target.value })
                                }
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
                                value={user.email ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({ ...user, email: e.target.value })
                                }
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
                                value={user.date ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({ ...user, date: e.target.value })
                                }
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
                                value={user.Password ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({ ...user, Password: e.target.value })
                                }
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
                                value={user.cpassword ?? ""}
                                required
                                onChange={(e) =>
                                  setUser({
                                    ...user,
                                    cpassword: e.target.value,
                                  })
                                }
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
                            handleSubmit(event, id ? "update" : "insert");
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
