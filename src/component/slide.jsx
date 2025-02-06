// src/Slideshow.jsx
import React, { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../assets/card1.jpg';
import donete from '../assets/donete.jpg';
import slide from '../assets/slide.jpg';

const items = [
  {
    src: card1,
    altText: 'Slide 1',
    caption: 'Your generosity can change lives. Donate today and make a difference!',
  },
  {
    src: donete,
    altText: 'Slide 2',
    caption: 'Join us in spreading hope. Every contribution counts—lets create a brighter future together!',
  },
  {
    src: slide,
    altText: 'Slide 3',
    caption: 'Together, we can turn compassion into action. Support our cause with your donation',
  }
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [activeIndex]);

  const slides = items.map((item) => (
    <CarouselItem key={item.src}>
      <img
        src={item.src}
        alt={item.altText}
        className="d-block w-100"
        style={{ height: '600px', objectFit: 'cover' }} // Ensure all images have the same height
      />
      <div className="carousel-caption d-none d-md-block " >
        <h5>{item.caption}</h5>
      </div>
    </CarouselItem>
  ));

  return (
    <div style={{ width: '100%', maxWidth: '1400px', height: '600px', margin: '0 auto', overflow: 'hidden', marginTop: '1px' }}>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{ height: '100%' }}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl direction="prev" onClickHandler={previous} />
        <CarouselControl direction="next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default Slideshow;