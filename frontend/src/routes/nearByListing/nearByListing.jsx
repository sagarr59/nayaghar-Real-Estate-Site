import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";

function NearByListing() {
  const [userLocation, setUserLocation] = useState(null);
  const [randomMarkers, setRandomMarkers] = useState([]);
  const [center, setCenter] = useState([0, 0]); // Default center (lat, lon)
  const [zoom, setZoom] = useState(13); // Zoom level for the map
  const [radius, setRadius] = useState(5000); // Default radius for random markers (5 km)

  // Get user's location from the browser
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
        setCenter([latitude, longitude]); // Set map center to user's location
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Generate random markers near the user's location
  const generateRandomMarkers = () => {
    if (userLocation) {
      const markers = Array.from({ length: 10 }, () => {
        const randomLat = userLocation.lat + (Math.random() - 0.5) * 0.1; // Random lat within ~11 km
        const randomLon = userLocation.lon + (Math.random() - 0.5) * 0.1; // Random lon within ~11 km
        return {
          id: Math.random().toString(36).substr(2, 9), // Random unique ID
          latitude: randomLat,
          longitude: randomLon,
          title: "Random Listing",
          address: "Random Address",
        };
      });
      setRandomMarkers(markers);
    }
  };

  useEffect(() => {
    if (userLocation) {
      generateRandomMarkers();
    }
  }, [userLocation]);

  return (
    <div>
      <h2>Nearby Listings</h2>
      <button onClick={getUserLocation}>Find Nearest</button>

      {/* Display map if user's location is available */}
      {userLocation && (
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ width: "100%", height: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* User's location marker */}
          <Marker
            position={center}
            icon={new Icon({ iconUrl: "/user-mark.png", iconSize: [25, 25] })}
          >
            <Popup>Your location</Popup>
          </Marker>

          {/* Circle to show the search radius */}
          <Circle
            center={center}
            radius={radius}
            color="blue"
            fillColor="blue"
            fillOpacity={0.1}
          />

          {/* Random markers */}
          {randomMarkers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.latitude, marker.longitude]}
              icon={
                new Icon({ iconUrl: "/marker-icon.png", iconSize: [25, 25] })
              }
            >
              <Popup>
                <h3>{marker.title}</h3>
                <p>{marker.address}</p>
                <Link to={`/listing/${marker.id}`}>View Details</Link>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default NearByListing;
