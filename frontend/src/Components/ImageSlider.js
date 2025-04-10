import React from "react";
import "./ImageSlider.css";
import { Carousel } from "react-bootstrap";

function ImageSlider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://external-preview.redd.it/G1OGwrLw8_7mgsCUrXc8WbUsSVPJ7_ZhsgpVra4lPnI.jpg?width=1080&crop=smart&auto=webp&s=7396fefc51f0865c11a2adc98ba74d4bf3cc3492"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption">
            <p>
              "Libraries store the energy that fuels the imagination. They open
              up windows to the world and inspire us to explore and achieve and
              contribute to improving our quality of life. Libraries change
              lives for the better"
            </p>
            <h3>– Sidney Sheldon</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp12420093.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption">
            <p>
              “The only thing you absolutely have to know, is the location of
              the library”
            </p>
            <h3>– Albert Einstein</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1701677056779-2cd431de1e6c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
          <Carousel.Caption className="custom-caption">
            <p>
              “It turned out to be near impossible to stand in a library and not
              want to pull things from the shelves”
            </p>
            <h3>– Matt Haig</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageSlider;
