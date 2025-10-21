"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
// @ts-ignore: CSS import without type declarations
import "leaflet/dist/leaflet.css";
import style from "./mapComponent.module.scss";

// Fix per le icone di Leaflet in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapComponentProps {
  address?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  address = "Piazza san Lorenzo 1, Firenze",
  className,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Coordinate di Piazza San Lorenzo, Firenze
    const lat = 43.7744;
    const lng = 11.2556;

    // Inizializza la mappa
    const map = L.map(mapRef.current).setView([lat, lng], 16);

    // Aggiungi il layer OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Aggiungi un marker per l'indirizzo
    const marker = L.marker([lat, lng]).addTo(map);

    // Aggiungi un popup con l'indirizzo
    marker
      .bindPopup(
        `
      <div style="text-align: center;">
        <strong>Consorzio Cotraf</strong><br/>
        ${address}<br/>

      </div>
    `
      )
      .openPopup();

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  return (
    <div ref={mapRef} className={`${style.mapContainer} ${className || ""}`} />
  );
};

export default MapComponent;
