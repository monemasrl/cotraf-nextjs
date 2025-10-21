import dynamic from "next/dynamic";
import React from "react";

// Carica il componente mappa solo lato client
const MapComponent = dynamic(() => import("./mapComponent"), {
  ssr: false,
});

export default MapComponent;
