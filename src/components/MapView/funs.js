import {
  Viewer,
  Cartesian3,
  Math,
} from "cesium";


export function createView() {
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

  return newViewer;
}
export function flyTo(viewer, duration, longitude, latitude, height, heading, pitch, roll) {
  viewer.camera.flyTo({
    duration: duration,
    destination: Cartesian3.fromDegrees(longitude, latitude, height),
    orientation: {
      heading: Math.toRadians(heading),
      pitch: Math.toRadians(pitch),
      roll: Math.toRadians(roll),
    },
  });
}