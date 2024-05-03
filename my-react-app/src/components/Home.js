import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/")
      .then((res) => {
        if (res.data.data && typeof res.data.data === "object") {
          const dataArray = Object.keys(res.data.data).map(
            (key) => res.data.data[key]
          );
          setUserData(dataArray);
          console.log(res.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleUserDelete = (id) => {
    axios
      .delete(`http://localhost:8000/delete/${id}`)
      .then((res) => {
        if (res.data.data) {
          alert(res.data.data);
          setUserData((prevState) =>
            prevState.filter((user) => user.id !== id)
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <>
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0"></h1>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <b>Employee List</b>
                  </h3>
                </div>
                <div className="card-body">
                  <table
                    id="example1"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Employee ID</th>
                        <th>Email Address</th>
                        <th>Date Of Joining</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData.map((user) => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.empid}</td>
                          <td>{user.email}</td>
                          <td>{user.date}</td>
                          <td>
                            {/* <span className="badge bg-primary p-2">
                              <i>
                                <FontAwesomeIcon icon={faEdit} />
                              </i>
                            </span>{" "} */}
                            <button
                              className="badge bg-primary p-2"
                              
                            >
                              <i>
                                <FontAwesomeIcon icon={faEdit} />
                              </i>
                            </button>
                            |
                            <button
                              className="badge bg-danger p-2 m-1"
                              onClick={() => handleUserDelete(user.id)}
                            >
                              <i>
                                <FontAwesomeIcon icon={faTrash} />
                              </i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Full Name</th>
                        <th>Employee ID</th>
                        <th>Email Address</th>
                        <th>Date Of Joining</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>
                      <p>New Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        53<sup style={{ fontSize: 20 }}>%</sup>
                      </h3>
                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>
                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65</h3>
                      <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="#" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
