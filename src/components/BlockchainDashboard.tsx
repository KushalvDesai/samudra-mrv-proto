import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Hash, 
  Coins,
  FileText,
  Activity,
  ExternalLink
} from "lucide-react";

interface BlockchainDashboardProps {
  activeTab: string;
}

// Mock blockchain data
const transactions = [
  {
    id: "0x1a2b3c...",
    type: "Carbon Credit Mint",
    amount: "250 CO₂ tons",
    project: "Mangrove Restoration - Tamil Nadu",
    status: "confirmed",
    timestamp: "2024-09-30 14:30:25",
    gasUsed: "0.0023 ETH",
    blockNumber: 18942156
  },
  {
    id: "0x4d5e6f...",
    type: "Verification Update",
    amount: "N/A",
    project: "Seagrass Beds - Kerala",
    status: "pending",
    timestamp: "2024-09-30 14:28:12",
    gasUsed: "0.0015 ETH",
    blockNumber: 18942154
  },
  {
    id: "0x7g8h9i...",
    type: "Token Transfer",
    amount: "100 CO₂ tons",
    project: "Coral Reef - Andaman",
    status: "confirmed",
    timestamp: "2024-09-30 14:25:08",
    gasUsed: "0.0018 ETH",
    blockNumber: 18942152
  }
];

const smartContracts = [
  {
    address: "0xCarbonCredit...",
    name: "Blue Carbon Token (BCT)",
    type: "ERC-721",
    function: "Carbon Credit NFT",
    status: "active",
    deployedAt: "2024-08-15",
    totalSupply: "45,832 tokens"
  },
  {
    address: "0xVerification...",
    name: "Verification Registry",
    type: "Registry",
    function: "MRV Data Storage",
    status: "active",
    deployedAt: "2024-08-15",
    totalSupply: "N/A"
  },
  {
    address: "0xMarketplace...",
    name: "Carbon Marketplace",
    type: "Trading",
    function: "Credit Trading",
    status: "active",
    deployedAt: "2024-08-20",
    totalSupply: "N/A"
  }
];

const validationQueue = [
  {
    id: "VAL-001",
    project: "Mangrove Restoration - Tamil Nadu",
    dataType: "Drone Survey Data",
    submittedBy: "Coastal Panchayat TN",
    status: "validating",
    priority: "high",
    estimatedTime: "5 minutes"
  },
  {
    id: "VAL-002",
    project: "Salt Marsh - Gujarat",
    dataType: "IoT Sensor Data",
    submittedBy: "NGO EcoMarine",
    status: "queued",
    priority: "medium",
    estimatedTime: "12 minutes"
  },
  {
    id: "VAL-003",
    project: "Seagrass Beds - Kerala",
    dataType: "Field Survey Report",
    submittedBy: "Marine Biologist",
    status: "queued",
    priority: "low",
    estimatedTime: "20 minutes"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed": case "active": case "validating":
      return "bg-green-100 text-green-800";
    case "pending": case "queued":
      return "bg-yellow-100 text-yellow-800";
    case "failed": case "inactive":
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

export const BlockchainDashboard = ({ activeTab }: BlockchainDashboardProps) => {
  const renderTransactions = () => (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Blockchain Transactions</h2>
        <Button className="text-xs sm:text-sm">
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          View on Explorer
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <Card className="h-full flex flex-col">
          <CardContent className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Total Transactions</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">1,247</p>
              </div>
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0 ml-2" />
            </div>
          </CardContent>
        </Card>
        <Card className="h-full flex flex-col">
          <CardContent className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Pending</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">3</p>
              </div>
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 flex-shrink-0 ml-2" />
            </div>
          </CardContent>
        </Card>
        <Card className="h-full flex flex-col">
          <CardContent className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Gas Used Today</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">0.125 ETH</p>
              </div>
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 ml-2" />
            </div>
          </CardContent>
        </Card>
        <Card className="h-full flex flex-col">
          <CardContent className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 font-medium mb-1">Success Rate</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">99.8%</p>
              </div>
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 ml-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Hash className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{tx.type}</p>
                    <p className="text-sm text-gray-500">{tx.project}</p>
                    <p className="text-xs text-gray-400">{tx.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(tx.status)}>
                    {tx.status}
                  </Badge>
                  <p className="text-sm text-gray-500 mt-1">{tx.amount}</p>
                  <p className="text-xs text-gray-400">{tx.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSmartContracts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Smart Contracts</h2>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Deploy New Contract
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {smartContracts.map((contract, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{contract.name}</span>
                <Badge className={getStatusColor(contract.status)}>
                  {contract.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Contract Address</p>
                  <p className="text-xs font-mono text-gray-900">{contract.address}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="text-sm text-gray-900">{contract.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Function</p>
                  <p className="text-sm text-gray-900">{contract.function}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Deployed</p>
                  <p className="text-sm text-gray-900">{contract.deployedAt}</p>
                </div>
                {contract.totalSupply !== "N/A" && (
                  <div>
                    <p className="text-sm text-gray-600">Total Supply</p>
                    <p className="text-sm text-gray-900">{contract.totalSupply}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderValidation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Blockchain Validation Queue</h2>
        <Button>
          <Shield className="w-4 h-4 mr-2" />
          Validation Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Queue Length</p>
                <p className="text-2xl font-bold text-gray-900">{validationQueue.length}</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Processing</p>
                <p className="text-2xl font-bold text-gray-900">1</p>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Processing Time</p>
                <p className="text-2xl font-bold text-gray-900">8 min</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-gray-900">96.7%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Validation Queue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {validationQueue.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.project}</p>
                    <p className="text-sm text-gray-500">{item.dataType}</p>
                    <p className="text-xs text-gray-400">By: {item.submittedBy}</p>
                  </div>
                </div>
                <div className="text-right space-y-1">
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                  <Badge className={getPriorityColor(item.priority)}>
                    {item.priority}
                  </Badge>
                  <p className="text-xs text-gray-400">ETA: {item.estimatedTime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  switch (activeTab) {
    case "blockchain-transactions":
      return renderTransactions();
    case "blockchain-contracts":
      return renderSmartContracts();
    case "blockchain-validation":
      return renderValidation();
    default:
      return renderTransactions();
  }
};