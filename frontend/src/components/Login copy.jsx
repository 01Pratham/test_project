import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email field required";
    }

    // if (formData.password === "" || formData.password === null) {
    //   isvalid = false;
    //   validationErrors.password = "Password field required";
    // } else if (formData.password.length < 6) {
    //   isvalid = false;
    //   validationErrors.password =
    //     "Password length should be at least 6 characters";
    // }
    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios({
        url: "http://localhost:8000/login/",
        method: "post",
        data: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }).then((res) => {
        if (res.data.is_valid) {
          setLoggedIn(true);
          redirect("/home");
          // 
          console.log(res.data)
          // history.push("/home"); // Redirect to home page
        }
      });
    }
  };

  return (
    <>
      <body className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h3">
                <b>ESDS Software Solution</b>
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              {valid ? (
                <></>
              ) : (
                <span className="text-danger">
                  {error.email}
                  {error.password}
                </span>
              )}
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  {/* Using controlled input for email */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={(event) =>
                      setFormData({ ...formData, email: event.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(event) =>
                      setFormData({ ...formData, password: event.target.value })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>

              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Login;
