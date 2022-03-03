import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../assets/scss/map-style.scss';
import IpInformationType from '../class/interface/ip-information-type';

interface Props {
  ipInformation: IpInformationType | null;
}
/*
  -Default location
  longitude: -122.4
  latitude: 37.8
*/
const kayAPI = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent(props: Props): JSX.Element {
  const longitude = props.ipInformation
    ? props.ipInformation.location.lng
    : -122.4;
  const latitude = props.ipInformation
    ? props.ipInformation.location.lat
    : 37.8;
  return (
    <Map
      mapboxAccessToken={kayAPI}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      longitude={longitude}
      latitude={latitude}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={longitude} latitude={latitude} anchor="bottom">
        <div className="icon-location" />
      </Marker>
    </Map>
  );
}

export default MapComponent;
