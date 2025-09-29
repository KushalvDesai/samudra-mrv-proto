import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockProjects, type Project } from "@/data/mockProjects";
import { ProjectDetailsModal } from "@/components/ProjectDetailsModal";
import { Search, MapPin, Calendar, TrendingUp, Eye } from "lucide-react";

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
    <>
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span>Project Registry</span>
          </CardTitle>
          <CardDescription>
            Monitor and manage marine ecosystem restoration projects
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects by name or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={handleStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-medium transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-lg line-clamp-2">{project.name}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </div>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Area</p>
                      <p className="font-semibold">{project.area} ha</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">NDVI Score</p>
                      <p className="font-semibold flex items-center">
                        {project.ndviScore}
                        <TrendingUp className="h-3 w-3 ml-1 text-success" />
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Credits Issued</p>
                      <p className="font-semibold">{project.creditsIssued.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Carbon Sequestered</p>
                      <p className="font-semibold">{project.carbonSequestered}t</p>
                    </div>
                  </div>

                  {/* Last Update */}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      Updated {new Date(project.lastUpdate).toLocaleDateString()}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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
    </>
  );
};