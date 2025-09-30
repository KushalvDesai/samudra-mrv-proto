import { useRef, useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Navigation,
  Sprout,
  BarChart3,
  AlertTriangle,
  Satellite,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Completely fix Leaflet default marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom marker icons for different project types
const createCustomIcon = (color: string) => L.divIcon({
  className: 'custom-marker',
  html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10]
});

const mangroveIcon = createCustomIcon('#22c55e');
const coralIcon = createCustomIcon('#3b82f6');
const seagrassIcon = createCustomIcon('#f59e0b');
const saltMarshIcon = createCustomIcon('#8b5cf6');

interface ProjectLocation {
  name: string;
  coordinates: [number, number];
  status: string;
  type: string;
  ndvi: number;
  area: number;
  description: string;
}

// Fallback component if map fails to load
const MapFallback = ({ projectLocations, onRetry }: { 
  projectLocations: ProjectLocation[], 
  onRetry: () => void 
}) => (
  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border flex items-center justify-center">
    <div className="text-center space-y-4 p-6">
      <Satellite className="h-12 w-12 text-muted-foreground mx-auto" />
      <div>
        <h3 className="text-lg font-semibold text-muted-foreground">Interactive Map</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Global view of marine restoration projects
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRetry}
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Load Map
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {projectLocations.slice(0, 4).map((project, index) => (
          <div key={index} className="space-y-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto"></div>
            <div className="text-xs text-center">{project.name.split(' ')[0]}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export interface MapRef {
  zoomIn: () => void;
  zoomOut: () => void;
  resetView: () => void;
}

interface InteractiveMapProps {
  projectLocations: ProjectLocation[];
  layers?: { [key: string]: boolean };
}

export const InteractiveMap = forwardRef<MapRef, InteractiveMapProps>(({ 
  projectLocations,
  layers = {}
}, ref) => {
  const mapRef = useRef<L.Map | null>(null);
  const [mapError, setMapError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useImperativeHandle(ref, () => ({
    zoomIn: () => mapRef.current?.zoomIn(),
    zoomOut: () => mapRef.current?.zoomOut(),
    resetView: () => mapRef.current?.setView([20, 77], 5) // Center on India
  }));

  // Add a timeout to show fallback if map takes too long to load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.warn('Map loading timeout, showing fallback');
        setMapError(true);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [isLoading, retryCount]);

  const handleRetry = () => {
    setMapError(false);
    setIsLoading(true);
    setRetryCount(prev => prev + 1);
  };

  const handleMapReady = () => {
    setIsLoading(false);
    console.log('Map loaded successfully');
  };

  // If there's an error, show fallback
  if (mapError) {
    return <MapFallback projectLocations={projectLocations} onRetry={handleRetry} />;
  }
  
  const getMarkerIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'mangrove forest':
        return mangroveIcon;
      case 'coral reef':
        return coralIcon;
      case 'seagrass beds':
        return seagrassIcon;
      case 'salt marsh':
        return saltMarshIcon;
      default:
        return mangroveIcon;
    }
  };

  const getStatusColor = (status: string): "default" | "secondary" | "outline" => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'default';
      case 'monitoring':
        return 'secondary';
      case 'planning':
        return 'outline';
      default:
        return 'outline';
    }
  };

  // Try to render the map with error handling
  try {
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden border bg-gray-100">
        <MapContainer
          center={[20, 77]} // Center on India
          zoom={5} // Better zoom level for India
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', minHeight: '384px' }}
          className="leaflet-container"
          ref={mapRef}
          key={retryCount} // Force re-render on retry
          whenReady={handleMapReady}
        >
          {/* Base satellite layer */}
          {layers.satellite !== false && (
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
              maxZoom={18}
            />
          )}
          
          {/* OpenStreetMap layer as alternative base */}
          {layers.satellite === false && (
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              maxZoom={18}
            />
          )}
        
        {/* NDVI Overlay simulation */}
        {layers.ndvi && (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='NDVI Data'
            opacity={0.3}
            className="ndvi-layer"
          />
        )}
        
        {/* Boundaries overlay simulation */}
        {layers.boundaries && (
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution='Boundaries'
            opacity={0.5}
          />
        )}
        
        {/* Street names overlay */}
        {layers.streetNames && (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            opacity={0.5}
          />
        )}

        {/* Project markers */}
        {projectLocations.map((location, index) => (
          <Marker 
            key={index} 
            position={location.coordinates}
            icon={getMarkerIcon(location.type)}
          >
            <Popup>
              <Card className="border-0 shadow-none">
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-sm">{location.name}</h4>
                    <Badge variant={getStatusColor(location.status)} className="text-xs">
                      {location.status}
                    </Badge>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-2">{location.description}</p>
                  
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Navigation className="h-3 w-3 text-blue-500" />
                      <span>{location.coordinates[0].toFixed(2)}°, {location.coordinates[1].toFixed(2)}°</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sprout className="h-3 w-3 text-green-500" />
                      <span>{location.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-3 w-3 text-purple-500" />
                      <span>NDVI: {location.ndvi} | Area: {location.area} ha</span>
                    </div>
                    {location.status === 'Active' && (
                      <div className="flex items-center gap-2 text-green-600">
                        <AlertTriangle className="h-3 w-3" />
                        <span className="font-medium">Live monitoring active</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
  } catch (error) {
    console.error('Map rendering error:', error);
    return <MapFallback projectLocations={projectLocations} onRetry={handleRetry} />;
  }
});