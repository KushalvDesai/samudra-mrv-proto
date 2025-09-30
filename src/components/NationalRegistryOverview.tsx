import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search,
  Filter,
  Download,
  FileText,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertTriangle,
  Building2,
  Eye,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Archive
} from "lucide-react";

// Mock registry data for NCCR oversight
const registryStats = [
  { name: "Total Registered Projects", count: 127, trend: "+12%" },
  { name: "Active Projects", count: 89, trend: "+8%" }, 
  { name: "Pending Approval", count: 23, trend: "+5%" },
  { name: "Total Area (Hectares)", count: 34567, trend: "+15%" }
];

const recentProjects = [
  {
    id: "NCCR-2024-001",
    name: "Mangrove Restoration - Sundarbans Phase III",
    applicant: "West Bengal Forest Department",
    area: "2,450 hectares",
    ecosystem: "Mangroves",
    status: "approved",
    submissionDate: "2024-09-28",
    approvalDate: "2024-09-30",
    estimatedCredits: "12,250 tCO₂"
  },
  {
    id: "NCCR-2024-002", 
    name: "Seagrass Conservation - Gulf of Mannar",
    applicant: "Tamil Nadu Biodiversity Board",
    area: "890 hectares",
    ecosystem: "Seagrass",
    status: "under-review",
    submissionDate: "2024-09-25",
    approvalDate: "-",
    estimatedCredits: "4,450 tCO₂"
  },
  {
    id: "NCCR-2024-003",
    name: "Salt Marsh Restoration - Gujarat",
    applicant: "Gujarat Ecology Commission",
    area: "1,200 hectares", 
    ecosystem: "Salt Marsh",
    status: "pending-documents",
    submissionDate: "2024-09-20",
    approvalDate: "-",
    estimatedCredits: "6,000 tCO₂"
  },
  {
    id: "NCCR-2024-004",
    name: "Coral Reef Conservation - Andaman",
    applicant: "ANET (Andaman & Nicobar Environmental Team)",
    area: "350 hectares",
    ecosystem: "Coral Reef",
    status: "approved",
    submissionDate: "2024-09-18",
    approvalDate: "2024-09-29",
    estimatedCredits: "1,750 tCO₂"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "approved":
      return "bg-green-100 text-green-800";
    case "under-review":
      return "bg-blue-100 text-blue-800";
    case "pending-documents":
      return "bg-yellow-100 text-yellow-800";
    case "rejected":
      return "bg-red-100 text-red-800";
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
    case "pending-documents":
      return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
    default:
      return <Clock className="w-4 h-4 text-gray-600" />;
  }
};

export const NationalRegistryOverview = () => {
  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">National Registry Overview</h2>
          <p className="text-gray-600">NCCR Blue Carbon Project Registry & Authorization System</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter Projects
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Registry
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {registryStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{stat.count.toLocaleString()}</span>
                <Badge variant={stat.trend.startsWith('+') ? 'default' : 'secondary'}>
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter Section */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-gray-900">Project Registry Search</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search projects by ID, name, or applicant..."
                className="pl-10 h-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 text-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button variant="outline" size="sm" className="h-9 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Stakeholder
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by project ID, name, applicant, or ecosystem type..."
                  className="pl-10 h-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-colors text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select className="px-4 py-3 h-12 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none sm:min-w-[140px]">
                <option>All Status</option>
                <option>Approved</option>
                <option>Under Review</option>
                <option>Pending Documents</option>
              </select>
              <select className="px-4 py-3 h-12 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none sm:min-w-[140px]">
                <option>All Ecosystems</option>
                <option>Mangroves</option>
                <option>Seagrass</option>
                <option>Salt Marsh</option>
                <option>Coral Reef</option>
              </select>
              <Button variant="outline" className="h-12 px-4 text-sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader className="border-b border-gray-100 bg-gray-50/30 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">Recent Project Submissions</CardTitle>
              <p className="text-sm text-gray-600 mt-1">Latest projects awaiting review and approval</p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button variant="outline" size="sm" className="h-9 px-3 text-xs">
                <Calendar className="w-4 h-4 mr-2" />
                Last 30 days
              </Button>
              <Button variant="outline" size="sm" className="h-9 px-3 text-xs">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {/* Mobile Card View - Visible on small screens */}
          <div className="block lg:hidden">
            {recentProjects.map((project, index) => (
              <div key={index} className="border-b border-gray-100 p-4 hover:bg-gray-50/30 transition-colors">
                <div className="space-y-3">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="font-mono text-sm font-bold text-blue-600">{project.id}</div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">{project.name}</h3>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(project.status)}
                      <Badge className={`${getStatusColor(project.status)} text-xs font-semibold px-2 py-1 rounded-full`}>
                        {project.status.replace("-", " ").toUpperCase()}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-500 text-xs">Applicant</span>
                      <div className="font-medium text-gray-900 truncate">{project.applicant}</div>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Ecosystem</span>
                      <div>
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          {project.ecosystem}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Area</span>
                      <div className="font-medium text-gray-900">{project.area}</div>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Est. Credits</span>
                      <div className="font-bold text-gray-900">{project.estimatedCredits}</div>
                    </div>
                  </div>

                  {/* Date and Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      Submitted: {project.submissionDate}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        Review
                      </Button>
                      <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                        <FileText className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View - Hidden on small screens */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Project ID
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Project Details
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Applicant
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Ecosystem Type
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Project Area
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Est. Credits
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 text-sm tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {recentProjects.map((project, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-gray-50/30 transition-colors duration-200 group"
                  >
                    <td className="py-5 px-6">
                      <div className="flex flex-col">
                        <div className="font-mono text-sm font-bold text-blue-600">
                          {project.id}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ID #{index + 1}
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex flex-col">
                        <div className="font-semibold text-gray-900 text-base leading-tight">
                          {project.name}
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          Submitted: {project.submissionDate}
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {project.applicant}
                          </span>
                          <span className="text-xs text-gray-500">Organization</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <Badge 
                        variant="outline" 
                        className="text-xs font-medium px-3 py-1 rounded-full border-2"
                      >
                        {project.ecosystem}
                      </Badge>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-3 h-3 text-blue-600" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {project.area}
                          </span>
                          <span className="text-xs text-gray-500">hectares</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center">
                          {getStatusIcon(project.status)}
                        </div>
                        <Badge 
                          className={`${getStatusColor(project.status)} text-xs font-semibold px-3 py-1 rounded-full`}
                        >
                          {project.status.replace("-", " ").toUpperCase()}
                        </Badge>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-gray-900">
                          {project.estimatedCredits}
                        </span>
                        <span className="text-xs text-gray-500">carbon credits</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="h-8 px-3 text-xs font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Review
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors"
                        >
                          <FileText className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-8 w-8 p-0 hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Responsive Table Footer */}
          <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Showing {recentProjects.length} of {recentProjects.length} projects</span>
              </div>
              <div className="flex items-center justify-center sm:justify-end space-x-2">
                <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                  <ChevronLeft className="w-3 h-3 mr-1" />
                  Previous
                </Button>
                <div className="flex items-center space-x-1">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs bg-blue-600 text-white border-blue-600">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-xs">
                    3
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                  Next
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Pending</h3>
              <p className="text-base text-gray-600 mb-4">23 projects awaiting NCCR approval</p>
              <Button className="w-full text-base h-10">Review Projects</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stakeholder Coordination</h3>
              <p className="text-base text-gray-600 mb-4">Manage state agencies & institutions</p>
              <Button className="w-full text-base h-10" variant="outline">Manage Partners</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">National Statistics</h3>
              <p className="text-base text-gray-600 mb-4">Generate registry reports</p>
              <Button className="w-full text-base h-10" variant="outline">View Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};