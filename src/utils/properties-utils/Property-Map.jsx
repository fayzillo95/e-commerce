import React, { useEffect, useRef, useState } from 'react';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TextField } from '@mui/material';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [coords, setCoords] = useState(null);
  const markerRef = useRef(null);
  const [userTargetAddress, setUserTargetAddress] = useState('');

  // Xarita boshlanishi
  useEffect(() => {
    if (!mapRef.current || mapInstance) return;

    const map = L.map(mapRef.current).setView([41.2995, 69.2401], 13); // Tashkent
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    map.on('click', (e) => {
      const lat = e.latlng.lat.toFixed(6);
      const lng = e.latlng.lng.toFixed(6);
      setCoords({ lat, lng });

      if (markerRef.current) {
        map.removeLayer(markerRef.current);
      }

      markerRef.current = L.marker([lat, lng]).addTo(map);
    });

    setMapInstance(map);

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  // Enter bosilganda manzil bo‘yicha koordinata olish
  const onKeyDownHandle = async (e) => {
    if (e.key === 'Enter') {
      const address = e.target.value;
      setUserTargetAddress(address);

      const encodedAddress = encodeURIComponent(address);
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}`;

      try {
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'your-app-name' // Nominatim talab qiladi
          }
        });
        const data = await response.json();
        // console.log(data)
        if (data && data.length > 0) {
          const adressName = data[0].display_name  
          const lat = parseFloat(data[0].lat);
          const lng = parseFloat(data[0].lon);

          console.log({address,lat,lng})
          setCoords({ lat, lng });

          if (markerRef.current) {
            mapInstance.removeLayer(markerRef.current);
          }

          markerRef.current = L.marker([lat, lng]).addTo(mapInstance);
          mapInstance.setView([lat, lng], 14);
        } else {
          alert("Manzil topilmadi");
        }
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    }
  };

  return (
    <div className='container mx-auto shadow-2xl p-6'>
      <TextField
        label="Manzil kiriting"
        fullWidth
        onKeyDown={onKeyDownHandle}
        sx={{ marginBottom: 2 }}
      />

      <h3>Tanlangan joy koordinatalari:</h3>
      <p id="coords">
        {coords
          ? `Latitude: ${coords.lat} | Longitude: ${coords.lng}`
          : 'Tanlanmagan'}
      </p>

      <div id="map" ref={mapRef} style={{ height: '500px', width: '100%' }}></div>

      <button style={{ marginTop: '10px' }}>
        <a
          href={
            coords
              ? `https://www.google.com/maps?q=${coords.lat},${coords.lng}`
              : '/'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Mapsda ochish
        </a>
      </button>
    </div>
  );
};

export default MapComponent;
