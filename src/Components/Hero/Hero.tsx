import React from 'react';
import { Carousel } from 'react-bootstrap';
// styles
import './Hero.css';

type HeroProps = {
    slide1: string;
    slide2: string;
    children: React.ReactNode;
}

const Hero = ({ slide1, slide2, children }: HeroProps) => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className={slide1} src={slide1} alt="" /> {children}
        </Carousel.Item>
        <Carousel.Item>
          <img className={slide2} src={slide2} alt="" /> {children}
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Hero;