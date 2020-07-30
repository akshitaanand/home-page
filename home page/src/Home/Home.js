import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "./../history";
import "./Home.css";
import ReactPlayer from "react-player";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1 className="align">Welcome to ProductHub</h1>
          <div class="container">
            <h4 class="leftHeader">About ProductHub</h4>
            <h4 class="rightHeader">Introduction</h4>
          </div>
          <div class="container">
            <ReactPlayer
              className="space2"
              width="500px"
              height="320px"
              url="https://www.youtube.com/watch?v=aS-LUW5Jim0"
            />
            <p className="space3">(talk about producthub here)</p>
          </div>
        </div>
        <div className="first">
          <h3>Sliding Images</h3>
        </div>
        <div className="second">
          <h3>Featured Products</h3>
        </div>
        <div className="third">
          <h3>What makes us different?</h3>
        </div>
        <div className="fourth">
          <h3>Featured Article Cards</h3>
        </div>
        <div className="fifth">
          <h3>Video about our process</h3>
        </div>
        <div className="sixth">
          <h3>Featured Projects</h3>
        </div>
      </div>
    );
  }
}
export default Home;
