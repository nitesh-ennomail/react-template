import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ViewOrder = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  {" "}
                  <a href="Dashboard.html">Dashboard</a>{" "}
                </li>
                <li className="breadcrumb-item active">View Order</li>
              </ol>
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <h4>List of Oders</h4>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-lg-12">
                  <div className="card card-primary border-0">
                    <div
                      className="card-header collapsepanel"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                    >
                      Search Orders
                    </div>
                    <div
                      className="card-body collapse show py-0"
                      id="collapseOne"
                      aria-expanded="true"
                    >
                      <div className="column pt-3 col-sm-offset-0">
                        <form
                          data-toggle="validator"
                          role="form"
                          className="form-horizontal"
                        >
                          <div className="form-group row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="OrderNumber"
                                    className="control-label"
                                  >
                                    Order Number:
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="OrderNumber"
                                    className="form-control"
                                    placeholder="Order Number"
                                    autoFocus
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="DistributorName"
                                    className="control-label"
                                  >
                                    Distributor Name:
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="DistributorName"
                                    className="form-control selectpicker"
                                    data-live-search="true"
                                    required
                                  >
                                    <option>Show All</option>
                                    <option defaultValue="1">Option 01</option>
                                    <option defaultValue="2">Option 02</option>
                                    <option defaultValue="3">Option 03</option>
                                    <option defaultValue="4">Option 04</option>
                                    <option defaultValue="4">Option 05</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="dateFrom"
                                    className="control-label"
                                  >
                                    Date From:
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="dateFrom"
                                    className="form-control datepicker"
                                    placeholder="Date From"
                                    autoFocus
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="dateTo"
                                    className="control-label"
                                  >
                                    Date To:
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="dateTo"
                                    className="form-control datepicker"
                                    placeholder="To Date"
                                    autoFocus
                                  />

                                  {/* <DatePicker
                                    className="form-control datepicker"
                                    type="text"
                                    name="dateTo"
                                    placeholder="Date From"
                                    autoFocus
                                    selected={date}
                                    onChange={handleChange}
                                  /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="OrderStatus"
                                    className="control-label"
                                  >
                                    Status:
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="OrderStatus"
                                    className="form-control"
                                    required
                                  >
                                    <option>Show All</option>
                                    <option defaultValue="1">Option 01</option>
                                    <option defaultValue="2">Option 02</option>
                                    <option defaultValue="3">Option 03</option>
                                    <option defaultValue="4">Option 04</option>
                                    <option defaultValue="4">Option 05</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <label
                                    htmlFor="username"
                                    className="control-label"
                                  >
                                    {" "}
                                  </label>
                                </div>
                                <div className="col-md-8 text-right">
                                  <button
                                    type="submit"
                                    className="btn btn-primary  btn-md"
                                  >
                                    <i className="fa-solid fa-magnifying-glass"></i>{" "}
                                    Search
                                  </button>
                                  &nbsp;
                                  <button
                                    type="reset"
                                    className="btn btn-danger btn-md"
                                  >
                                    <i className="fa-solid fa-rotate-right"></i>{" "}
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0 rounded-0 mb-3">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Order No</th>
                          <th>Order Date</th>
                          <th>Distributor Name</th>
                          <th>Order Qty</th>
                          <th>Order Amount</th>
                          <th>Invoice Qty</th>
                          <th>Invoice Amount</th>
                          <th style={{ minWidth: "120px" }}>Status</th>
                          <th>ERP Ref No.</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Order No</th>
                          <th>Order Date</th>
                          <th>Distributor Name</th>
                          <th>Order Qty</th>
                          <th>Order Amount</th>
                          <th>Invoice Qty</th>
                          <th>Invoice Amount</th>
                          <th>Status</th>
                          <th>ERP Ref No.</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200001
                            </a>
                          </td>
                          <td>08/02/2022</td>
                          <td>Gautam Foods</td>
                          <td>11</td>
                          <td>25257.25</td>
                          <td>5</td>
                          <td>25257.25</td>
                          <td>Waiting for approval</td>
                          <td>11021</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200002
                            </a>
                          </td>
                          <td>09/02/2022</td>
                          <td>Gautam Foods</td>
                          <td>15</td>
                          <td>14525.25</td>
                          <td>4</td>
                          <td>14525.25</td>
                          <td>Waiting for approval</td>
                          <td>00122</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200003
                            </a>
                          </td>
                          <td>10/02/2022</td>
                          <td>Gautam Foods</td>
                          <td>18</td>
                          <td>36521.25</td>
                          <td>1</td>
                          <td>36521.25</td>
                          <td>Waiting for approval</td>
                          <td>00123</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200004
                            </a>
                          </td>
                          <td>11/02/2022</td>
                          <td>Gautam Foods</td>
                          <td>22</td>
                          <td>12458.29</td>
                          <td>3</td>
                          <td>12458.29</td>
                          <td>Waiting for approval</td>
                          <td>00124</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200005
                            </a>
                          </td>
                          <td>12/02/2022</td>
                          <td>Gautam Foods</td>
                          <td>12</td>
                          <td>15624.32</td>
                          <td>6</td>
                          <td>15624.32</td>
                          <td>Waiting for approval</td>
                          <td>00125</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200006
                            </a>
                          </td>
                          <td>13/02/2022</td>
                          <td>SA Enterproses</td>
                          <td>15</td>
                          <td>19852.12</td>
                          <td>8</td>
                          <td>19852.12</td>
                          <td>Approved</td>
                          <td>00126</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200007
                            </a>
                          </td>
                          <td>14/02/2022</td>
                          <td>SA Enterproses</td>
                          <td>10</td>
                          <td>11256.26</td>
                          <td>2</td>
                          <td>11256.26</td>
                          <td>Approved</td>
                          <td>00127</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200008
                            </a>
                          </td>
                          <td>15/02/2022</td>
                          <td>SA Enterproses</td>
                          <td>25</td>
                          <td>17852.96</td>
                          <td>3</td>
                          <td>17852.96</td>
                          <td>Approved</td>
                          <td>00128</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200009
                            </a>
                          </td>
                          <td>16/02/2022</td>
                          <td>SA Enterproses</td>
                          <td>24</td>
                          <td>21458.11</td>
                          <td>5</td>
                          <td>21458.11</td>
                          <td>Approved</td>
                          <td>00129</td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="#vieworderpop"
                              data-toggle="modal"
                              data-tooltip="tooltip"
                              title="View Order"
                            >
                              2022200010
                            </a>
                          </td>
                          <td>17/02/2022</td>
                          <td>SA Enterproses</td>
                          <td>13</td>
                          <td>25412.36</td>
                          <td>7</td>
                          <td>25412.36</td>
                          <td>Approved</td>
                          <td>00130</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal bd-example-modal-lg fade"
        id="vieworderpop"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Line Items Details
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true">×</span>{" "}
              </button>
            </div>
            <div className="modal-body">
              <div className="row bg-info-light m-0">
                <div className="col-md-4">
                  <label className="font-weight-bold my-2">Order No:</label>
                  202220000214{" "}
                </div>
                <div className="col-md-4">
                  <label className="font-weight-bold my-2">Order Date:</label>
                  08/02/2022{" "}
                </div>
                <div className="col-md-4">
                  <label className="font-weight-bold my-2">Distributor:</label>
                  Gautam Foods{" "}
                </div>
              </div>
              <div className="table-responsive">
                <table
                  width="100%"
                  border="0"
                  cellSpacing="0"
                  cellPadding="0"
                  className="table tableDash table-striped no-border linkUnd table-hover"
                  id="dataTables1"
                >
                  <thead>
                    <tr>
                      <th style={{ minWidth: "100px" }}>Parent Item Code</th>
                      <th style={{ minWidth: "100px" }}>Item Code</th>
                      <th style={{ minWidth: "280px" }}>Item Desc</th>
                      <th>Item Price</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                      <th>Order Amount</th>
                      <th>Invoice Qty</th>
                      <th>Invoice Amount</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th className="text-danger font-weight-bold">Total</th>
                      <th className="text-danger font-weight-bold">555.00</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>PFG-8111007</td>
                      <td>FG-411228</td>
                      <td>Weikfield-Pasta-Penne-Pouch-24x500gm</td>
                      <td className="p-1">100.50</td>
                      <td>
                        <input
                          type="number"
                          className="qty-ctl"
                          step="1"
                          defaultValue="3"
                        />
                      </td>
                      <td>Case</td>
                      <td>100.50</td>
                      <td>0.00</td>
                      <td>0.00</td>
                    </tr>
                    <tr>
                      <td>PFG-8111007</td>
                      <td>FG-411228</td>
                      <td>Weikfield Pasta Penne Pouch 24x400gm</td>
                      <td className="p-1">100.50</td>
                      <td>
                        <input
                          type="number"
                          className="qty-ctl"
                          step="1"
                          defaultValue="3"
                        />
                      </td>
                      <td>Case</td>
                      <td>100.50</td>
                      <td>0.00</td>
                      <td>0.00</td>
                    </tr>
                    <tr>
                      <td>PFG-8111007</td>
                      <td>FG-411228</td>
                      <td>Weikfield Pasta Penne Pouch 24x200gm</td>
                      <td className="p-1">100.50</td>
                      <td>
                        <input
                          type="number"
                          className="qty-ctl"
                          step="1"
                          defaultValue="3"
                        />
                      </td>
                      <td>Case</td>
                      <td>100.50</td>
                      <td>0.00</td>
                      <td>0.00</td>
                    </tr>
                    <tr>
                      <td>PFG-8111007</td>
                      <td>FG-411228</td>
                      <td>Weikfield Pasta Penne Pouch 24x100gm</td>
                      <td className="p-1">100.50</td>
                      <td>
                        <input
                          type="number"
                          className="qty-ctl"
                          step="1"
                          defaultValue="3"
                        />
                      </td>
                      <td>Case</td>
                      <td>100.50</td>
                      <td>0.00</td>
                      <td>0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button type="submit" className="btn btn-primary  btn-md">
                <i className="fa-solid fa-check mr-2"></i> Accept
              </button>
              <button type="reset" className="btn btn-danger btn-md">
                <i className="fa-solid fa-xmark mr-2"></i> Reject
              </button>
              <button
                type="submit"
                className="btn btn-primary  btn-md"
                onClick={() => alert("window.location='PlaceOrder.html'")}
              >
                <i className="fa-solid fa-pen mr-2"></i> Edit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrder;
