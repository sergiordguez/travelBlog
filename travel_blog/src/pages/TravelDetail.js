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
import photo61 from "../assets/photos/interrail2022/IMG_3463.JPG";
import photo62 from "../assets/photos/interrail2022/IMG_3935.JPG";

import portada2023 from "../assets/photos/interrail2023/portada2023.jpg";
import photo18 from "../assets/photos/interrail2023/26E1398A-2DCD-4D70-AF28-FABF635F88B8.JPG";
import photo19 from "../assets/photos/interrail2023/6730326B-77B1-492B-8E05-3F503F7CED1C.JPG";
import photo20 from "../assets/photos/interrail2023/6B97D44F-6FAC-47F2-9B14-B3C91E670506.JPG";
import photo21 from "../assets/photos/interrail2023/9405197E-52A8-42FC-A55A-9BCC2E36914F.JPG";
import photo22 from "../assets/photos/interrail2023/ADAF5C2B-C2D4-45E8-961F-28C988C59A7D.JPG";
import photo23 from "../assets/photos/interrail2023/BD9AF003-220D-49F7-BB58-C1049D9A9546.JPG";
import photo24 from "../assets/photos/interrail2023/IMG_0019.JPG";
import photo25 from "../assets/photos/interrail2023/IMG_0032.JPG";
import photo26 from "../assets/photos/interrail2023/IMG_0147.JPG";
import photo27 from "../assets/photos/interrail2023/IMG_0192.JPG";
import photo28 from "../assets/photos/interrail2023/IMG_0193.JPG";
import photo29 from "../assets/photos/interrail2023/IMG_0207.JPG";
import photo30 from "../assets/photos/interrail2023/IMG_0220.JPG";
import photo31 from "../assets/photos/interrail2023/IMG_0244.JPG";
import photo32 from "../assets/photos/interrail2023/IMG_0388.JPG";
import photo33 from "../assets/photos/interrail2023/IMG_0446.JPG";
import photo34 from "../assets/photos/interrail2023/IMG_0464.JPG";
import photo35 from "../assets/photos/interrail2023/IMG_0518.JPG";
import photo36 from "../assets/photos/interrail2023/IMG_0632.JPG";
import photo37 from "../assets/photos/interrail2023/IMG_0651.JPG";
import photo38 from "../assets/photos/interrail2023/IMG_0653.JPG";
import photo39 from "../assets/photos/interrail2023/IMG_9871.JPG";
import photo40 from "../assets/photos/interrail2023/bd4cda06-44bd-4f01-af92-22d50f37b623.JPG";

import portadaIslandia from "../assets/photos/islandia/portadaIslandia.jpg";
import photo41 from "../assets/photos/islandia/IMG_3717.HEIC";
import photo42 from "../assets/photos/islandia/IMG_3728.HEIC";
import photo43 from "../assets/photos/islandia/IMG_3769.HEIC";
import photo44 from "../assets/photos/islandia/IMG_3780.HEIC";
import photo45 from "../assets/photos/islandia/IMG_3796.JPG";
import photo46 from "../assets/photos/islandia/IMG_3797.JPG";
import photo47 from "../assets/photos/islandia/IMG_3808.HEIC";
import photo48 from "../assets/photos/islandia/IMG_3839.HEIC";
import photo49 from "../assets/photos/islandia/IMG_3866.HEIC";
import photo50 from "../assets/photos/islandia/IMG_3923.HEIC";
import photo51 from "../assets/photos/islandia/IMG_4019.HEIC";
import photo52 from "../assets/photos/islandia/IMG_4027.HEIC";
import photo53 from "../assets/photos/islandia/IMG_4049.HEIC";
import photo54 from "../assets/photos/islandia/IMG_4051.HEIC";
import photo55 from "../assets/photos/islandia/IMG_4174.HEIC";
import photo56 from "../assets/photos/islandia/IMG_7338.HEIC";
import photo57 from "../assets/photos/islandia/IMG_7376.HEIC";
import photo58 from "../assets/photos/islandia/IMG_3899.HEIC";
import photo59 from "../assets/photos/islandia/IMG_7153.HEIC";
import photo60 from "../assets/photos/islandia/IMG_7194.HEIC";

const travelData = {
  "1": {
    title: "Interrail 2022",
    startDate: "4 de Julio, 2022",
    endDate: "16 de Julio, 2022",
    mapImage: portada2022,
    media: [photo1, photo2, photo3, photo4, photo5, photo7, photo8,
            photo9, photo10, photo11, photo12, photo13, photo14, photo15,
            photo16, photo17, photo61, photo62
    ].sort(() => Math.random() - 0.5),
  },
  "2": {
    title: "Interrail 2023",
    startDate: "6 de Julio, 2023",
    endDate: "19 de Julio, 2023",
    mapImage: portada2023,
    media: [photo18, photo19, photo20, photo21, photo22, photo23, photo24,
            photo25, photo26, photo27, photo28, photo29, photo30, photo31,
            photo32, photo33, photo34, photo35, photo36, photo37, photo38,
            photo39, photo40
    ].sort(() => Math.random() - 0.5),
  },
  "3": {
    title: "Islandia",
    startDate: "10 de Julio, 2024",
    endDate: "18 de Julio, 2024",
    mapImage: portadaIslandia,
    media: [photo44, photo42, photo43, photo41, photo45, photo46, photo47,
            photo48, photo49, photo50, photo51, photo52, photo53, photo54,
            photo55, photo56, photo57, photo58, photo59, photo60
    ].sort(() => Math.random() - 0.5),
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