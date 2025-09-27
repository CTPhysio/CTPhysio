import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  className?: string;
}

// Singleton loader instance
let loaderInstance: Loader | null = null;
let isLoaderInitialized = false;

const GoogleMap: React.FC<GoogleMapProps> = ({ className = "w-full h-[400px]" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Create loader only once
        if (!loaderInstance) {
          loaderInstance = new Loader({
            apiKey: 'AIzaSyAyhvShJVxYYJBw_iFcMw4UYWwVwWcMihY',
            version: 'weekly',
            libraries: ['places']
          });
        }

        // Load Google Maps API only once
        if (!isLoaderInitialized) {
          await loaderInstance.load();
          isLoaderInitialized = true;
        }

        // Initialize map
        if (!mapRef.current || !window.google) return;

        // Chris Tiley Physiotherapy, 24 Earls Court Road, Harborne, Birmingham B17 9AH
        const location = { lat: 52.460358298638454, lng: -1.9699514998583427 };
        
        const map = new google.maps.Map(mapRef.current, {
          center: location,
          zoom: 16,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        // Add marker
        new google.maps.Marker({
          position: location,
          map,
          title: 'Chris Tiley Physiotherapy - 24 Earls Court Road, Harborne, Birmingham B17 9AH'
        });

      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setMapError(true);
      }
    };

    initializeMap();
  }, []);

  if (mapError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center rounded-lg`}>
        <p className="text-gray-500">Map temporarily unavailable</p>
      </div>
    );
  }

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;