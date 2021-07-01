import React from "react";
import "./App.css";
import user from "./user.png";
import LowerMiddle from "./lowermiddle";
class Middle extends React.Component {
  render() {
    return (
      <div id="bg">
        <div className="row">
          <div className="col-lg-1 col-md-2 col-2"></div>
          <div className="col-lg-1 col-md-2 col-10 mt-4">
            <img src={user} width="100" height="100"></img>
          </div>
          <div className="col-md-2 col-4 mt-5 h5 ml-5">
            Wallet Address <span className="h5">0x733d0dade1c31...e694</span>
          </div>
          <div className="col-md-3"></div>
          <div className="col-lg-4 mb-1">
            <div className="row justify-content-around">
              <div
                className="col-lg-4 col-8 mt-4 h5 text-center py-4"
                id="border"
              >
                Claimable NFTs 8
              </div>
              <div
                className="col-lg-6 col-8 mt-4 h5 text-center py-4"
                id="border"
              >
                Total Invested Amount $1,115,000
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <hr></hr>
        <LowerMiddle></LowerMiddle>
      </div>
    );
  }
}

export default Middle;
