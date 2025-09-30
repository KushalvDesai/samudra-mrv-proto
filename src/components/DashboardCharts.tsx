import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, TreePine, Smartphone, Shield, Waves } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Mock data for Blue Carbon charts
const carbonSequestrationData = [
  { month: "Jan", thisYear: 120, lastYear: 98 },
  { month: "Feb", thisYear: 185, lastYear: 156 },
  { month: "Mar", thisYear: 234, lastYear: 210 },
  { month: "Apr", thisYear: 298, lastYear: 267 },
  { month: "May", thisYear: 367, lastYear: 334 },
  { month: "Jun", thisYear: 445, lastYear: 389 },
  { month: "Jul", thisYear: 523, lastYear: 456 },
  { month: "Aug", thisYear: 601, lastYear: 512 },
  { month: "Sep", thisYear: 678, lastYear: 578 },
  { month: "Oct", thisYear: 742, lastYear: 634 },
  { month: "Nov", thisYear: 834, lastYear: 703 },
  { month: "Dec", thisYear: 927, lastYear: 789 }
];

const restorationSitesData = [
  { name: "Mangrove Restoration\nTamil Nadu", area: 2847, shortName: "Mangrove" },
  { name: "Seagrass Beds\nKerala", area: 1932, shortName: "Seagrass" },
  { name: "Salt Marsh\nGujarat", area: 1534, shortName: "Salt Marsh" },
  { name: "Coral Reefs\nAndaman", area: 1789, shortName: "Coral Reefs" }
];

const fieldDataSourcesData = [
  { device: "Mobile App", count: 3847, percentage: 47.4, color: "#3b82f6" },
  { device: "Drone Data", count: 2432, percentage: 30.0, color: "#10b981" },
  { device: "IoT Sensors", count: 1841, percentage: 22.6, color: "#8b5cf6" }
];

const projectStatusData = [
  { location: "Tamil Nadu", count: 23, percentage: 42, color: "#3b82f6" },
  { location: "Kerala", count: 15, percentage: 28, color: "#10b981" },
  { location: "Gujarat", count: 10, percentage: 18, color: "#8b5cf6" },
  { location: "Andaman & Nicobar", count: 7, percentage: 12, color: "#f59e0b" }
];

// Recharts Line Chart component
const CarbonSequestrationChart = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={carbonSequestrationData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 11 }}
            stroke="#6b7280"
          />
          <YAxis 
            tick={{ fontSize: 11 }}
            stroke="#6b7280"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '12px'
            }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
          />
          <Line 
            type="monotone" 
            dataKey="thisYear" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 3 }}
            name="This Year"
          />
          <Line 
            type="monotone" 
            dataKey="lastYear" 
            stroke="#9ca3af" 
            strokeWidth={2}
            dot={{ fill: '#9ca3af', strokeWidth: 2, r: 3 }}
            name="Last Year"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Restoration Sites component using Recharts BarChart
const RestorationSites = () => (
  <Card className="h-full flex flex-col">
    <CardHeader className="flex-shrink-0 pb-3">
      <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
        <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
        <span>Restoration Sites by Area</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 pt-0">
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={restorationSitesData} layout="horizontal" margin={{ top: 20, right: 20, left: 60, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis 
              type="number"
              tick={{ fontSize: 11 }}
              stroke="#6b7280"
            />
            <YAxis 
              type="category"
              dataKey="shortName"
              tick={{ fontSize: 10 }}
              stroke="#6b7280"
              width={50}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value.toLocaleString()} hectares`, 'Area']}
            />
            <Bar dataKey="area" fill="#10b981" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

// Field Data Sources component using Recharts PieChart
const FieldDataSources = () => (
  <Card className="h-full flex flex-col">
    <CardHeader className="flex-shrink-0 pb-3">
      <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
        <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        <span>Field Data Sources</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 pt-0">
      <div className="flex-1 min-h-[200px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={fieldDataSourcesData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={75}
              dataKey="count"
            >
              {fieldDataSourcesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={(value) => [`${value.toLocaleString()} submissions`, 'Count']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-shrink-0 mt-3">
        <div className="text-center">
          <span className="text-xs sm:text-sm text-blue-600 font-medium">
            Mobile App: 47.4%
          </span>
        </div>
        <div className="flex justify-center mt-2 space-x-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-600">Data: 30%</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="text-gray-600">IoT Sensors</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Project Status by State component using Recharts PieChart
const ProjectStatusByState = () => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex-shrink-0 pb-3">
        <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
          <Waves className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span>Projects by State</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 pt-0">
        <div className="flex-1 min-h-[120px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={55}
                dataKey="count"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '12px'
                }}
                formatter={(value) => [`${value} projects`, 'Count']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex-shrink-0 space-y-2 mt-3">
          {projectStatusData.map((location, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2 flex-1 min-w-0">
                <div 
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: location.color }}
                ></div>
                <span className="text-xs sm:text-sm text-gray-700 truncate font-medium">{location.location}</span>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <p className="text-xs sm:text-sm font-medium text-gray-900">{location.percentage}%</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{location.count}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const DashboardCharts = () => {
  return (
    <div className="h-full flex flex-col space-y-4 sm:space-y-6">
      {/* Main Line Chart - Carbon Sequestration Analytics */}
      <div className="flex-1 min-h-[350px] sm:min-h-[400px]">
        <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0 pb-3">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
              <span>Carbon Sequestration Analytics (CO₂ Tons)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 pt-0">
            <div className="flex-1 min-h-[250px]">
              <CarbonSequestrationChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts Grid - Blue Carbon Metrics */}
      <div className="flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <div className="h-[320px] sm:h-[350px]">
            <RestorationSites />
          </div>
          <div className="h-[320px] sm:h-[350px]">
            <FieldDataSources />
          </div>
          <div className="h-[320px] sm:h-[350px] md:col-span-2 xl:col-span-1">
            <ProjectStatusByState />
          </div>
        </div>
      </div>
    </div>
  );
};