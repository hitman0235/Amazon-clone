import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../img/carousel/1.jpg"
import img2 from "../img/carousel/2.jpg"
import img3 from "../img/carousel/3.jpg"

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          {/* <img loading="lazy" src="image/1.jpg" alt="" /> */}
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          {/* <img loading="lazy" src="image/2.jpg" alt="" /> */}
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          {/* <img loading="lazy" src="image/3.jpg" alt="" /> */}
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner