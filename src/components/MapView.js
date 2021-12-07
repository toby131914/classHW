import { useState } from 'react';
import PostList from "./PostList";
import './MapView.css';
import map from "../assets/img/map.png";


function MapView() {

  return (
    <div className="MapView flex-col">
      <img
        className="MapViewImg"
        src={map}
        alt="..."
      />
    </div>
  );
}

export default MapView;
