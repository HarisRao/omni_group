import React from "react";
import { BrowserRouter as Router,} from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Middle from "./Middle";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <div className="fluid-container">
        <Router>
          <Nav></Nav>
        </Router>
        <Middle></Middle>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
