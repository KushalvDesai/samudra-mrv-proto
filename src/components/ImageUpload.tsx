import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { mockProjects } from "@/data/mockProjects";
import { Upload, Camera, Satellite, CheckCircle, AlertTriangle, Loader2, Zap } from "lucide-react";

interface ProcessingResult {
  ndvi: number;
  biodiversityIndex: number;
  areaHealthy: number;
  anomalies: string[];
  confidence: number;
}

export const ImageUpload = () => {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [processingState, setProcessingState] = useState<'idle' | 'uploading' | 'processing' | 'complete'>('idle');
  const [processingProgress, setProcessingProgress] = useState(0);
  const [results, setResults] = useState<ProcessingResult | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setUploadedFiles(files);
    }
  };

  const simulateProcessing = async () => {
    if (!selectedProject || uploadedFiles.length === 0) return;

    setProcessingState('uploading');
    setProcessingProgress(0);

    // Simulate upload progress
    for (let i = 0; i <= 30; i += 5) {
      setProcessingProgress(i);
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    setProcessingState('processing');
    
    // Simulate AI processing
    for (let i = 30; i <= 100; i += 10) {
      setProcessingProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Mock results
    const mockResults: ProcessingResult = {
      ndvi: 0.78 + Math.random() * 0.1,
      biodiversityIndex: 8.2 + Math.random() * 0.8,
      areaHealthy: 85 + Math.random() * 10,
      anomalies: Math.random() > 0.7 ? ['Unusual algae bloom in sector B-2'] : [],
      confidence: 92 + Math.random() * 6
    };

    setResults(mockResults);
    setProcessingState('complete');
  };

  const resetUpload = () => {
    setUploadedFiles([]);
    setProcessingState('idle');
    setProcessingProgress(0);
    setResults(null);
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center space-x-2">
          <Camera className="h-6 w-6 text-primary" />
          <span>Image Upload & Processing</span>
        </CardTitle>
        <CardDescription>
          Upload drone or satellite imagery for AI-powered ecosystem analysis
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Project Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Project</label>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a project for image analysis" />
            </SelectTrigger>
            <SelectContent>
              {mockProjects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name} - {project.location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* File Upload Area */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4 hover:border-primary/50 transition-colors">
          <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
          <div>
            <p className="text-lg font-medium">Drop files here or click to upload</p>
            <p className="text-sm text-muted-foreground">Supports drone imagery (.jpg, .png) and satellite data (.tiff)</p>
          </div>
          <input
            type="file"
            multiple
            accept="image/*,.tiff"
            onChange={handleFileUpload}
            className="hidden"
            id="image-upload"
          />
          <Button variant="outline" asChild>
            <label htmlFor="image-upload" className="cursor-pointer">
              Select Files
            </label>
          </Button>
        </div>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Uploaded Files</h4>
            <div className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2">
                    {file.type.includes('tiff') ? (
                      <Satellite className="h-4 w-4 text-primary" />
                    ) : (
                      <Camera className="h-4 w-4 text-secondary" />
                    )}
                    <span className="text-sm">{file.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {(file.size / 1024 / 1024).toFixed(1)} MB
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Processing Section */}
        {processingState !== 'idle' && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {processingState === 'complete' ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    )}
                    <span className="font-medium">
                      {processingState === 'uploading' && 'Uploading images...'}
                      {processingState === 'processing' && 'AI Analysis in progress...'}
                      {processingState === 'complete' && 'Processing complete!'}
                    </span>
                  </div>
                  <Badge variant="outline">
                    {processingState === 'uploading' && 'Uploading'}
                    {processingState === 'processing' && 'Processing'}
                    {processingState === 'complete' && 'Complete'}
                  </Badge>
                </div>
                
                <Progress value={processingProgress} className="h-2" />
                
                {processingState === 'processing' && (
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4" />
                    <span>Running NDVI analysis, biodiversity assessment, and anomaly detection...</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {results && (
          <Card className="border-success/20 bg-success/5">
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Analysis Results</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">NDVI Score</p>
                  <p className="text-xl font-bold text-success">{results.ndvi.toFixed(3)}</p>
                  <p className="text-xs text-muted-foreground">Vegetation Health</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">Biodiversity Index</p>
                  <p className="text-xl font-bold text-primary">{results.biodiversityIndex.toFixed(1)}</p>
                  <p className="text-xs text-muted-foreground">Species Richness</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">Healthy Area</p>
                  <p className="text-xl font-bold text-secondary">{results.areaHealthy.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground">Coverage</p>
                </div>
                <div className="bg-card p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="text-xl font-bold text-foreground">{results.confidence.toFixed(0)}%</p>
                  <p className="text-xs text-muted-foreground">Analysis Accuracy</p>
                </div>
              </div>

              {results.anomalies.length > 0 && (
                <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span className="font-medium text-warning">Anomalies Detected</span>
                  </div>
                  <ul className="text-sm text-foreground">
                    {results.anomalies.map((anomaly, index) => (
                      <li key={index}>• {anomaly}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {processingState === 'idle' && selectedProject && uploadedFiles.length > 0 && (
            <Button onClick={simulateProcessing} className="bg-gradient-ocean hover:opacity-90">
              <Zap className="h-4 w-4 mr-2" />
              Start AI Analysis
            </Button>
          )}
          
          {processingState === 'complete' && (
            <div className="flex space-x-2">
              <Button onClick={resetUpload} variant="outline">
                Upload New Images
              </Button>
              <Button className="bg-gradient-forest hover:opacity-90">
                Save to Project
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};