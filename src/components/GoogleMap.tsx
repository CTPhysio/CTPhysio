import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useConsent } from '../lib/useConsent';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D';

interface GoogleMapProps {
  className?: string;
}

// Singleton loader instance
let loaderInstance: Loader | null = null;
let isLoaderInitialized = false;

const GoogleMap: React.FC<GoogleMapProps> = ({ className = "w-full h-[400px]" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);
  const { hasConsent } = useConsent();

  useEffect(() => {
    if (!hasConsent('preferences')) return;

    const initializeMap = async () => {
      try {
        // Create loader only once
        if (!loaderInstance) {
          const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
          if (!apiKey) {
            console.error('[GoogleMap] VITE_GOOGLE_MAPS_API_KEY is not configured');
            setMapError(true);
            return;
          }
          loaderInstance = new Loader({
  apiKey,
  version: 'weekly',
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
  }, [hasConsent]);

  if (!hasConsent('preferences')) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center rounded-lg`}>
        <div className="text-center px-6">
          <p className="text-gray-600 mb-3">
            To view the interactive map, please enable preferences cookies.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
          >
            View our location on Google Maps
          </a>
        </div>
      </div>
    );
  }

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
