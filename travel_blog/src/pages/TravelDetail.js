import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/TravelPage.css";

import portada2022 from "../assets/photos/interrail2022/portada2022.jpg";
import photo1 from "../assets/photos/interrail2022/03e394b7-6801-49ab-94e2-fd62fe58dd5b.JPG";
import photo2 from "../assets/photos/interrail2022/IMG_3593.JPG";
import photo3 from "../assets/photos/interrail2022/IMG_3804.JPG";
import photo4 from "../assets/photos/interrail2022/IMG_3810.JPG";
import photo5 from "../assets/photos/interrail2022/IMG_3957.JPG";
import photo6 from "../assets/photos/interrail2022/IMG_4041.JPG";
import photo7 from "../assets/photos/interrail2022/IMG_4074.JPG";
import photo8 from "../assets/photos/interrail2022/IMG_4097.JPG";

import portada2023 from "../assets/photos/interrail2023/portada2023.jpg";

const travelData = {
  "1": {
    title: "Interrail 2022",
    startDate: "4 de Julio, 2022",
    endDate: "16 de Julio, 2022",
    mapImage: portada2022,
    media: [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8],
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
    mapImage: "/assets/maps/japan-route.jpg",
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