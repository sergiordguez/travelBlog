import React, { useState, useEffect } from "react";

import photo3 from "../assets/photos/about/IMG_4030.jpg";
import photo4 from "../assets/photos/about/IMG_4041.JPG";
import photo5 from "../assets/photos/about/IMG_4116.JPG";
import photo6 from "../assets/photos/about/IMG_6948.JPG";
import photo7 from "../assets/photos/about/IMG_7749.jpg";

import "../styles/AboutUs.css";

const images = [photo3, photo4, photo5, photo6, photo7].sort(() => Math.random() - 0.5);

const AboutUs = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia cada 10 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="about-us-container">
        <h1 className="about-title">Sobre Nosotros</h1>
        <p className="about-text">
            Somos Paula y Sergio y nos encanta viajar. En este blog compartimos nuestras experiencias para que puedas disfrutar de tus viajes tanto como nosotros.
        </p>
        <p className="about-text">
            Puedes seguirnos en nuestras cuentas de instagram y tiktok para ver más fotos y vídeos de nuestros viajes.
        </p>
        <div className="about-gallery" style={{ width: "40%", margin: "0 auto" }}>
            <img src={images[index]} alt="Viaje" className="about-photo" style={{ width: "100%", height: "auto", borderRadius: "10px" }} />
        </div>
        </div>
    );
    };

export default AboutUs;
  
