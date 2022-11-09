import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pruebaImg from './img/prueba.webp'
import pruebaImg1 from './img/prueba2.webp'
import pruebaImg2 from './img/prueba3.webp'
import './styles.css'


const CarouselOferts=()=> {
  return (
    <Carousel className='Carousel'>
      <Carousel.Item className='item'>
        <img
          className="img"
          src={pruebaImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={pruebaImg1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src={pruebaImg2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselOferts;