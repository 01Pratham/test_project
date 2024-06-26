import React from "react";

function Register() {
  return (
    <>
      <body className="hold-transition login-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h3">
                <b>ESDS Software Solution</b>
              </a>
            </div>
            <div className="col-md-12">
              <div className="card-body">
                <p className="login-box-msg">Register a new membership</p>

                <form action="../../index.html" method="post">
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-user" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <div className="input-group-append">
                        <div className="input-group-text">
                          <span className="fas fa-envelope" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock" />
                      </div>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Retype password"
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
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="terms"
                          defaultValue="agree"
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the <a href="#">terms</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Register;
