import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [error, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "Email field required";
    }

    // Password validation code commented out for brevity

    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios({
        url: `${process.env.REACT_APP_URL}:${process.env.REACT_APP_BACKEND_PORT}/login/`,
        method: "post",
        data: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers:{
          Authorization : process.env.REACT_APP_API_AUTHORIZATION
        }
      }).then((res) => {
        try{
          if (res.data.is_valid) {
            // Redirect to home page
            localStorage.setItem("Name", res.data.Name ?? "User");
            localStorage.setItem("isLoggedIn", true);
            Navigate("/Home");
          }
        }catch(e){
          alert(res.data.error)
        }
      }).catch((error)=>{
        alert("Error")
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
