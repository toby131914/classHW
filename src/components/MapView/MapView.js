import { createView, flyTo } from "./funs";
import { useEffect } from "react";
import './MapView.css';

function MapView() {

  useEffect(() => {
    
    const newViewer = createView();

    flyTo(newViewer, 0.1, 122, 23, 800000, 0, -80, 0);

  }, []);


  return (
    <div className="MapView flex-col">
      <div id='cesiumContainer'></div>
    </div>
  );
}

export default MapView;
