import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  //console.log(locations);

  if (!currentLocation) {
    return (
      <ActivityIndicator
        size="large"
        style={{ marginTop: 200 }}
      ></ActivityIndicator>
    );
  }
  //console.log(currentLocation.coords);

  return (
    <MapView
      style={Styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      ></Circle>
      <Polyline coordinates={locations.map((loc) => loc.coords)}></Polyline>
    </MapView>
  );
};

const Styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
