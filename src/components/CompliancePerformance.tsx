import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  FileSearch,
  TrendingUp,
  BarChart3,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const CompliancePerformance = () => {
  const performanceMetrics = [
    { metric: "Compliance Rate", value: 94.2, target: 95, unit: "%" },
    { metric: "Response Time", value: 2.3, target: 3, unit: "days" },
    { metric: "Documentation Score", value: 87.5, target: 90, unit: "%" },
    { metric: "Audit Pass Rate", value: 91.7, target: 85, unit: "%" }
  ];

  const monthlyTrends = [
    { month: "Sep", compliance: 92, response: 2.8, documentation: 85 },
    { month: "Oct", compliance: 93, response: 2.5, documentation: 86 },
    { month: "Nov", compliance: 94, response: 2.3, documentation: 87 },
    { month: "Dec", compliance: 94, response: 2.1, documentation: 88 }
  ];

  const recentAudits = [
    { project: "Sundarbans Mangrove Initiative", score: 95, status: "Passed", date: "Dec 15, 2024" },
    { project: "Chilika Lake Restoration", score: 88, status: "Passed", date: "Dec 10, 2024" },
    { project: "Pulicat Lake Conservation", score: 92, status: "Passed", date: "Dec 5, 2024" },
    { project: "Bhitarkanika Restoration", score: 78, status: "Conditional", date: "Nov 28, 2024" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Performance Monitoring</h2>
          <p className="text-gray-600">Real-time compliance and performance analytics</p>
        </div>
        <Button>
          <BarChart3 className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {performanceMetrics.map((metric) => (
          <Card key={metric.metric}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {metric.metric}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{metric.value}{metric.unit}</span>
                  {metric.value >= metric.target ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  )}
                </div>
                <div className="text-xs text-gray-500">
                  Target: {metric.target}{metric.unit}
                </div>
                <Progress 
                  value={Math.min((metric.value / metric.target) * 100, 100)} 
                  className="h-2" 
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyTrends.map((month) => (
                <div key={month.month} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{month.month} 2024</span>
                    <Badge variant="outline">{month.compliance}% Compliance</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Compliance</p>
                      <p className="font-medium">{month.compliance}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Response Time</p>
                      <p className="font-medium">{month.response} days</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Documentation</p>
                      <p className="font-medium">{month.documentation}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileSearch className="h-5 w-5 text-primary" />
              Recent Audit Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAudits.map((audit) => (
                <div key={audit.project} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{audit.project}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{audit.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{audit.score}/100</p>
                    <Badge 
                      variant={audit.status === 'Passed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {audit.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Current Compliance Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg bg-green-50">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-green-700">156</h3>
              <p className="text-sm text-green-600">Fully Compliant Projects</p>
            </div>
            <div className="text-center p-4 border rounded-lg bg-orange-50">
              <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-orange-700">23</h3>
              <p className="text-sm text-orange-600">Pending Review</p>
            </div>
            <div className="text-center p-4 border rounded-lg bg-red-50">
              <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-bold text-lg text-red-700">8</h3>
              <p className="text-sm text-red-600">Requires Action</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};