import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockProjects, type Project } from "@/data/mockProjects";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { Search, MapPin, Calendar, TrendingUp, Eye, Filter, Download } from "lucide-react";

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const variants = {
    active: 'bg-success text-success-foreground',
    pending: 'bg-warning text-warning-foreground',
    verified: 'bg-primary text-primary-foreground',
    monitoring: 'bg-secondary text-secondary-foreground',
    completed: 'bg-muted text-muted-foreground'
  };

  return (
    <Badge className={variants[status]}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export const ProjectRegistry = () => {
  const [projects] = useState<Project[]>(mockProjects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(mockProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    applyFilters(value, statusFilter);
  };

  const handleStatusFilter = (value: string) => {
    setStatusFilter(value);
    applyFilters(searchTerm, value);
  };

  const applyFilters = (search: string, status: string) => {
    let filtered = projects;

    if (search) {
      filtered = filtered.filter(
        project =>
          project.name.toLowerCase().includes(search.toLowerCase()) ||
          project.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      filtered = filtered.filter(project => project.status === status);
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Project Registry</h2>
          <p className="text-sm sm:text-base text-gray-600">Monitor and manage marine ecosystem restoration projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects by name or location..."
                className="pl-10 text-sm"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 text-sm">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="monitoring">Monitoring</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg sm:text-xl lg:text-2xl flex items-center space-x-2 min-h-[2rem] leading-tight">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
            <span>All Projects</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Monitor and manage marine ecosystem restoration projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="h-full flex flex-col hover:shadow-medium transition-all duration-300 group">
                <CardHeader className="pb-4 flex-shrink-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg line-clamp-2 leading-tight">{project.name}</CardTitle>
                      <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <StatusBadge status={project.status} />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-muted-foreground font-medium">Area</p>
                      <p className="font-semibold text-gray-900">{project.area} ha</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">NDVI Score</p>
                      <p className="font-semibold text-gray-900 flex items-center">
                        {project.ndviScore}
                        <TrendingUp className="h-3 w-3 ml-1 text-success" />
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Credits Issued</p>
                      <p className="font-semibold text-gray-900">{project.creditsIssued.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Carbon Sequestered</p>
                      <p className="font-semibold text-gray-900">{project.carbonSequestered}t</p>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">Updated {new Date(project.lastUpdate).toLocaleDateString()}</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-xs flex-shrink-0"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground">
                No projects found matching your criteria
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};