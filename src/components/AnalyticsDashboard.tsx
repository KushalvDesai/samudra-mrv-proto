import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Target, 
  Calendar,
  Leaf
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

const ProjectMetrics = () => {
  const projectCompletionData = [
    { month: "January", completed: 85 },
    { month: "February", completed: 92 },
    { month: "March", completed: 78 },
    { month: "April", completed: 95 },
  ];

  const sitesData = [
    { site: "Sundarbans East", ndvi: 0.85, status: "Excellent", change: "+12%" },
    { site: "Chilika Lagoon", ndvi: 0.78, status: "Good", change: "+8%" },
    { site: "Pichavaram", ndvi: 0.72, status: "Good", change: "+5%" },
    { site: "Godavari Delta", ndvi: 0.68, status: "Fair", change: "-2%" }
  ];

  const completionChartConfig = {
    completed: {
      label: "Completion %",
      color: "hsl(217, 91%, 60%)",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <Card className="h-full flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
            <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
            <span className="flex-1">Project Performance Overview</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            Monthly restoration project completion rates
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pt-0">
          <ChartContainer config={completionChartConfig} className="h-[200px]">
            <BarChart data={projectCompletionData}>
              <XAxis 
                dataKey="month" 
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
                dataKey="completed" 
                fill="hsl(217, 91%, 60%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="h-full flex flex-col">
        <CardHeader className="pb-4 flex-shrink-0">
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
            <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
            <span className="flex-1">Carbon Sequestration Trends</span>
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            CO₂ captured over time by ecosystem type
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pt-0">
          <div className="space-y-4">
            {[
              { type: "Mangrove Forests", amount: 1250, color: "bg-green-500" },
              { type: "Seagrass Beds", amount: 980, color: "bg-blue-500" },
              { type: "Coral Reefs", amount: 750, color: "bg-orange-500" },
              { type: "Salt Marshes", amount: 650, color: "bg-purple-500" },
            ].map((item) => (
              <div key={item.type} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color} flex-shrink-0`} />
                  <span className="text-sm font-medium text-gray-700">{item.type}</span>
                </div>
                <Badge variant="secondary" className="font-semibold">{item.amount}t CO₂</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EcosystemHealth = () => {
  const sitesData = [
    { site: "Sundarbans East", ndvi: 0.85, status: "Excellent", change: "+12%" },
    { site: "Chilika Lagoon", ndvi: 0.78, status: "Good", change: "+8%" },
    { site: "Pichavaram", ndvi: 0.72, status: "Good", change: "+5%" },
    { site: "Godavari Delta", ndvi: 0.68, status: "Fair", change: "-2%" }
  ];

  const targetData = [
    { target: "Restoration Area", current: 78, goal: 100, actual: "15,600", total: "20,000", unit: "hectares" },
    { target: "Carbon Credits", current: 92, goal: 100, actual: "460,000", total: "500,000", unit: "credits" },
    { target: "Community Engagement", current: 67, goal: 100, actual: "134", total: "200", unit: "villages" }
  ];

  const ndviChartConfig = {
    ndvi: {
      label: "NDVI Index",
      color: "hsl(142, 76%, 36%)",
    },
  };

  const targetChartConfig = {
    current: {
      label: "Current Progress",
      color: "hsl(38, 92%, 50%)",
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            NDVI Health Monitoring
          </CardTitle>
          <CardDescription>
            Normalized Difference Vegetation Index across project sites
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={ndviChartConfig} className="h-[200px]">
            <LineChart data={sitesData}>
              <XAxis 
                dataKey="site" 
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[0, 1]}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
              />
              <Line 
                dataKey="ndvi" 
                stroke="hsl(142, 76%, 36%)"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
          <div className="mt-4 space-y-2">
            {sitesData.map((site) => (
              <div key={site.site} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{site.site}</span>
                <div className="flex items-center gap-2">
                  <Badge 
                    variant={site.status === "Excellent" ? "default" : 
                            site.status === "Good" ? "secondary" : "outline"}
                  >
                    {site.status}
                  </Badge>
                  <span className="text-xs">{site.change}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600" />
            Project Targets
          </CardTitle>
          <CardDescription>
            Progress towards 2025 goals
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={targetChartConfig} className="h-[200px]">
            <BarChart data={targetData}>
              <XAxis 
                dataKey="target" 
                tick={{ fontSize: 11 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                domain={[0, 100]}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
              />
              <Bar 
                dataKey="current" 
                fill="hsl(38, 92%, 50%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
          <div className="mt-4 space-y-2">
            {targetData.map((target) => (
              <div key={target.target} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{target.target}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {target.actual} / {target.total} {target.unit}
                  </span>
                  <Badge variant="outline">{target.current}%</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function AnalyticsDashboard() {
  return (
    <div className="h-full p-4 sm:p-6 max-w-7xl mx-auto space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Analytics Dashboard</h2>
          <p className="text-sm sm:text-base text-gray-600">
            Comprehensive insights into ecosystem restoration performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          <span className="text-xs sm:text-sm text-gray-600">Last updated: 2 hours ago</span>
        </div>
      </div>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="metrics" className="text-xs sm:text-sm">Project Metrics</TabsTrigger>
          <TabsTrigger value="health" className="text-xs sm:text-sm">Ecosystem Health</TabsTrigger>
          <TabsTrigger value="trends" className="text-xs sm:text-sm">Performance Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-4 sm:space-y-6">
          <ProjectMetrics />
        </TabsContent>

        <TabsContent value="health" className="space-y-4 sm:space-y-6">
          <EcosystemHealth />
        </TabsContent>

        <TabsContent value="trends" className="space-y-4 sm:space-y-6">
          <Card className="h-full flex flex-col">
            <CardHeader className="pb-4 flex-shrink-0">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg min-h-[2rem] leading-tight">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span className="flex-1">Performance Trends Analysis</span>
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                Long-term trends and predictive insights
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-sm sm:text-base">Restoration Success Rate</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">94.7%</div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Average success rate across all project types
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-sm sm:text-base">Carbon Efficiency</h4>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">2.3x</div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Improvement in carbon capture per hectare
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}