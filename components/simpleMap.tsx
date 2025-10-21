"use client";
import React from "react";
import style from "./mapComponent.module.scss";

interface SimpleMapProps {
  address?: string;
  className?: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  address = "Piazza san Lorenzo 1, Firenze",
  className,
}) => {
  // Coordinate di Piazza San Lorenzo, Firenze
  const lat = 43.7744;
  const lng = 11.2556;

  // URL per OpenStreetMap iframe
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.01
  },${lat - 0.01},${lng + 0.01},${
    lat + 0.01
  }&layer=mapnik&marker=${lat},${lng}`;

  return (
    <div className={`${style.mapContainer} ${className || ""}`}>
      <iframe
        src={mapUrl}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          borderRadius: "8px",
        }}
        title="Mappa Consorzio Cotraf - Piazza San Lorenzo 1, Firenze"
        loading="lazy"
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          background: "rgba(255,255,255,0.9)",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        📍 {address}
      </div>
    </div>
  );
};

export default SimpleMap;
