import React from "react";
import map from "@assets/map2.jpeg";
import Nav from "./Nav/Nav";
import "./map.css";

function Map() {
  return (
    <div id="container-page-map">
      <Nav />
      <div className="content-map">
        <h1>Carte interactive</h1>
        <select>
          <option>Nos agences</option>
          <option>Nos collaborateurs</option>
          <option>Nos clients</option>
          <option>Nos partenaires</option>
        </select>
        <img className="map" src={map} width="70%" alt="map" />
      </div>
    </div>
  );
}

export default Map;
