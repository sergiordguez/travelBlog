import React from "react";
import { useParams } from "react-router-dom";

const travels = [
  {
    id: 1,
    title: "Viaje a París",
    date: "2023-05-01 a 2023-05-15",
    places: ["Torre Eiffel", "Museo del Louvre", "Montmartre"],
    photos: ["/assets/photos/photo1.jpg", "/assets/photos/photo2.jpg"],
  },
  {
    id: 2,
    title: "Viaje a Tokio",
    date: "2024-02-01 a 2024-02-10",
    places: ["Templo Senso-ji", "Shibuya", "Akihabara"],
    photos: ["/assets/photos/photo3.jpg", "/assets/photos/photo1.jpg"],
  },
  {
    id: 3,
    title: "Viaje a Nueva York",
    date: "2024-09-01 a 2024-09-10",
    places: ["Central Park", "Times Square", "Estátua de la Libertad"],
    photos: ["/assets/photos/photo2.jpg", "/assets/photos/photo3.jpg"],
  },
];

const TravelDetail = () => {
  const { id } = useParams();
  const travel = travels.find((t) => t.id.toString() === id);

  if (!travel) return <div>Viaje no encontrado</div>;

  return (
    <div className="travel-detail">
      <h1>{travel.title}</h1>
      <p>{travel.date}</p>
      <h2>Lugares Visitados:</h2>
      <ul>
        {travel.places.map((place, idx) => (
          <li key={idx}>{place}</li>
        ))}
      </ul>
      <div className="photos">
        {travel.photos.map((photo, idx) => (
          <img key={idx} src={photo} alt={`foto ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default TravelDetail;
