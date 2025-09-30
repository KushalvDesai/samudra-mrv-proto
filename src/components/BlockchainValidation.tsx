import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertTriangle, 
  Clock,
  Hash,
  Search,
  Filter,
  Download,
  Eye,
  Shield,
  FileText,
  BarChart3,
  Layers,
  Lock
} from "lucide-react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const BlockchainValidation = () => {
  const validationStats = [
    { name: "Validated Transactions", count: "2,734", trend: "+98 today", color: "green" },
    { name: "Pending Validation", count: "23", trend: "+5 new", color: "yellow" },
    { name: "Failed Validations", count: "7", trend: "-2 this week", color: "red" },
    { name: "Validation Rate", count: "99.7%", trend: "+0.1%", color: "blue" }
  ];

  const validationQueue = [
    {
      txHash: "0xa1b2c3d4e5f6...",
      type: "Credit Issuance",
      projectId: "NCCR-2024-034",
      amount: "8,750 tCO₂",
      submittedBy: "0x123abc456...",
      timestamp: "2024-09-28 15:30:25",
      status: "validating",
      validator: "Validator Node 3",
      priority: "high",
      checks: {
        cryptographic: "passed",
        business: "in-progress",
        regulatory: "pending"
      }
    },
    {
      txHash: "0xb2c3d4e5f6a7...",
      type: "Credit Transfer",
      projectId: "NCCR-2024-019",
      amount: "3,200 tCO₂",
      submittedBy: "0x456def789...",
      timestamp: "2024-09-28 14:45:12",
      status: "under-review",
      validator: "Validator Node 1",
      priority: "medium",
      checks: {
        cryptographic: "passed",
        business: "passed",
        regulatory: "flagged"
      }
    },
    {
      txHash: "0xc3d4e5f6a7b8...",
      type: "Project Registration",
      projectId: "NCCR-2024-089",
      amount: "N/A",
      submittedBy: "0x789ghi012...",
      timestamp: "2024-09-28 13:20:08",
      status: "validated",
      validator: "Validator Node 2",
      priority: "low",
      checks: {
        cryptographic: "passed",
        business: "passed",
        regulatory: "passed"
      }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "validated":
        return "bg-green-100 text-green-800";
      case "validating":
        return "bg-blue-100 text-blue-800";
      case "under-review":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "validated":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "validating":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "under-review":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case "failed":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCheckColor = (check: string) => {
    switch (check) {
      case "passed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "flagged":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const validationNodes = [
    { id: "Node 1", status: "active", load: 78, region: "Mumbai", validations: 847 },
    { id: "Node 2", status: "active", load: 65, region: "Delhi", validations: 923 },
    { id: "Node 3", status: "active", load: 82, region: "Bangalore", validations: 756 },
    { id: "Node 4", status: "maintenance", load: 0, region: "Chennai", validations: 634 }
  ];

  const performanceMetrics = [
    { metric: "Validation Time", value: 74, display: "3.7 minutes", fill: "#3b82f6" },
    { metric: "Throughput", value: 84.7, display: "847 / 1,000", fill: "#10b981" },
    { metric: "Accuracy Rate", value: 99.7, display: "99.7%", fill: "#f59e0b" }
  ];

  const performanceChartConfig = {
    value: {
      label: "Performance %",
      color: "#3b82f6",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Blockchain Validation</h2>
          <p className="text-gray-600">Validate and verify blockchain transactions for carbon credit integrity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by transaction hash, project ID, or validator..." 
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
        {validationStats.map((stat) => (
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

      {/* Validation Process Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Validation Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium">Cryptographic Validation</h4>
                  <p className="text-sm text-gray-600">Digital signature and hash verification</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Business Logic Check</h4>
                  <p className="text-sm text-gray-600">Carbon credit rules and methodology validation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Regulatory Compliance</h4>
                  <p className="text-sm text-gray-600">NCCR and international standard compliance</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Validation Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={performanceChartConfig} className="h-[200px]">
              <BarChart data={performanceMetrics}>
                <XAxis 
                  dataKey="metric" 
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={[0, 100]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Bar 
                  dataKey="value" 
                  fill="var(--color-value)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {performanceMetrics.map((metric) => (
                <div key={metric.metric} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{metric.metric}</span>
                  <span className="font-medium">{metric.display}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Validation Nodes Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Hash className="h-5 w-5 text-primary" />
            Validation Nodes Status
          </CardTitle>
          <CardDescription>
            Real-time status of validation nodes across regions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {validationNodes.map((node) => (
              <Card key={node.id} className="border-2">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm">{node.id}</CardTitle>
                    <Badge className={node.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                      {node.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Load:</span>
                      <span>{node.load}%</span>
                    </div>
                    <Progress value={node.load} className="h-1" />
                    <div className="flex justify-between text-xs">
                      <span>Region:</span>
                      <span>{node.region}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Validations:</span>
                      <span>{node.validations}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Validation Queue */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Current Validation Queue
          </CardTitle>
          <CardDescription>
            Transactions currently being validated or pending review
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {validationQueue.map((item) => (
              <div key={item.txHash} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold font-mono text-sm">{item.txHash}</h3>
                      <Badge className={getStatusColor(item.status)}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1">{item.status.replace('-', ' ')}</span>
                      </Badge>
                      <Badge className={getPriorityColor(item.priority)}>
                        {item.priority.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className="ml-1 font-medium">{item.type}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Project:</span>
                        <span className="ml-1 font-medium">{item.projectId}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Amount:</span>
                        <span className="ml-1 font-medium">{item.amount}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Validator:</span>
                        <span className="ml-1 font-medium">{item.validator}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">Checks:</span>
                        <Badge variant="outline" className={`text-xs ${getCheckColor(item.checks.cryptographic)}`}>
                          Crypto: {item.checks.cryptographic}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getCheckColor(item.checks.business)}`}>
                          Business: {item.checks.business}
                        </Badge>
                        <Badge variant="outline" className={`text-xs ${getCheckColor(item.checks.regulatory)}`}>
                          Regulatory: {item.checks.regulatory}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Submitted: {item.timestamp}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Lock className="h-4 w-4 mr-1" />
                      Validate
                    </Button>
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