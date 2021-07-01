import React from "react";
import "./App.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-5 ml-5 mr-md-none mr-4">
            <span className="text-white h1 d-block" id="span_color">
              Don't Miss Out
            </span>
            <span className="text-white h3 d-block">
              Sign up for the latest news $ort
            </span>
            <form className="mt-4">
              <div class="form-group">
                <label for="exampleInputEmail1" className="text-white h6">
                  Email address*
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                ></input>
                <button
                  type="submit"
                  class="btn btn-outline-light mt-3 btn-lg btn-block"
                >
                  SIGN UP
                </button>
                <small id="emailHelp" class="form-text text-white mt-2">
                  This site is intended for Spanish customers.By signing up you
                  understand and agree that your data is collected and used
                  subject to our Spanish{" "}
                  <span id="underline">Privacy Policy</span> and{" "}
                  <span id="underline">Terms of Use</span>.
                </small>
              </div>
            </form>
            <div className="ml-3">
              <span class="fa-stack ml-2">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-twitter fa-stack-1x"></i>
              </span>
              <span className="fa-stack ml-2">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-facebook-f fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-2">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-instagram fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-2">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-linkedin fa-stack-1x"></i>
              </span>

              <span className="fa-stack ml-2">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-pinterest-p fa-stack-1x"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-2 col-md-4 mt-5 ml-md-5 ml-5">
            <p className="h5 text-white" style={{ fontSize: "25px" }}>
              COMPANY
            </p>
            <span className="text-white lead d-block">About Us</span>
            <span className="text-white lead d-block">Team</span>
            <span className="text-white lead d-block">Financing</span>
            <span className="text-white lead d-block">Development</span>
          </div>
          <div className="col-lg-3 col-md-4 mt-5 ml-sm-none ml-5">
            <p className="h5 text-white" style={{ fontSize: "25px" }}>
              CUSTOMER SERVICE
            </p>
            <span className="text-white lead d-block">My Wallet</span>
            <span className="text-white lead d-block">Marketplace</span>
            <span className="text-white lead d-block">$ort</span>
            <span className="text-white lead d-block">Contact Us</span>
          </div>
        </div>

        <hr className="footer"></hr>
        <div className="row">
          <div className="col-lg-6 ">
            <div className="text-white pb-4 ml-5">
              <span>SETMAP</span>
              <span className="ml-3 ">PRIVACY</span>
              <span className="ml-3 ">TERMS</span>
              <span className="ml-3 ">USER CONTENTS</span>
              <span className="ml-3 ">PERMISSION TERMS</span>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-3 mr-auto ml-md-5 ">
            <p className="text-white ml-md-none ml-4">
              Copyright @ 2021 OMNI GROUP &nbsp;{" "}
              <span id="span_color">Back to top</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
