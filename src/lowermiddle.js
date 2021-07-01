import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

import "./App.css";
class LowerMiddle extends React.Component {
  render() {
    return (
      <div>
        <div className="row ml-1 mt-5">
          <div className="col-lg-2 col-12 h5 text-center mt-md-4">
            <p className="py-1">Sample Tab &nbsp;1</p>
            <p className="py-1">Sample Tab 2</p>
            <p className="py-1">Sample Tab 3</p>
            <p className="py-1">Sample Tab 4</p>
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img1} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$1500</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">12%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$85,000</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img2} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$1200</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">62%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$240,000</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img3} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$9000</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">45%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$150,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row ml-1 mt-2 pb-5">
          <div className="col-lg-2 mt-md-4"></div>
          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img6} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$1200</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">62%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$240,000</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img5} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$1500</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">12%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$85,000</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-12 text-center mt-md-4">
            <div class="card p-3" style={{ width: "" }}>
              <h6 class="card-title">Spectacular new built house..</h6>
              <img class="card-img-top" src={img6} alt="Card image cap"></img>
              <h6 class="card-subtitle text-white text-center mt-3 p-2">
                Claim NFT
              </h6>
              <div class="card-text mt-4 d-flex justify-content-between">
                Rent Amount: <span id="span_weight">$9000</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Percentage Holder: <span id="span_weight">9%</span>
              </div>
              <div class="card-text mt-1 d-flex justify-content-between">
                Invested Amount: <span id="span_weight">$55,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LowerMiddle;
