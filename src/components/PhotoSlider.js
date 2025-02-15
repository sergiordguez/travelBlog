import React, { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

import photo from "../assets/photos/interrail2022/IMG_3713.JPG";
import photo2 from "../assets/photos/interrail2022/IMG_3593.JPG";
import photo4 from "../assets/photos/interrail2022/IMG_3810.JPG";
import photo5 from "../assets/photos/interrail2022/IMG_3957.JPG";
import photo6 from "../assets/photos/interrail2023/IMG_0192.JPG";
import photo7 from "../assets/photos/interrail2023/IMG_0019.JPG";
import photo8 from "../assets/photos/interrail2023/IMG_0207.JPG";
import photo9 from "../assets/photos/interrail2023/IMG_0446.JPG";
import photo59 from "../assets/photos/islandia/IMG_7153.HEIC";
import photo54 from "../assets/photos/islandia/IMG_4051.HEIC";
import photo48 from "../assets/photos/islandia/IMG_3839.HEIC";
import photo52 from "../assets/photos/islandia/IMG_4027.HEIC";
import photo44 from "../assets/photos/islandia/IMG_3780.HEIC";
import photo56 from "../assets/photos/islandia/IMG_7338.HEIC";
import photo50 from "../assets/photos/islandia/IMG_3923.HEIC";

const images = [photo, photo2, photo4, photo5, photo6, photo7, photo8,
    photo9, photo59, photo54, photo48, photo52, photo44, photo56, photo50
].sort(() => Math.random() - 0.5);

const PhotoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

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
        <p>Nuestros mejores recuerdos recopilados en una web</p>

        <Link to="/travel/1">Interrail 2022</Link>
        <span>  </span>
        <Link to="/travel/2">Interrail 2023</Link>
        <span>  </span>
        <Link to="/travel/3">Islandia</Link>
      </div>
    </div>
  );
};

export default PhotoSlider;
