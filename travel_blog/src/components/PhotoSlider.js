import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

import photo1 from "../assets/photos/interrail2022/03e394b7-6801-49ab-94e2-fd62fe58dd5b.JPG";
import photo2 from "../assets/photos/interrail2022/IMG_3593.JPG";
import photo3 from "../assets/photos/interrail2022/IMG_3804.JPG";
import photo4 from "../assets/photos/interrail2022/IMG_3810.JPG";
import photo5 from "../assets/photos/interrail2022/IMG_3957.JPG";

const images = [photo1, photo2, photo3, photo4, photo5];

const PhotoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  const springs = useSprings(
    images.length,
    images.map((_, i) => ({
      opacity: i === index ? 1 : 0,
      transform: `scale(${i === index ? 1 : 1.1})`,
      config: { duration: 1000 },
    }))
  );

  return (
    <div className="photo-slider">
      {springs.map((style, i) => (
        <animated.img
          key={i}
          src={images[i]}
          style={{ ...style }}
          alt={`Slide ${i}`}
        />
      ))}

      <div className="text-content">
        <h1>Explorando el Mundo</h1>
        <p>Descubre nuestros mejores recuerdos en fotos y videos</p>

        <Link to="/travel/1">Interrail 2022</Link>
        <span> | </span>
        <Link to="/travel/2">Interrail 2023</Link>
        <span> | </span>
        <Link to="/travel/3">Islandia</Link>
      </div>
    </div>
  );
};

export default PhotoSlider;
