import {
  Viewer,
  Math,
  Cartesian3,
} from "cesium";
import { useEffect } from "react";
import './MapView.css';

function MapView() {

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const newViewer = new Viewer('cesiumContainer', {
      shouldAnimate: true,
      timeline: false,
      animation: false,
      shadow: false,
      infoBox: false,
      selectionIndicator: false,
      geocoder: false,
      homeButton: false,
      baseLayerPicker: true,
      navigationHelpButton: false,
      sceneModePicker: false,
    });
    newViewer._cesiumWidget._creditContainer.style.display = 'none';

    newViewer.camera.flyTo({
      duration: 0.1,
      destination: Cartesian3.fromDegrees(119, 21, 800000),
      orientation: {
        heading: Math.toRadians(0.0),
        pitch: Math.toRadians(-60.0),
        roll: 0.0
      },
    });
  }, []);


  return (
    <div className="MapView flex-col">
      <div id='cesiumContainer'></div>
    </div>
  );
}

export default MapView;
