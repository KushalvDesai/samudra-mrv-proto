import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Satellite, 
  Layers, 
  Filter,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Eye,
  EyeOff,
  AlertTriangle,
  Navigation,
  Sprout,
  BarChart3
} from "lucide-react";
import { useState, useRef } from "react";
import { InteractiveMap, type MapRef } from "./InteractiveMap";
import { mockProjects } from "@/data/mockProjects";

const ProjectLocation = ({ 
  name, 
  coordinates, 
  status, 
  type, 
  ndvi,
  area,
  description 
}: {
  name: string;
  coordinates: [number, number];
  status: string;
  type: string;
  ndvi: number;
  area: number;
  description: string;
}) => (
  <div className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-primary" />
        <h4 className="font-semibold">{name}</h4>
      </div>
      <Badge variant={status === "Active" ? "default" : status === "Monitoring" ? "secondary" : "outline"}>
        {status}
      </Badge>
    </div>
    <p className="text-sm text-muted-foreground mb-2">{description}</p>
    <div className="space-y-1 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Navigation className="h-3 w-3" />
        <span>{coordinates[0].toFixed(2)}°, {coordinates[1].toFixed(2)}°</span>
      </div>
      <div className="flex items-center gap-2">
        <Sprout className="h-3 w-3" />
        <span>{type}</span>
      </div>
      <div className="flex items-center gap-2">
        <BarChart3 className="h-3 w-3" />
        <span>NDVI: {ndvi} | Area: {area} ha</span>
      </div>
    </div>
  </div>
);

const MapControls = ({ 
  onZoomIn, 
  onZoomOut, 
  onResetView, 
  layers, 
  onLayerToggle 
}: {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  layers: { [key: string]: boolean };
  onLayerToggle: (layerId: string) => void;
}) => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold mb-2 flex items-center gap-2">
        <Layers className="h-4 w-4" />
        Map Layers
      </h4>
      <div className="space-y-2">
        {[
          { id: "satellite", name: "Satellite Imagery", enabled: layers.satellite },
          { id: "ndvi", name: "NDVI Overlay", enabled: layers.ndvi },
          { id: "boundaries", name: "Project Boundaries", enabled: layers.boundaries },
          { id: "bathymetry", name: "Bathymetry", enabled: layers.bathymetry },
          { id: "currents", name: "Ocean Currents", enabled: layers.currents },
        ].map((layer) => (
          <div key={layer.id} className="flex items-center justify-between">
            <span className="text-sm">{layer.name}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => onLayerToggle(layer.id)}
            >
              {layer.enabled ? (
                <Eye className="h-3 w-3" />
              ) : (
                <EyeOff className="h-3 w-3" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-2 flex items-center gap-2">
        <Filter className="h-4 w-4" />
        Filters
      </h4>
      <div className="space-y-2">
        <Button variant="outline" size="sm" className="w-full justify-start">
          Project Status
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Ecosystem Type
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-start">
          Health Score
        </Button>
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-2">Map Controls</h4>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" onClick={onZoomIn}>
          <ZoomIn className="h-3 w-3 mr-1" />
          Zoom In
        </Button>
        <Button variant="outline" size="sm" onClick={onZoomOut}>
          <ZoomOut className="h-3 w-3 mr-1" />
          Zoom Out
        </Button>
        <Button variant="outline" size="sm" className="col-span-2" onClick={onResetView}>
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset View
        </Button>
      </div>
    </div>
  </div>
);

export const MapVisualization = () => {
  const mapRef = useRef<MapRef>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [layers, setLayers] = useState({
    satellite: true,
    ndvi: true,
    boundaries: true,
    bathymetry: false,
    currents: false,
    streetNames: false
  });

  const handleLayerToggle = (layerId: string) => {
    setLayers(prev => ({
      ...prev,
      [layerId]: !prev[layerId]
    }));
  };

  const handleZoomIn = () => {
    mapRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapRef.current?.zoomOut();
  };

  const handleResetView = () => {
    mapRef.current?.resetView();
  };

  const projectLocations = mockProjects.map(project => ({
    name: project.name,
    coordinates: [project.coordinates.lat, project.coordinates.lng] as [number, number],
    status: project.status === 'active' ? 'Active' : 
            project.status === 'monitoring' ? 'Monitoring' :
            project.status === 'verified' ? 'Verified' :
            project.status === 'pending' ? 'Planning' : 'Completed',
    type: project.name.toLowerCase().includes('mangrove') ? 'Mangrove Forest' :
          project.name.toLowerCase().includes('coral') ? 'Coral Reef' :
          project.name.toLowerCase().includes('seagrass') ? 'Seagrass Beds' :
          project.name.toLowerCase().includes('salt') ? 'Salt Marsh' :
          project.name.toLowerCase().includes('wetland') ? 'Wetland' :
          project.name.toLowerCase().includes('lagoon') ? 'Lagoon' :
          project.name.toLowerCase().includes('lake') ? 'Lake Ecosystem' :
          project.name.toLowerCase().includes('backwater') ? 'Backwater Ecosystem' :
          project.name.toLowerCase().includes('dune') ? 'Coastal Dune' : 'Marine Ecosystem',
    ndvi: project.ndviScore,
    area: project.area,
    description: `${project.location} - ${project.status.charAt(0).toUpperCase() + project.status.slice(1)} restoration project with ${project.creditsIssued} credits issued.`
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Map Visualization</h2>
          <p className="text-muted-foreground">
            Indian coastal and marine restoration project locations
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Live Data
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="global" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="global">Global View</TabsTrigger>
          <TabsTrigger value="regions">Regional Analysis</TabsTrigger>
          <TabsTrigger value="satellite">Satellite Data</TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Project Locations Map
                  </CardTitle>
                  <CardDescription>
                    Interactive map showing all active restoration sites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <InteractiveMap 
                    ref={mapRef}
                    projectLocations={projectLocations}
                    layers={layers}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Map Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <MapControls 
                    onZoomIn={handleZoomIn}
                    onZoomOut={handleZoomOut}
                    onResetView={handleResetView}
                    layers={layers}
                    onLayerToggle={handleLayerToggle}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Locations</CardTitle>
              <CardDescription>
                Detailed information about each restoration site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectLocations.map((location) => (
                  <ProjectLocation
                    key={location.name}
                    {...location}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="regions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                region: "East Coast", 
                projects: mockProjects.filter(p => 
                  p.location.includes('West Bengal') || 
                  p.location.includes('Odisha') || 
                  p.location.includes('Andhra Pradesh') || 
                  p.location.includes('Tamil Nadu') || 
                  p.location.includes('Puducherry')
                ).length, 
                area: `${Math.round(mockProjects.filter(p => 
                  p.location.includes('West Bengal') || 
                  p.location.includes('Odisha') || 
                  p.location.includes('Andhra Pradesh') || 
                  p.location.includes('Tamil Nadu') || 
                  p.location.includes('Puducherry')
                ).reduce((sum, p) => sum + p.area, 0)).toLocaleString()} ha`, 
                health: "Good" 
              },
              { 
                region: "West Coast", 
                projects: mockProjects.filter(p => 
                  p.location.includes('Kerala') || 
                  p.location.includes('Karnataka') || 
                  p.location.includes('Goa') || 
                  p.location.includes('Maharashtra') || 
                  p.location.includes('Gujarat')
                ).length, 
                area: `${Math.round(mockProjects.filter(p => 
                  p.location.includes('Kerala') || 
                  p.location.includes('Karnataka') || 
                  p.location.includes('Goa') || 
                  p.location.includes('Maharashtra') || 
                  p.location.includes('Gujarat')
                ).reduce((sum, p) => sum + p.area, 0)).toLocaleString()} ha`, 
                health: "Excellent" 
              },
              { 
                region: "Islands", 
                projects: mockProjects.filter(p => 
                  p.location.includes('Andaman') || 
                  p.location.includes('Lakshadweep')
                ).length, 
                area: `${Math.round(mockProjects.filter(p => 
                  p.location.includes('Andaman') || 
                  p.location.includes('Lakshadweep')
                ).reduce((sum, p) => sum + p.area, 0)).toLocaleString()} ha`, 
                health: "Excellent" 
              },
            ].map((region) => (
              <Card key={region.region}>
                <CardHeader>
                  <CardTitle>{region.region}</CardTitle>
                  <CardDescription>{region.projects} active projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Total Area:</span>
                      <span className="text-sm font-medium">{region.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Health Status:</span>
                      <Badge variant={region.health === "Excellent" ? "default" : 
                                    region.health === "Good" ? "secondary" : "outline"}>
                        {region.health}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="satellite" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Satellite className="h-5 w-5 text-primary" />
                Satellite Imagery Analysis
              </CardTitle>
              <CardDescription>
                Latest satellite data and NDVI analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4">Recent Imagery Updates</h4>
                  <div className="space-y-3">
                    {[
                      { site: "Sundarbans Mangroves", date: "2 days ago", resolution: "10m", quality: "High" },
                      { site: "Andaman Coral Reefs", date: "4 days ago", resolution: "30m", quality: "Medium" },
                      { site: "Gulf of Mannar", date: "1 week ago", resolution: "10m", quality: "High" },
                      { site: "Kerala Backwaters", date: "5 days ago", resolution: "15m", quality: "High" },
                    ].map((update) => (
                      <div key={update.site} className="flex justify-between items-center p-2 border rounded">
                        <div>
                          <p className="font-medium text-sm">{update.site}</p>
                          <p className="text-xs text-muted-foreground">{update.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs">{update.resolution}</p>
                          <Badge variant="outline" className="text-xs">
                            {update.quality}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">NDVI Analysis</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded border">
                      <p className="font-medium text-green-800">Healthy Vegetation</p>
                      <p className="text-sm text-green-600">NDVI: 0.6 - 1.0</p>
                      <p className="text-xs">68% of monitored areas</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded border">
                      <p className="font-medium text-yellow-800">Moderate Health</p>
                      <p className="text-sm text-yellow-600">NDVI: 0.3 - 0.6</p>
                      <p className="text-xs">25% of monitored areas</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded border">
                      <p className="font-medium text-red-800">Attention Needed</p>
                      <p className="text-sm text-red-600">NDVI: 0.0 - 0.3</p>
                      <p className="text-xs">7% of monitored areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};