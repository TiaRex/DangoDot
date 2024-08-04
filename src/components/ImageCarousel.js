import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ImageCarouselPic1 from  "../assets/DemonSlayerHashiraArc.jpg";
import ImageCarouselPic2 from  "../assets/KaijuNo8.jpg";
import ImageCarouselPic3 from  "../assets/MyHeroAcademia.jpg";
import ImageCarouselPic4 from  "../assets/SoloLeveling.jpg"

function ImageCarousel() {
  return (
    <div className= "carousel.container"> 
        <Carousel fade>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic1"
            src={ImageCarouselPic1}
            alt="First slide" 
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic2"
            src={ImageCarouselPic2}
            alt="Second slide" 
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic3"
            src={ImageCarouselPic3}
            alt="Third slide" 
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic4"
            src={ImageCarouselPic4}
            alt="Fourth slide" 
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></div>
  )
}

export default ImageCarousel