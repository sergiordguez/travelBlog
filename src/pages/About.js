import React, { useState, useEffect } from "react";

import photo2 from "../assets/photos/about/IMG_3985.JPG";
import photo3 from "../assets/photos/about/IMG_4030.jpg";
import photo5 from "../assets/photos/about/IMG_4116.JPG";
import photo6 from "../assets/photos/about/IMG_6948.JPG";
import photo7 from "../assets/photos/about/IMG_7749.jpg";

import "../styles/AboutUs.css";

const images = [photo2, photo3, photo5, photo6, photo7].sort(() => Math.random() - 0.5);

const AboutUs = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); 

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
            <div className="social-links">
                <a href="https://www.tiktok.com/@pauuuli22" target="_blank" rel="noopener noreferrer">
                TikTok
                </a>
                <a href="https://www.instagram.com/sergiomoreda7/?hl=es" target="_blank" rel="noopener noreferrer">
                Instagram
                </a>
            </div>
        </div>
    );
    };

export default AboutUs;
  
