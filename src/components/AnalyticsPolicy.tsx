import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  TrendingUp, 
  Target, 
  Lightbulb,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Calendar,
  Users,
  Globe,
  Download,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const AnalyticsPolicy = () => {
  const policyMetrics = [
    { label: "Active Policies", count: 23, change: "+3", icon: FileText, color: "text-blue-500" },
    { label: "Policy Compliance", count: 89.5, change: "+2.1%", icon: CheckCircle, color: "text-green-500" },
    { label: "Recommendations", count: 15, change: "+5", icon: Lightbulb, color: "text-orange-500" },
    { label: "Impact Score", count: 8.7, change: "+0.3", icon: TrendingUp, color: "text-purple-500" }
  ];

  const policyRecommendations = [
    {
      id: "PR-2024-001",
      title: "Enhanced Community Participation Framework",
      priority: "High",
      impact: "Very High",
      description: "Implement structured community engagement protocols to increase local participation in blue carbon projects",
      affectedProjects: 45,
      estimatedBenefit: "25% increase in project success rate",
      status: "Under Review",
      deadline: "Jan 15, 2025"
    },
    {
      id: "PR-2024-002", 
      title: "Standardized Carbon Measurement Protocols",
      priority: "Critical",
      impact: "High",
      description: "Establish uniform measurement standards across all blue carbon ecosystems for better data consistency",
      affectedProjects: 78,
      estimatedBenefit: "15% improvement in data accuracy",
      status: "Draft",
      deadline: "Dec 30, 2024"
    },
    {
      id: "PR-2024-003",
      title: "Integrated Monitoring Technology Adoption",
      priority: "Medium",
      impact: "Medium",
      description: "Deploy IoT sensors and satellite monitoring for real-time ecosystem health tracking",
      affectedProjects: 32,
      estimatedBenefit: "30% reduction in monitoring costs",
      status: "Approved",
      deadline: "Feb 28, 2025"
    },
    {
      id: "PR-2024-004",
      title: "Cross-State Coordination Mechanism",
      priority: "High",
      impact: "Very High",
      description: "Establish inter-state collaboration framework for cross-border blue carbon initiatives",
      affectedProjects: 67,
      estimatedBenefit: "40% increase in project scale",
      status: "Implementation",
      deadline: "Mar 31, 2025"
    }
  ];

  const policyAnalysis = [
    { area: "Environmental Protection", compliance: 92, effectiveness: 88, gaps: 3, fill: "#3b82f6" },
    { area: "Community Engagement", compliance: 87, effectiveness: 91, gaps: 5, fill: "#10b981" },
    { area: "Economic Sustainability", compliance: 78, effectiveness: 82, gaps: 8, fill: "#f59e0b" },
    { area: "Technical Standards", compliance: 95, effectiveness: 89, gaps: 2, fill: "#ef4444" },
    { area: "International Alignment", compliance: 84, effectiveness: 86, gaps: 4, fill: "#8b5cf6" }
  ];

  const implementationProgress = [
    { policy: "Blue Carbon Strategy", progress: 85, phase: "Implementation", fill: "#3b82f6" },
    { policy: "Community Guidelines", progress: 92, phase: "Monitoring", fill: "#10b981" },
    { policy: "Credit Standards", progress: 67, phase: "Development", fill: "#f59e0b" },
    { policy: "Restoration Framework", progress: 78, phase: "Implementation", fill: "#ef4444" },
    { policy: "Cooperation Protocol", progress: 45, phase: "Planning", fill: "#8b5cf6" }
  ];

  const complianceChartConfig = {
    compliance: {
      label: "Compliance %",
      color: "#3b82f6",
    },
    effectiveness: {
      label: "Effectiveness %", 
      color: "#10b981",
    },
  } satisfies ChartConfig;

  const implementationChartConfig = {
    progress: {
      label: "Progress %",
      color: "#f59e0b",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Policy Analysis & Recommendations</h2>
          <p className="text-gray-600">Data-driven policy insights and strategic recommendations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Analysis
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Policy Report
          </Button>
        </div>
      </div>

      {/* Policy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {policyMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {metric.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                  <span className="text-2xl font-bold">
                    {typeof metric.count === 'number' && metric.count % 1 !== 0 ? metric.count : Math.floor(metric.count)}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Policy Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Strategic Policy Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {policyRecommendations.map((rec) => (
              <div key={rec.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-sm">{rec.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {rec.id}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{rec.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Affected Projects: </span>
                        <span className="font-medium">{rec.affectedProjects}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Estimated Benefit: </span>
                        <span className="font-medium">{rec.estimatedBenefit}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>Deadline: {rec.deadline}</span>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge 
                      variant={rec.priority === 'Critical' ? 'destructive' : 
                               rec.priority === 'High' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {rec.priority} Priority
                    </Badge>
                    <br />
                    <Badge variant="outline" className="text-xs">
                      {rec.impact} Impact
                    </Badge>
                    <br />
                    <Badge 
                      variant={rec.status === 'Approved' ? 'default' : 
                               rec.status === 'Implementation' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {rec.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Impact Analysis
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Policy Analysis & Implementation Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Policy Area Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <ChartContainer config={complianceChartConfig} className="h-[250px]">
                <BarChart data={policyAnalysis} layout="horizontal">
                  <XAxis 
                    type="number"
                    domain={[0, 100]}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    type="category"
                    dataKey="area"
                    tick={{ fontSize: 11 }}
                    width={120}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />
                  <Bar 
                    dataKey="compliance" 
                    fill="var(--color-compliance)"
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar 
                    dataKey="effectiveness" 
                    fill="var(--color-effectiveness)"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ChartContainer>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3b82f6" }} />
                  <span>Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10b981" }} />
                  <span>Effectiveness</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Total gaps identified: {policyAnalysis.reduce((sum, area) => sum + area.gaps, 0)}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Implementation Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={implementationChartConfig} className="h-[200px]">
              <BarChart data={implementationProgress}>
                <XAxis 
                  dataKey="policy" 
                  tick={{ fontSize: 10 }}
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={[0, 100]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Bar 
                  dataKey="progress" 
                  fill="var(--color-progress)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {implementationProgress.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{item.policy}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">{item.phase}</Badge>
                    <span className="font-medium">{item.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policy Impact Dashboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Policy Impact Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg bg-blue-50">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-blue-700">Community Impact</h3>
              <p className="text-2xl font-bold text-blue-800 mt-2">2.4M</p>
              <p className="text-sm text-blue-600">People Benefited</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-green-50">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-green-700">Economic Impact</h3>
              <p className="text-2xl font-bold text-green-800 mt-2">₹89.2Cr</p>
              <p className="text-sm text-green-600">Economic Value Generated</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-purple-50">
              <Target className="h-12 w-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-purple-700">Environmental Impact</h3>
              <p className="text-2xl font-bold text-purple-800 mt-2">567K</p>
              <p className="text-sm text-purple-600">Tons CO2 Sequestered</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};