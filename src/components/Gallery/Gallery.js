import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Gallery = () => {
  const styles = {
    paddingTop: window.innerWidth > 600 ? "130px" : "0",
  };

  const violet_portfolio = [
    {
      src: "gallery_2.jpeg",
      alt: "gallery_2",
    },
    {
      src: "gallery_3.jpeg",
      alt: "gallery_3",
    },
    {
      src: "gallery_6.jpeg",
      alt: "gallery_6",
    },
    {
      src: "gallery_7.jpeg",
      alt: "gallery_7",
    },
    {
      src: "gallery_10.jpeg",
      alt: "gallery_10",
    },
    {
      src: "gallery_11.jpeg",
      alt: "gallery_11",
    },
    {
      src: "gallery_14.jpeg",
      alt: "gallery_14",
    },
    {
      src: "gallery_15.jpeg",
      alt: "gallery_15",
    },
  ];

  const ray_portfolio = [
    {
      src: "gallery_1.jpeg",
      alt: "gallery_1",
    },
    {
      src: "gallery_4.jpeg",
      alt: "gallery_4",
    },
    {
      src: "gallery_5.jpeg",
      alt: "gallery_5",
    },
    {
      src: "gallery_8.jpeg",
      alt: "gallery_8",
    },
    {
      src: "gallery_9.jpeg",
      alt: "gallery_9",
    },
    {
      src: "gallery_12.jpeg",
      alt: "gallery_12",
    },
    {
      src: "gallery_13.jpeg",
      alt: "gallery_13",
    },
    {
      src: "gallery_16.jpeg",
      alt: "gallery_16",
    },
  ];

  return (
    <div style={styles} id="gallery">
      <div className="galleryContainer">
        <AnimatedOnScroll
          animationIn="fadeInRight"
          style={{
            animationDuration: "2000ms",
          }}
        >
          <h2
            id="gallery_h2"
            style={{
              textDecoration: "underline 2px rgb(9, 141, 102)",
              textUnderlineOffset: "15px",
            }}
          >
            GALLERY
          </h2>
        </AnimatedOnScroll>
        {window.innerWidth > 600 ? (
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="carouselContainer">
                <div className="sideParts">
                  <img
                    className="gallerySideImages"
                    src="gallery_1.jpeg"
                    alt="gallery_1"
                  />
                  <div className="firstPartRectangle"></div>
                </div>
                <div className="line_1"></div>
                <div className="secondPart">
                  <img
                    className="galleryMiddleImages"
                    src="gallery_2.jpeg"
                    alt="gallery_2"
                  />
                  <img
                    className="galleryMiddleImages"
                    src="gallery_3.jpeg"
                    alt="gallery_3"
                  />
                </div>
                <div className="line_2"></div>
                <div className="sideParts">
                  <div className="thirdPartRectangle"></div>
                  <img
                    className="gallerySideImages lastSideImage"
                    src="gallery_4.jpeg"
                    alt="gallery_4"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselContainer">
                <div className="sideParts">
                  <img
                    className="gallerySideImages"
                    src="gallery_5.jpeg"
                    alt="gallery_5"
                  />
                  <div className="firstPartRectangle"></div>
                </div>
                <div className="line_1"></div>
                <div className="secondPart">
                  <img
                    className="galleryMiddleImages"
                    src="gallery_6.jpeg"
                    alt="gallery_6"
                  />
                  <img
                    className="galleryMiddleImages"
                    src="gallery_7.jpeg"
                    alt="gallery_7"
                  />
                </div>
                <div className="line_2"></div>
                <div className="sideParts">
                  <div className="thirdPartRectangle"></div>
                  <img
                    className="gallerySideImages lastSideImage"
                    src="gallery_8.jpeg"
                    alt="gallery_8"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselContainer">
                <div className="sideParts">
                  <img
                    className="gallerySideImages"
                    src="gallery_9.jpeg"
                    alt="gallery_9"
                  />
                  <div className="firstPartRectangle"></div>
                </div>
                <div className="line_1"></div>
                <div className="secondPart">
                  <img
                    className="galleryMiddleImages"
                    src="gallery_10.jpeg"
                    alt="gallery_10"
                  />
                  <img
                    className="galleryMiddleImages"
                    src="gallery_11.jpeg"
                    alt="gallery_11"
                  />
                </div>
                <div className="line_2"></div>
                <div className="sideParts">
                  <div className="thirdPartRectangle"></div>
                  <img
                    className="gallerySideImages lastSideImage"
                    src="gallery_12.jpeg"
                    alt="gallery_12"
                  />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carouselContainer">
                <div className="sideParts">
                  <img
                    className="gallerySideImages"
                    src="gallery_13.jpeg"
                    alt="gallery_13"
                  />
                  <div className="firstPartRectangle"></div>
                </div>
                <div className="line_1"></div>
                <div className="secondPart">
                  <img
                    className="galleryMiddleImages"
                    src="gallery_14.jpeg"
                    alt="gallery_14"
                  />
                  <img
                    className="galleryMiddleImages"
                    src="gallery_15.jpeg"
                    alt="gallery_15"
                  />
                </div>
                <div className="line_2"></div>
                <div className="sideParts">
                  <div className="thirdPartRectangle"></div>
                  <img
                    className="gallerySideImages lastSideImage"
                    src="gallery_16.jpeg"
                    alt="gallery_16"
                  />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        ) : (
          <div className="carouselsContainer">
            <Carousel
              indicators={true}
              slide={false}
              controls={false}
              touch={true}
            >
              {ray_portfolio.map(({ src, alt }, index) => (
                <Carousel.Item key={index}>
                  <img className="galleryImage" src={src} alt={alt} />
                </Carousel.Item>
              ))}
            </Carousel>
            <Carousel
              indicators={true}
              slide={false}
              controls={false}
              touch={true}
            >
              {violet_portfolio.map(({ src, alt }, index) => (
                <Carousel.Item key={index}>
                  <img className="galleryImage" src={src} alt={alt} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
