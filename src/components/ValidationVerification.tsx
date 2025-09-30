import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Satellite, 
  Map, 
  Camera, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  Upload,
  Search,
  Filter,
  Eye,
  BarChart3,
  Layers
} from "lucide-react";

export const ValidationVerification = () => {
  const verificationStats = [
    { name: "Verified Projects", count: 78, trend: "+12 this month" },
    { name: "Pending Verification", count: 23, trend: "+8 new" },
    { name: "Satellite Images Processed", count: 1247, trend: "+156 this week" },
    { name: "Field Data Points", count: 3456, trend: "+89 today" }
  ];

  const recentVerifications = [
    {
      projectId: "NCCR-2024-001",
      projectName: "Sundarbans Mangrove Restoration Phase III",
      area: "2,450 ha",
      verificationMethod: "Satellite + Field Survey",
      lastVerified: "2024-09-28",
      status: "verified",
      accuracy: 97.8,
      imageDate: "2024-09-25"
    },
    {
      projectId: "NCCR-2024-002",
      projectName: "Gulf of Mannar Seagrass Conservation",
      area: "890 ha", 
      verificationMethod: "Satellite Analysis",
      lastVerified: "-",
      status: "in-progress",
      accuracy: "-",
      imageDate: "2024-09-20"
    },
    {
      projectId: "NCCR-2024-003",
      projectName: "Gujarat Salt Marsh Restoration",
      area: "1,200 ha",
      verificationMethod: "Drone Survey",
      lastVerified: "2024-09-15",
      status: "requires-field-check",
      accuracy: 89.2,
      imageDate: "2024-09-12"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "requires-field-check":
        return "bg-yellow-100 text-yellow-800";
      case "verification-failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "requires-field-check":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Data Verification & Remote Sensing</h2>
          <p className="text-sm sm:text-base text-gray-600">Spatial data verification using satellite imagery and field validation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Upload Data
          </Button>
          <Button size="sm" className="text-xs sm:text-sm">
            <Satellite className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Request Imagery
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by project ID, name, or location..." 
            className="w-full text-sm"
          />
        </div>
        <Button variant="outline" className="text-sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button className="text-sm">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {verificationStats.map((stat) => (
          <Card key={stat.name} className="h-full flex flex-col">
            <CardHeader className="pb-3 flex-shrink-0">
              <CardDescription className="text-sm font-medium leading-tight min-h-[2.5rem] flex items-center">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between pt-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold leading-none">
                  {typeof stat.count === 'number' ? stat.count.toLocaleString() : stat.count}
                </span>
                <Badge variant="outline" className="text-xs shrink-0 ml-2">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Verification Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <Satellite className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Satellite Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Automated analysis using Sentinel-2 and Landsat imagery
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Open Tool
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Drone Data</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              High-resolution drone imagery and LiDAR data processing
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Upload Data
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Change Detection</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Temporal analysis to detect ecosystem changes over time
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Run Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">GIS Integration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Integration with national GIS databases and mapping systems
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Open GIS
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Verification Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            Recent Verification Activities
          </CardTitle>
          <CardDescription>
            Current verification status of blue carbon projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVerifications.map((project) => (
              <div key={project.projectId} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{project.projectId}</h3>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusIcon(project.status)}
                        <span className="ml-1">{project.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                    <h4 className="font-medium text-gray-900">{project.projectName}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Area:</span>
                        <span className="ml-1 font-medium">{project.area}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Method:</span>
                        <span className="ml-1 font-medium">{project.verificationMethod}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Image Date:</span>
                        <span className="ml-1 font-medium">{project.imageDate}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Accuracy:</span>
                        <span className="ml-1 font-medium">
                          {project.accuracy !== "-" ? `${project.accuracy}%` : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Data
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Verification Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="text-base sm:text-lg leading-tight min-h-[2rem] flex items-center">
              Monthly Verification Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-gray-700">Projects Verified</span>
                  <span className="text-gray-900 font-semibold">78 / 101 (77%)</span>
                </div>
                <Progress value={77} className="h-2.5" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-gray-700">Satellite Data Processed</span>
                  <span className="text-gray-900 font-semibold">1,247 / 1,500 (83%)</span>
                </div>
                <Progress value={83} className="h-2.5" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-gray-700">Field Validations</span>
                  <span className="text-gray-900 font-semibold">45 / 60 (75%)</span>
                </div>
                <Progress value={75} className="h-2.5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="text-base sm:text-lg leading-tight min-h-[2rem] flex items-center">
              Data Sources & Coverage
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-gray-700">Sentinel-2 Coverage</span>
                <Badge variant="secondary" className="font-semibold">98.5%</Badge>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-gray-700">Landsat-8 Coverage</span>
                <Badge variant="secondary" className="font-semibold">95.2%</Badge>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-gray-700">Drone Surveys</span>
                <Badge variant="secondary" className="font-semibold">67.3%</Badge>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-gray-700">Field Validation</span>
                <Badge variant="secondary" className="font-semibold">45.8%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};