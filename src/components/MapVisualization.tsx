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
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const ProjectLocation = ({ 
  name, 
  coordinates, 
  status, 
  type, 
  ndvi,
  area 
}: {
  name: string;
  coordinates: string;
  status: string;
  type: string;
  ndvi: number;
  area: number;
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
    <div className="space-y-1 text-sm text-muted-foreground">
      <p>📍 {coordinates}</p>
      <p>🌱 {type}</p>
      <p>📊 NDVI: {ndvi} | Area: {area} ha</p>
    </div>
  </div>
);

const MapControls = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-semibold mb-2 flex items-center gap-2">
        <Layers className="h-4 w-4" />
        Map Layers
      </h4>
      <div className="space-y-2">
        {[
          { name: "Satellite Imagery", enabled: true },
          { name: "NDVI Overlay", enabled: true },
          { name: "Project Boundaries", enabled: true },
          { name: "Bathymetry", enabled: false },
          { name: "Ocean Currents", enabled: false },
        ].map((layer) => (
          <div key={layer.name} className="flex items-center justify-between">
            <span className="text-sm">{layer.name}</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
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
        <Button variant="outline" size="sm">
          <ZoomIn className="h-3 w-3 mr-1" />
          Zoom In
        </Button>
        <Button variant="outline" size="sm">
          <ZoomOut className="h-3 w-3 mr-1" />
          Zoom Out
        </Button>
        <Button variant="outline" size="sm" className="col-span-2">
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset View
        </Button>
      </div>
    </div>
  </div>
);

const MapPlaceholder = () => (
  <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
    <div className="text-center space-y-4">
      <Satellite className="h-12 w-12 text-muted-foreground mx-auto" />
      <div>
        <h3 className="text-lg font-semibold text-muted-foreground">Interactive Map</h3>
        <p className="text-sm text-muted-foreground">
          Global view of marine restoration projects
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Simulated map markers */}
        <div className="space-y-2">
          <div className="w-3 h-3 bg-green-500 rounded-full mx-auto"></div>
          <div className="text-xs text-center">Sundarbans</div>
        </div>
        <div className="space-y-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto"></div>
          <div className="text-xs text-center">Great Barrier</div>
        </div>
        <div className="space-y-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full mx-auto"></div>
          <div className="text-xs text-center">Caribbean</div>
        </div>
      </div>
    </div>
  </div>
);

export const MapVisualization = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projectLocations = [
    {
      name: "Sundarbans Mangrove Restoration",
      coordinates: "22.5° N, 89.0° E",
      status: "Active",
      type: "Mangrove Forest",
      ndvi: 0.85,
      area: 2500
    },
    {
      name: "Great Barrier Reef Recovery",
      coordinates: "16.3° S, 145.8° E",
      status: "Monitoring",
      type: "Coral Reef",
      ndvi: 0.68,
      area: 1800
    },
    {
      name: "Caribbean Seagrass Initiative",
      coordinates: "18.2° N, 77.5° W",
      status: "Active",
      type: "Seagrass Beds",
      ndvi: 0.79,
      area: 1200
    },
    {
      name: "North Sea Salt Marsh",
      coordinates: "53.3° N, 6.8° E",
      status: "Planning",
      type: "Salt Marsh",
      ndvi: 0.72,
      area: 950
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Map Visualization</h2>
          <p className="text-muted-foreground">
            Global overview of marine restoration project locations
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
                  <MapPlaceholder />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Map Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <MapControls />
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
              { region: "Indo-Pacific", projects: 12, area: "45,600 ha", health: "Good" },
              { region: "Atlantic", projects: 8, area: "32,400 ha", health: "Excellent" },
              { region: "Arctic", projects: 4, area: "18,200 ha", health: "Moderate" },
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
                      { site: "Sundarbans East", date: "2 days ago", resolution: "10m", quality: "High" },
                      { site: "Coral Triangle", date: "5 days ago", resolution: "30m", quality: "Medium" },
                      { site: "Caribbean Bay", date: "1 week ago", resolution: "10m", quality: "High" },
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