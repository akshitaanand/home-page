import React, { Component } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import history from "./../history";
import "./Home.css";
import ReactPlayer from "react-player";
import CarouselSlider from "react-carousel-slider";

class Home extends Component {
  
let data = [
  {

    imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/pgCzueK.jpg"
  },
  {

    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/L75otV6.jpg"
  },
  {
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
  }
];

let buttonSetting = {
  placeOn: "middle-inside"
,hoverEvent: true
};

let sliderBoxStyle = {
  height: "250px"
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let manner = {
autoSliding: {interval: "4s"}
, duration: "0.2s"
};

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
          <div> 
            <CarouselSlider
              slideItems={data}
              manner={manner}
              buttonSetting={buttonSetting}
              sliderBoxStyle={sliderBoxStyle}
              itemsStyle={itemsStyle}
             />
          </div>
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
