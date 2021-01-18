import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
export default class carousel extends Component {
  render() {
    let myStyle = {
      color: "#7D7D7D",
    };
    return (
      <div>
        <Carousel style={{ height: "500px", width: "100%" }}>
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704"
              alt="First slide"
              style={{ height: "400px" }}
            />
            <Carousel.Caption className="mt-5">
              <h3 style={myStyle}>Iphone Models</h3>
              <p style={myStyle}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
              alt="Third slide"
              style={{ height: "400px" }}
            />

            <Carousel.Caption className="mt-5">
              <h3 style={myStyle}>MacBook</h3>
              <p style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto"
              src="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg"
              alt="Third slide"
              style={{ height: "400px" }}
            />

            <Carousel.Caption className="mt-5">
              <h3 style={myStyle}>AirPods Pro</h3>
              <p style={myStyle}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
