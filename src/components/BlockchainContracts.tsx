import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileCode, 
  PlayCircle, 
  PauseCircle,
  CheckCircle,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Code,
  Settings,
  Shield
} from "lucide-react";

export const BlockchainContracts = () => {
  const contractStats = [
    { name: "Deployed Contracts", count: "47", trend: "+3 this month", color: "blue" },
    { name: "Active Contracts", count: "42", trend: "+2 this week", color: "green" },
    { name: "Total Executions", count: "12,847", trend: "+234 today", color: "purple" },
    { name: "Gas Optimizations", count: "15%", trend: "improvement", color: "yellow" }
  ];

  const smartContracts = [
    {
      name: "CarbonCreditRegistry",
      address: "0x1a2b3c4d5e6f...",
      version: "v2.1.0",
      deployed: "2024-08-15",
      status: "active",
      executions: 2847,
      gasUsage: "Low",
      lastActivity: "2024-09-28 14:30:25",
      functions: ["issueCredits", "transferCredits", "retireCredits", "getBalance"]
    },
    {
      name: "ProjectValidation",
      address: "0x2b3c4d5e6f7a...",
      version: "v1.8.5",
      deployed: "2024-07-22",
      status: "active",
      executions: 1456,
      gasUsage: "Medium",
      lastActivity: "2024-09-28 12:15:08",
      functions: ["validateProject", "approveMethodology", "updateStatus", "getValidation"]
    },
    {
      name: "StakeholderGovernance",
      address: "0x3c4d5e6f7a8b...",
      version: "v1.2.3",
      deployed: "2024-09-01",
      status: "testing",
      executions: 89,
      gasUsage: "High",
      lastActivity: "2024-09-27 16:45:33",
      functions: ["proposeVote", "castVote", "executeProposal", "getVoteResults"]
    },
    {
      name: "AutomatedReporting",
      address: "0x4d5e6f7a8b9c...",
      version: "v3.0.1",
      deployed: "2024-09-10",
      status: "paused",
      executions: 567,
      gasUsage: "Low",
      lastActivity: "2024-09-26 09:30:12",
      functions: ["generateReport", "scheduleReport", "validateData", "publishReport"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "testing":
        return "bg-blue-100 text-blue-800";
      case "paused":
        return "bg-yellow-100 text-yellow-800";
      case "deprecated":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <PlayCircle className="w-4 h-4 text-green-600" />;
      case "testing":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "paused":
        return <PauseCircle className="w-4 h-4 text-yellow-600" />;
      case "deprecated":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getGasColor = (usage: string) => {
    switch (usage) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Smart Contracts Management</h2>
          <p className="text-sm sm:text-base text-gray-600">Deploy, monitor, and manage smart contracts for carbon credit automation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Filter
          </Button>
          <Button size="sm" className="text-xs sm:text-sm">
            <Code className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Deploy Contract
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by contract name, address, or function..." 
            className="w-full text-sm"
          />
        </div>
        <Button className="text-sm">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {contractStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold">{stat.count}</span>
                <Badge variant="outline" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Contract Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Pre-built templates for common carbon credit operations
            </p>
            <Button variant="outline" className="w-full text-sm">
              Browse Templates
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Security Audit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Automated security analysis and vulnerability scanning
            </p>
            <Button variant="outline" className="w-full text-sm">
              Run Audit
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Gas Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Analyze and optimize contract gas consumption
            </p>
            <Button variant="outline" className="w-full text-sm">
              Optimize
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <FileCode className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Generate technical documentation and API references
            </p>
            <Button variant="outline" className="w-full text-sm">
              Generate Docs
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Smart Contracts List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-primary" />
            Deployed Smart Contracts
          </CardTitle>
          <CardDescription>
            Currently deployed and managed smart contracts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {smartContracts.map((contract) => (
              <div key={contract.address} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-base sm:text-lg">{contract.name}</h3>
                      <Badge variant="outline" className="text-xs">{contract.version}</Badge>
                      <Badge className={getStatusColor(contract.status)}>
                        {getStatusIcon(contract.status)}
                        <span className="ml-1 text-xs">{contract.status}</span>
                      </Badge>
                      <Badge className={getGasColor(contract.gasUsage)}>
                        <span className="text-xs">{contract.gasUsage} Gas</span>
                      </Badge>
                    </div>
                    <p className="font-mono text-xs sm:text-sm text-gray-600 break-all">{contract.address}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Deployed:</span>
                        <span className="ml-1 font-medium block sm:inline">{contract.deployed}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Executions:</span>
                        <span className="ml-1 font-medium block sm:inline">{contract.executions.toLocaleString()}</span>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <span className="text-gray-500">Last Activity:</span>
                        <span className="ml-1 font-medium block sm:inline text-xs lg:text-sm">{contract.lastActivity}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Functions:</span>
                        <span className="ml-1 font-medium block sm:inline">{contract.functions.length}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {contract.functions.slice(0, 3).map((func) => (
                        <Badge key={func} variant="secondary" className="text-xs">
                          {func}()
                        </Badge>
                      ))}
                      {contract.functions.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{contract.functions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-2 lg:min-w-fit">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">View</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <Settings className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">Configure</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <Download className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">Export</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contract Performance */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Execution Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Average Execution Time</span>
                  <span>2.3s</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Success Rate</span>
                  <span>99.7%</span>
                </div>
                <Progress value={99.7} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Gas Efficiency</span>
                  <span>92.1%</span>
                </div>
                <Progress value={92.1} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Contract Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Security Score</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  98/100
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Code Coverage</span>
                <Badge variant="secondary">95.2%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Audit</span>
                <Badge variant="secondary">2024-09-15</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Upgrade Available</span>
                <Badge className="bg-blue-100 text-blue-800">
                  2 Contracts
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};