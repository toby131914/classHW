import { createView, flyTo, drawPins } from "./funs";
import { useEffect } from "react";
import './MapView.css';

function MapView() {

  useEffect(() => {

    const newViewer = createView();

    flyTo(newViewer, 0.1, 122, 23, 800000, 0, -80, 0);

    drawPins(
      newViewer,
      {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [122, 24]
            },
            "properties": {
              "title": "Post 1",
              "marker-symbol": "danger",
              "marker-color": "#F00"
            }
          },
        ]
      }
    );

  }, []);


  return (
    <div className="MapView flex-col">
      <div id='cesiumContainer'></div>
    </div>
  );
}

export default MapView;
