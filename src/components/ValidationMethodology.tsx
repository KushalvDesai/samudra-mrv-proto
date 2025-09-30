import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Search,
  Filter,
  Download,
  BookOpen,
  Microscope,
  Calculator,
  Award
} from "lucide-react";

export const ValidationMethodology = () => {
  const methodologyStats = [
    { name: "Approved Methodologies", count: 12, trend: "+2 new" },
    { name: "Under Review", count: 8, trend: "+3 pending" },
    { name: "Total Applications", count: 34, trend: "+15%" },
    { name: "Revision Required", count: 6, trend: "-2 this month" }
  ];

  const approvedMethodologies = [
    {
      id: "VM0033",
      name: "Methodology for Tidal Wetland and Seagrass Restoration",
      version: "v2.0",
      applicant: "Verra",
      ecosystems: ["Seagrass", "Salt Marsh"],
      status: "approved",
      approvalDate: "2024-03-15",
      applicableRegions: ["Coastal India", "Arabian Sea", "Bay of Bengal"]
    },
    {
      id: "ACM0003", 
      name: "Mangrove Restoration and Conservation",
      version: "v1.5",
      applicant: "Gold Standard",
      ecosystems: ["Mangroves"],
      status: "approved",
      approvalDate: "2024-01-20",
      applicableRegions: ["East Coast", "West Coast", "Andaman & Nicobar"]
    },
    {
      id: "CDM-AR-AM0014",
      name: "Afforestation and Reforestation of Degraded Mangrove Habitats",
      version: "v3.0",
      applicant: "UNFCCC",
      ecosystems: ["Mangroves"],
      status: "under-review",
      approvalDate: "-",
      applicableRegions: ["Sundarbans", "Godavari Delta"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "under-review":
        return "bg-blue-100 text-blue-800";
      case "revision-required":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "under-review":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "revision-required":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Methodology Review & Validation</h2>
          <p className="text-gray-600">Review and approve carbon sequestration methodologies for blue carbon projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search methodologies by ID, name, or ecosystem type..." 
            className="w-full"
          />
        </div>
        <Button>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {methodologyStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{stat.count}</span>
                <Badge variant="outline" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Methodology Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Access standard guidelines and requirements for methodology submissions
            </p>
            <Button variant="outline" className="w-full">
              View Guidelines
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              Carbon Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Tool for validating carbon sequestration calculations and projections
            </p>
            <Button variant="outline" className="w-full">
              Open Calculator
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certification Standards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Review international standards and certification requirements
            </p>
            <Button variant="outline" className="w-full">
              View Standards
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Approved Methodologies List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Methodology Registry
          </CardTitle>
          <CardDescription>
            Currently approved and under-review methodologies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {approvedMethodologies.map((methodology) => (
              <div key={methodology.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{methodology.id}</h3>
                      <Badge variant="outline">{methodology.version}</Badge>
                      <Badge className={getStatusColor(methodology.status)}>
                        {getStatusIcon(methodology.status)}
                        <span className="ml-1">{methodology.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                    <h4 className="font-medium text-gray-900">{methodology.name}</h4>
                    <p className="text-sm text-gray-600">Submitted by: {methodology.applicant}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {methodology.ecosystems.map((ecosystem) => (
                        <Badge key={ecosystem} variant="secondary" className="text-xs">
                          {ecosystem}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {methodology.applicableRegions.map((region) => (
                        <Badge key={region} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    {methodology.status === 'approved' && (
                      <p>Approved: {methodology.approvalDate}</p>
                    )}
                    {methodology.status === 'under-review' && (
                      <p>Under Review</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};