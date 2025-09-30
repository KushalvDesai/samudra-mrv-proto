import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  LineChart,
  Target,
  Award,
  Activity,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export const AnalyticsInsights = () => {
  const keyInsights = [
    {
      title: "Carbon Sequestration Trends",
      insight: "Mangrove projects show 23% higher sequestration rates than projected",
      impact: "High",
      change: "+23%"
    },
    {
      title: "Regional Performance",
      insight: "West Bengal projects outperform national average by 15%",
      impact: "Medium",
      change: "+15%"
    },
    {
      title: "Seasonal Patterns",
      insight: "Monsoon season shows 40% increased restoration success",
      impact: "High",
      change: "+40%"
    },
    {
      title: "Community Engagement",
      insight: "Villages with training programs show 60% better outcomes",
      impact: "Very High",
      change: "+60%"
    }
  ];

  const predictiveModels = [
    { model: "Carbon Sequestration Forecast", accuracy: 87, lastUpdated: "Dec 20, 2024" },
    { model: "Ecosystem Health Prediction", accuracy: 92, lastUpdated: "Dec 18, 2024" },
    { model: "Project Success Probability", accuracy: 79, lastUpdated: "Dec 22, 2024" },
    { model: "Climate Impact Assessment", accuracy: 84, lastUpdated: "Dec 19, 2024" }
  ];

  const performanceMetrics = [
    { metric: "Overall Project Success Rate", current: 87.5, target: 85, unit: "%" },
    { metric: "Average Carbon Sequestration", current: 2.3, target: 2.0, unit: "tCO2/ha/year" },
    { metric: "Community Participation", current: 78.2, target: 75, unit: "%" },
    { metric: "Ecosystem Recovery Index", current: 0.85, target: 0.80, unit: "" }
  ];

  const regionalData = [
    { region: "West Bengal", projects: 89, sequestration: 245.6, efficiency: 94, fill: "#3b82f6" },
    { region: "Tamil Nadu", projects: 67, sequestration: 189.2, efficiency: 87, fill: "#10b981" },
    { region: "Kerala", projects: 45, sequestration: 132.8, efficiency: 91, fill: "#f59e0b" },
    { region: "Odisha", projects: 46, sequestration: 128.4, efficiency: 83, fill: "#ef4444" }
  ];

  const predictiveModelsChartData = [
    { model: "Carbon Forecast", accuracy: 87, fill: "#3b82f6" },
    { model: "Ecosystem Health", accuracy: 92, fill: "#10b981" },
    { model: "Project Success", accuracy: 79, fill: "#f59e0b" },
    { model: "Climate Impact", accuracy: 84, fill: "#ef4444" }
  ];

  const regionalChartConfig = {
    efficiency: {
      label: "Efficiency %",
      color: "#3b82f6",
    },
  } satisfies ChartConfig;

  const modelsChartConfig = {
    accuracy: {
      label: "Accuracy %",
      color: "#10b981",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Data Insights & Analytics</h2>
          <p className="text-sm sm:text-base text-gray-600">Advanced analytics and predictive insights for blue carbon projects</p>
        </div>
        <Button className="text-xs sm:text-sm w-fit">
          <LineChart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {performanceMetrics.map((metric) => (
          <Card key={metric.metric} className="h-full flex flex-col">
            <CardHeader className="pb-3 flex-shrink-0">
              <CardDescription className="text-sm font-medium leading-tight h-10 flex items-start">
                <span className="line-clamp-2">{metric.metric}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xl sm:text-2xl font-bold leading-none break-words">
                      {metric.current}
                      <span className="text-sm font-normal text-gray-500 ml-1">{metric.unit}</span>
                    </span>
                    <span className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Target: {metric.target}{metric.unit}
                    </span>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {metric.current >= metric.target ? (
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    ) : (
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <Progress 
                    value={Math.min((metric.current / metric.target) * 100, 100)} 
                    className="h-2" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            Key Insights & Findings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {keyInsights.map((insight, index) => (
              <div key={index} className="p-3 sm:p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="font-bold text-sm sm:text-base">{insight.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={insight.impact === 'Very High' ? 'default' : 
                               insight.impact === 'High' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {insight.impact}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600">
                      {insight.change}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{insight.insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Performance & Predictive Models */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Regional Performance Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={regionalChartConfig} className="h-[200px]">
              <BarChart data={regionalData}>
                <XAxis 
                  dataKey="region" 
                  tick={{ fontSize: 12 }}
                  interval={0}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  domain={[0, 100]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <Bar 
                  dataKey="efficiency" 
                  fill="var(--color-efficiency)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {regionalData.map((region) => (
                <div key={region.region} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-sm">
                  <span className="text-muted-foreground font-medium">{region.region}</span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <span>{region.projects} projects</span>
                    <span>{region.sequestration}k tons CO2</span>
                    <Badge variant="outline" className="text-xs">{region.efficiency}% efficient</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <PieChart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Predictive Models
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={modelsChartConfig} className="h-[200px]">
              <BarChart data={predictiveModelsChartData}>
                <XAxis 
                  dataKey="model" 
                  tick={{ fontSize: 12 }}
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
                  dataKey="accuracy" 
                  fill="var(--color-accuracy)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {predictiveModels.map((model) => (
                <div key={model.model} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0 text-sm">
                  <span className="text-muted-foreground text-xs sm:text-sm font-medium">{model.model}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{model.lastUpdated}</span>
                    <Badge variant="outline" className="text-xs">{model.accuracy}% accurate</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            Advanced Analytics Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center p-4 sm:p-6 border rounded-lg bg-blue-50">
              <BarChart3 className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-base sm:text-lg text-blue-700">Time Series Analysis</h3>
              <p className="text-xs sm:text-sm text-blue-600 mt-2">
                Track carbon sequestration trends over time with seasonal adjustments
              </p>
              <Button variant="outline" size="sm" className="mt-3 text-xs">
                View Analysis
              </Button>
            </div>
            
            <div className="text-center p-4 sm:p-6 border rounded-lg bg-green-50">
              <PieChart className="h-10 w-10 sm:h-12 sm:w-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-base sm:text-lg text-green-700">Correlation Analysis</h3>
              <p className="text-xs sm:text-sm text-green-600 mt-2">
                Identify relationships between environmental factors and project success
              </p>
              <Button variant="outline" size="sm" className="mt-3 text-xs">
                View Correlations
              </Button>
            </div>
            
            <div className="text-center p-4 sm:p-6 border rounded-lg bg-purple-50 md:col-span-2 xl:col-span-1">
              <LineChart className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-base sm:text-lg text-purple-700">Predictive Modeling</h3>
              <p className="text-xs sm:text-sm text-purple-600 mt-2">
                Machine learning models for project outcome prediction
              </p>
              <Button variant="outline" size="sm" className="mt-3 text-xs">
                View Models
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};