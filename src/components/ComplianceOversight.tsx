import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  TrendingDown,
  Search,
  Filter,
  Download,
  Eye,
  FileText,
  BarChart3,
  Users
} from "lucide-react";

export const ComplianceOversight = () => {
  const complianceStats = [
    { name: "Compliant Projects", count: 156, trend: "+8%", color: "green" },
    { name: "Under Review", count: 23, trend: "+12", color: "blue" },
    { name: "Non-Compliance Issues", count: 7, trend: "-3", color: "red" },
    { name: "Resolved This Month", count: 45, trend: "+15%", color: "purple" }
  ];

  const complianceIssues = [
    {
      projectId: "NCCR-2024-045",
      projectName: "Konkan Mangrove Conservation",
      issueType: "Reporting Delay",
      severity: "medium",
      daysOverdue: 15,
      assignedTo: "Compliance Team Alpha",
      status: "investigating",
      deadline: "2024-10-15"
    },
    {
      projectId: "NCCR-2024-023",
      projectName: "Andhra Pradesh Seagrass Restoration",
      issueType: "Methodology Deviation",
      severity: "high",
      daysOverdue: 8,
      assignedTo: "Scientific Review Board",
      status: "pending-response",
      deadline: "2024-10-10"
    },
    {
      projectId: "NCCR-2024-067",
      projectName: "Kerala Backwater Protection",
      issueType: "Monitoring Gap",
      severity: "low",
      daysOverdue: 22,
      assignedTo: "Field Monitoring Unit",
      status: "resolved",
      deadline: "2024-09-28"
    }
  ];

  const getIssueColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800";
      case "investigating":
        return "bg-blue-100 text-blue-800";
      case "pending-response":
        return "bg-yellow-100 text-yellow-800";
      case "escalated":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "investigating":
        return <Clock className="w-4 w-4 text-blue-600" />;
      case "pending-response":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const complianceMetrics = [
    { metric: "Overall Compliance Rate", value: 94.2, target: 95.0 },
    { metric: "Timely Reporting", value: 87.8, target: 90.0 },
    { metric: "Methodology Adherence", value: 96.5, target: 95.0 },
    { metric: "Monitoring Coverage", value: 89.3, target: 88.0 }
  ];

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Compliance Oversight</h2>
          <p className="text-sm sm:text-base text-gray-600">Monitor project compliance and regulatory adherence</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Filter Issues
          </Button>
          <Button size="sm" className="text-xs sm:text-sm">
            <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by project ID, issue type, or assigned team..." 
            className="w-full text-sm"
          />
        </div>
        <Button className="text-sm">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {complianceStats.map((stat) => (
          <Card key={stat.name} className="h-full flex flex-col">
            <CardHeader className="pb-3 flex-shrink-0">
              <CardDescription className="text-sm font-medium leading-tight min-h-[2.5rem] flex items-center">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between pt-1">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-bold leading-none">{stat.count}</span>
                <div className="flex items-center gap-1 ml-2">
                  {stat.trend.startsWith('+') ? (
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-red-600" />
                  )}
                  <Badge variant="outline" className="text-xs shrink-0">
                    {stat.trend}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compliance Metrics */}
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="flex-1">Key Compliance Metrics</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Performance against compliance targets
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {complianceMetrics.map((metric) => (
              <div key={metric.metric} className="space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-700">{metric.metric}</span>
                  <span className="font-semibold text-gray-900">
                    {metric.value}% (Target: {metric.target}%)
                  </span>
                </div>
                <Progress 
                  value={metric.value} 
                  className="h-2.5" 
                />
                <div className="flex justify-end">
                  {metric.value >= metric.target ? (
                    <Badge className="bg-green-100 text-green-800 text-xs font-semibold">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Target Met
                    </Badge>
                  ) : (
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      Below Target
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Issues */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="flex-1">Active Compliance Issues</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Current compliance issues requiring attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceIssues.map((issue) => (
              <div key={issue.projectId} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg">{issue.projectId}</h3>
                      <Badge className={getIssueColor(issue.severity)}>
                        {issue.severity.toUpperCase()}
                      </Badge>
                      <Badge className={getStatusColor(issue.status)}>
                        {getStatusIcon(issue.status)}
                        <span className="ml-1 text-xs">{issue.status.replace('-', ' ')}</span>
                      </Badge>
                    </div>
                    <h4 className="font-medium text-gray-900">{issue.projectName}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 font-medium">Issue Type:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{issue.issueType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Days Overdue:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{issue.daysOverdue}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Assigned To:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{issue.assignedTo}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Deadline:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{issue.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-2 lg:min-w-fit">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">Details</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <FileText className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">Report</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Generate Compliance Report</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Create comprehensive compliance status reports for stakeholders
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Generate Report
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Compliance Training</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Access training materials and guidelines for project implementers
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              View Training
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Issue Escalation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <p className="text-sm text-gray-600 mb-4 leading-relaxed min-h-[2.5rem] flex items-start">
              Escalate critical compliance issues to regulatory authorities
            </p>
            <Button variant="outline" className="w-full text-sm mt-auto">
              Escalate Issue
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};