import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type Project } from "@/data/mockProjects";
import { MapPin, Calendar, TrendingUp, Leaf, Camera, CheckCircle, AlertTriangle, Clock } from "lucide-react";

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetailsModal = ({ project, onClose }: ProjectDetailsModalProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-success';
      case 'rejected': return 'text-destructive';
      case 'pending': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getVerificationIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'rejected': return AlertTriangle;
      case 'pending': return Clock;
      default: return CheckCircle;
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center space-x-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span>{project.name}</span>
          </DialogTitle>
          <DialogDescription className="text-base">
            {project.location} • {project.area} hectares
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status and Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={
                  project.status === 'active' ? 'bg-success text-success-foreground' :
                  project.status === 'pending' ? 'bg-warning text-warning-foreground' :
                  project.status === 'verified' ? 'bg-primary text-primary-foreground' :
                  project.status === 'monitoring' ? 'bg-secondary text-secondary-foreground' :
                  'bg-muted text-muted-foreground'
                }>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">NDVI Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-success flex items-center">
                  {project.ndviScore}
                  <TrendingUp className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Credits Issued</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-primary">
                  {project.creditsIssued.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Carbon Sequestered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-secondary flex items-center">
                  {project.carbonSequestered}t
                  <Leaf className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Information */}
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Start Date</span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(project.startDate).toLocaleDateString()}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last Update</span>
                  <span>{new Date(project.lastUpdate).toLocaleDateString()}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Coordinates</span>
                  <span className="text-sm font-mono">
                    {project.coordinates.lat.toFixed(4)}, {project.coordinates.lng.toFixed(4)}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Biodiversity Index</span>
                  <span className="font-semibold">{project.biodiversityIndex}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Credits Available</span>
                  <span className="font-semibold text-primary">{project.creditsAvailable}</span>
                </div>
              </CardContent>
            </Card>

            {/* Images */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Recent Images</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((image) => (
                    <div key={image.id} className="space-y-2">
                      <div className="aspect-video bg-gradient-to-br from-muted to-accent/20 rounded-lg flex items-center justify-center">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {image.type}
                          </Badge>
                          <Badge variant={image.processed ? "default" : "secondary"} className="text-xs">
                            {image.processed ? "Processed" : "Processing"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{new Date(image.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verification History */}
          <Card>
            <CardHeader>
              <CardTitle>Verification History</CardTitle>
              <CardDescription>
                Track of all verification activities for this project
              </CardDescription>
            </CardHeader>
            <CardContent>
              {project.verificationHistory.length > 0 ? (
                <div className="space-y-4">
                  {project.verificationHistory.map((verification, index) => {
                    const Icon = getVerificationIcon(verification.status);
                    return (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                        <Icon className={`h-5 w-5 mt-0.5 ${getStatusColor(verification.status)}`} />
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium capitalize">
                              {verification.type.replace('_', ' ')}
                            </span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${getStatusColor(verification.status)}`}
                            >
                              {verification.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{verification.notes}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(verification.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No verification history available</p>
                  <p className="text-sm">Verification activities will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};