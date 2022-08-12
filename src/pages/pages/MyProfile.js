import React, { Component } from "react";

const MyProfile = () => {
  return (
    <div class="content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                {" "}
                <a href="Dashboard.html">Dashboard</a>{" "}
              </li>
              <li class="breadcrumb-item active">My Profile</li>
            </ol>
            <div class="row">
              <div class="col-md-5 m-auto">
                <div class="card card-register mx-auto mb-5">
                  <div class="card-body">
                    <form>
                      <div class="form-row mt-4 mb-4">
                        <div class="col-md-12 text-center">
                          {" "}
                          <img
                            src="assets/images/sc1.jpg"
                            width="100"
                            class="rounded-circle border-blue-thick"
                          />
                          <h4 class="mb-0 mt-3 text-primary">Subhadeep Sen</h4>
                          <h6>Sales Officer</h6>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <label for="username">Login Id</label>
                            <input
                              type="text"
                              readonly
                              class="form-control"
                              name="username"
                              id="username"
                              value="S4140"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="email">E-mail</label>
                            <input
                              type="email"
                              readonly
                              class="form-control"
                              name="email"
                              id="email"
                              value="subhadeep.sen@weikfield.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col-md-6">
                            <label for="mobile">Mobile</label>
                            <input
                              id="mobile"
                              readonly
                              type="text"
                              class="form-control"
                              name="phone"
                              value="8939587198"
                            />
                          </div>
                          <div class="col-md-6">
                            <label for="address-1">Address</label>
                            <input
                              id="address-1"
                              readonly
                              type="text"
                              class="form-control"
                              name="address"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
