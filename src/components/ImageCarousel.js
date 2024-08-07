import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/imagecarousel.css';
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
              <h3>Demon Slayer</h3>
              <p>Hashira Act (Season 4) has finished. Binge watch today!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic2"
            src={ImageCarouselPic2}
            alt="Second slide" 
            />
            <Carousel.Caption>
              <h3>Kaiiju No. 8</h3>
              <p>One of the most popular animes of the year! Available to steam now!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height:'30vh'}}
            className="ImageCarouselPic3"
            src={ImageCarouselPic3}
            alt="Third slide" 
            />
            <Carousel.Caption>
              <h3>My Hero Academia</h3>
              <p>
                Season 7 is out now. Stream today!
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
              <h3>Solo Leveling</h3>
              <p>Season Two expected to be released in Fall 2024</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel></div>
  )
}

export default ImageCarousel