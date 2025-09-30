import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FileSearch, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Calendar,
  User,
  Building,
  Award,
  TrendingUp,
  Download,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ComplianceAudits = () => {
  const auditStats = [
    { label: "Completed Audits", count: 89, change: "+12%", icon: CheckCircle, color: "text-green-500" },
    { label: "Ongoing Audits", count: 15, change: "+3", icon: Clock, color: "text-blue-500" },
    { label: "Scheduled Audits", count: 23, change: "+8", icon: Calendar, color: "text-orange-500" },
    { label: "Audit Score Avg", count: 87.5, change: "+2.3%", icon: Award, color: "text-purple-500" }
  ];

  const recentAudits = [
    {
      id: "AUD-2024-089",
      project: "Sundarbans Mangrove Restoration Phase II",
      auditor: "Dr. Priya Sharma",
      organization: "Environmental Compliance Board",
      startDate: "Dec 18, 2024",
      endDate: "Dec 22, 2024",
      status: "Completed",
      score: 92,
      findings: 3,
      criticalIssues: 0
    },
    {
      id: "AUD-2024-090",
      project: "Chilika Lake Ecosystem Recovery",
      auditor: "Shri Rajesh Kumar",
      organization: "Marine Audit Institute",
      startDate: "Dec 20, 2024",
      endDate: "Dec 24, 2024",
      status: "In Progress",
      score: null,
      findings: null,
      criticalIssues: null
    },
    {
      id: "AUD-2024-088",
      project: "Pulicat Lake Conservation Initiative",
      auditor: "Smt. Anita Desai",
      organization: "Coastal Compliance Authority",
      startDate: "Dec 15, 2024",
      endDate: "Dec 19, 2024",
      status: "Completed",
      score: 78,
      findings: 8,
      criticalIssues: 2
    },
    {
      id: "AUD-2024-091",
      project: "Kerala Backwater Restoration",
      auditor: "Dr. Suresh Menon",
      organization: "Wildlife Compliance Board",
      startDate: "Dec 23, 2024",
      endDate: "Dec 27, 2024",
      status: "Scheduled",
      score: null,
      findings: null,
      criticalIssues: null
    }
  ];

  const complianceMetrics = [
    { metric: "Methodology Compliance", score: 94, target: 90 },
    { metric: "Documentation Quality", score: 87, target: 85 },
    { metric: "Environmental Standards", score: 91, target: 88 },
    { metric: "Community Engagement", score: 83, target: 80 },
    { metric: "Data Verification", score: 89, target: 85 }
  ];

  const auditFindings = [
    { category: "Documentation", count: 23, severity: "Minor", trend: "-15%" },
    { category: "Methodology", count: 12, severity: "Moderate", trend: "-8%" },
    { category: "Environmental", count: 8, severity: "Major", trend: "-25%" },
    { category: "Community", count: 15, severity: "Minor", trend: "+5%" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Compliance Audits</h2>
          <p className="text-gray-600">Comprehensive audit management and compliance monitoring</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Audit
          </Button>
        </div>
      </div>

      {/* Audit Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {auditStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  <span className="text-2xl font-bold">{typeof stat.count === 'number' && stat.count % 1 !== 0 ? stat.count : Math.floor(stat.count)}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Audits */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileSearch className="h-5 w-5 text-primary" />
            Recent Audit Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAudits.map((audit) => (
              <div key={audit.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-sm">{audit.project}</h3>
                      <Badge variant="outline" className="text-xs">
                        {audit.id}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{audit.auditor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{audit.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <span>{audit.startDate} - {audit.endDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={audit.status === 'Completed' ? 'default' : 
                               audit.status === 'In Progress' ? 'secondary' : 'outline'}
                      className="mb-2"
                    >
                      {audit.status}
                    </Badge>
                    {audit.score && (
                      <div className="text-sm">
                        <p className="font-bold">Score: {audit.score}/100</p>
                        <p className="text-xs text-gray-500">
                          {audit.findings} findings, {audit.criticalIssues} critical
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
                  {audit.status === 'Completed' && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Metrics & Findings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Compliance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{metric.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{metric.score}%</span>
                      {metric.score >= metric.target ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                      )}
                    </div>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                  <div className="text-xs text-gray-500">
                    Target: {metric.target}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Audit Findings Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {auditFindings.map((finding, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{finding.category}</h4>
                    <p className="text-xs text-gray-500">
                      {finding.count} findings • {finding.severity} severity
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={finding.severity === 'Minor' ? 'outline' : 
                               finding.severity === 'Moderate' ? 'secondary' : 'destructive'}
                      className="text-xs mb-1"
                    >
                      {finding.severity}
                    </Badge>
                    <p className={`text-xs ${finding.trend.startsWith('-') ? 'text-green-600' : 'text-orange-600'}`}>
                      {finding.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};