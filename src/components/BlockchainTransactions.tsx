import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Hash, 
  ArrowUpRight, 
  ArrowDownLeft,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Eye,
  TrendingUp,
  DollarSign,
  Users
} from "lucide-react";

export const BlockchainTransactions = () => {
  const transactionStats = [
    { name: "Total Transactions", count: "2,847", trend: "+156 today", color: "blue" },
    { name: "Credits Issued", count: "1,234,567", trend: "+12,450 this week", color: "green" },
    { name: "Credits Transferred", count: "789,123", trend: "+8,790 this week", color: "purple" },
    { name: "Pending Verification", count: "23", trend: "+5 today", color: "yellow" }
  ];

  const recentTransactions = [
    {
      txHash: "0xa1b2c3d4...",
      type: "Credit Issuance",
      projectId: "NCCR-2024-001",
      amount: "12,250 tCO₂",
      from: "NCCR Registry",
      to: "0x456def789...",
      timestamp: "2024-09-28 14:30:25",
      status: "confirmed",
      gasUsed: "21,000",
      blockNumber: "18,234,567"
    },
    {
      txHash: "0xe5f6g7h8...",
      type: "Credit Transfer", 
      projectId: "NCCR-2024-015",
      amount: "5,500 tCO₂",
      from: "0x123abc456...",
      to: "0x789ghi012...",
      timestamp: "2024-09-28 13:45:12",
      status: "confirmed",
      gasUsed: "18,500",
      blockNumber: "18,234,542"
    },
    {
      txHash: "0xi9j0k1l2...",
      type: "Credit Retirement",
      projectId: "NCCR-2024-008",
      amount: "3,200 tCO₂",
      from: "0x345cde678...",
      to: "Retirement Pool",
      timestamp: "2024-09-28 12:15:08",
      status: "pending",
      gasUsed: "-",
      blockNumber: "-"
    }
  ];

  const getTransactionTypeColor = (type: string) => {
    switch (type) {
      case "Credit Issuance":
        return "bg-green-100 text-green-800";
      case "Credit Transfer":
        return "bg-blue-100 text-blue-800";
      case "Credit Retirement":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "failed":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">Blockchain Transactions</h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Monitor and track all carbon credit transactions on the blockchain</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="text-xs sm:text-sm">
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button size="sm" className="text-xs sm:text-sm">
            <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Export Data</span>
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search by transaction hash, project ID, or address..." 
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
        {transactionStats.map((stat) => (
          <Card key={stat.name} className="h-full flex flex-col min-h-[140px]">
            <CardHeader className="pb-3 flex-shrink-0">
              <CardDescription className="text-sm font-medium text-gray-600 min-h-[2.5rem] leading-tight flex items-center">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center pt-0">
              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {stat.count}
                </div>
                <Badge variant="outline" className="text-xs text-gray-600 w-fit">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Network Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <Hash className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Network Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Block Height</span>
                <Badge variant="secondary" className="text-xs font-semibold">18,234,567</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Gas Price</span>
                <Badge variant="secondary" className="text-xs font-semibold">25 Gwei</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Network Status</span>
                <Badge className="bg-green-100 text-green-800 text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Healthy
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Transaction Volume</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Daily Volume</span>
                  <span className="font-semibold text-gray-900">156 transactions</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Weekly Target</span>
                  <span className="font-semibold text-gray-900">1,092 / 1,400</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-4 flex-shrink-0">
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
              <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
              <span className="flex-1">Credit Statistics</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col justify-between pt-0">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Credits in Circulation</span>
                <Badge variant="secondary" className="text-xs font-semibold">2.34M tCO₂</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Credits Retired</span>
                <Badge variant="secondary" className="text-xs font-semibold">456K tCO₂</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Active Holders</span>
                <Badge variant="secondary" className="text-xs font-semibold">1,247</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
            <Hash className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <span className="flex-1">Recent Transactions</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Latest blockchain transactions for carbon credits
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((tx) => (
              <div key={tx.txHash} className="border rounded-lg p-3 sm:p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold font-mono text-sm sm:text-base">{tx.txHash}</h3>
                      <Badge className={getTransactionTypeColor(tx.type)}>
                        {tx.type}
                      </Badge>
                      <Badge className={getStatusColor(tx.status)}>
                        {getStatusIcon(tx.status)}
                        <span className="ml-1 text-xs">{tx.status}</span>
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 font-medium">Project:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{tx.projectId}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Amount:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{tx.amount}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">From:</span>
                        <span className="ml-1 font-mono text-xs text-gray-900 block sm:inline break-all">{tx.from}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">To:</span>
                        <span className="ml-1 font-mono text-xs text-gray-900 block sm:inline break-all">{tx.to}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Time:</span>
                        <span className="ml-1 font-semibold text-gray-900 block sm:inline">{tx.timestamp}</span>
                      </div>
                    </div>
                    {tx.status === "confirmed" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm text-gray-500">
                        <div>
                          <span className="font-medium">Block:</span>
                          <span className="ml-1 font-semibold text-gray-900">{tx.blockNumber}</span>
                        </div>
                        <div>
                          <span className="font-medium">Gas Used:</span>
                          <span className="ml-1 font-semibold text-gray-900">{tx.gasUsed}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row lg:flex-col gap-2 lg:min-w-fit">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-xs">
                      <Eye className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                      <span className="hidden sm:inline">Details</span>
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