import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/TravelPage.css";

import portada2022 from "../assets/photos/interrail2022/portada2022.jpg";
import photo1 from "../assets/photos/interrail2022/03e394b7-6801-49ab-94e2-fd62fe58dd5b.JPG";
import photo2 from "../assets/photos/interrail2022/IMG_3593.JPG";
import photo3 from "../assets/photos/interrail2022/IMG_3804.JPG";
import photo4 from "../assets/photos/interrail2022/IMG_3810.JPG";
import photo5 from "../assets/photos/interrail2022/IMG_3957.JPG";
import photo7 from "../assets/photos/interrail2022/IMG_4074.JPG";
import photo8 from "../assets/photos/interrail2022/IMG_4097.JPG";
import photo9 from "../assets/photos/interrail2022/A3A8C826-D70F-45B7-9220-B51507680333.JPG";
import photo10 from "../assets/photos/interrail2022/E7CED1BF-D13F-4AC2-9452-BD868F9C81A1.JPG";
import photo11 from "../assets/photos/interrail2022/FA8029A8-4657-4E2B-A09E-B9FB80CBFC43.JPG";
import photo12 from "../assets/photos/interrail2022/IMG_3417.JPG";
import photo13 from "../assets/photos/interrail2022/IMG_3472.JPG";
import photo14 from "../assets/photos/interrail2022/IMG_3568.JPG";
import photo15 from "../assets/photos/interrail2022/IMG_3575.JPG";
import photo16 from "../assets/photos/interrail2022/IMG_3672.JPG";
import photo17 from "../assets/photos/interrail2022/IMG_4060.JPG";

import portada2023 from "../assets/photos/interrail2023/portada2023.jpg";

import portadaIslandia from "../assets/photos/islandia/portadaIslandia.jpg";

const travelData = {
  "1": {
    title: "Interrail 2022",
    startDate: "4 de Julio, 2022",
    endDate: "16 de Julio, 2022",
    mapImage: portada2022,
    media: [photo1, photo2, photo3, photo4, photo5, photo7, photo8,
            photo9, photo10, photo11, photo12, photo13, photo14, photo15,
            photo16, photo17
    ],
  },
  "2": {
    title: "Interrail 2023",
    startDate: "6 de Julio, 2023",
    endDate: "19 de Julio, 2023",
    mapImage: portada2023,
    media: [],
  },
  "3": {
    title: "Islandia",
    startDate: "5 de Abril, 2023",
    endDate: "18 de Abril, 2023",
    mapImage: portadaIslandia,
    media: [],
  },
};

const TravelPage = () => {
  const { id } = useParams();
  const travel = travelData[id];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travel.media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? travel.media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="travel-page">
      <div
        className="travel-info"
        style={{
          backgroundImage: `url(${travel.mapImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className="overlay"></div> {}
        <div className="info-text">
          <h1>{travel.title}</h1>
          <p>📅 {travel.startDate} - {travel.endDate}</p>
        </div>
      </div>
      <div className="slideshow-container">
        <button className="prev" onClick={prevSlide}>❮</button>
        <div className="slide-wrapper">
          <img
            src={travel.media[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="slide-image"
            style={{ width: "900px", height: "650px", objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default TravelPage;