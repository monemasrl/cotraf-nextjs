"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./mapComponent.module.scss";

interface MapComponentProps {
  address?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  address = "Piazza san Lorenzo 1, Firenze",
  className,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeMap = async () => {
      try {
        // Importa Leaflet
        const L = (await import("leaflet")).default;

        // Carica CSS se non già presente
        if (!document.querySelector('link[href*="leaflet"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
          document.head.appendChild(link);
        }

        // Aspetta un momento per il DOM
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!mapRef.current) {
          setError("Elemento mappa non trovato");
          setIsLoading(false);
          return;
        }

        // Pulisci container se esiste già una mappa
        mapRef.current.innerHTML = "";

        // Configura icone
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl:
            "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        // Coordinate Piazza San Lorenzo, Firenze
        const coordinates: [number, number] = [43.7744, 11.2556];

        // Crea mappa
        const map = L.map(mapRef.current).setView(coordinates, 16);

        // Aggiungi tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        // Aggiungi marker
        const marker = L.marker(coordinates).addTo(map);
        marker
          .bindPopup(
            `
          <div style="text-align: center;">
            <strong>Consorzio Cotraf</strong><br/>
            ${address}<br/>
            <small>P.IVA: 05070980486</small>
          </div>
        `
          )
          .openPopup();

        mapInstanceRef.current = map;
        setIsLoading(false);
        setError(null);
      } catch (err) {
        console.error("Errore mappa:", err);
        setError("Impossibile caricare la mappa");
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [address]);

  if (error) {
    return (
      <div className={`${style.mapContainer} ${className || ""}`}>
        <div className={style.loadingContainer}>
          <p style={{ color: "#dc3545" }}>❌ {error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "8px 16px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Ricarica pagina
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`${style.mapContainer} ${className || ""}`}>
        <div className={style.loadingContainer}>
          <div className={style.spinner}></div>
          <p>Caricamento mappa...</p>
        </div>
      </div>
    );
  }

  return (
    <div ref={mapRef} className={`${style.mapContainer} ${className || ""}`} />
  );
};

export default MapComponent;
