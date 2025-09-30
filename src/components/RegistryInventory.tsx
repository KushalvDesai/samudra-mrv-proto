import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  FileText, 
  BarChart3, 
  TrendingUp,
  Archive,
  Search,
  Filter,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export const RegistryInventory = () => {
  const inventoryStats = [
    { name: "Total Projects", count: 247, trend: "+12%" },
    { name: "Active Projects", count: 189, trend: "+8%" },
    { name: "Pending Review", count: 34, trend: "-3%" },
    { name: "Completed", count: 24, trend: "+15%" }
  ];

  const projectCategories = [
    { category: "Mangrove Restoration", count: 89, percentage: 36, fill: "#3b82f6" },
    { category: "Seagrass Conservation", count: 67, percentage: 27, fill: "#10b981" },
    { category: "Salt Marsh Protection", count: 45, percentage: 18, fill: "#f59e0b" },
    { category: "Coastal Wetlands", count: 46, percentage: 19, fill: "#ef4444" }
  ];

  const chartConfig = {
    count: {
      label: "Projects",
    },
    "Mangrove Restoration": {
      label: "Mangrove Restoration",
      color: "#3b82f6",
    },
    "Seagrass Conservation": {
      label: "Seagrass Conservation", 
      color: "#10b981",
    },
    "Salt Marsh Protection": {
      label: "Salt Marsh Protection",
      color: "#f59e0b",
    },
    "Coastal Wetlands": {
      label: "Coastal Wetlands",
      color: "#ef4444",
    },
  } satisfies ChartConfig;

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Project Inventory</h2>
          <p className="text-gray-600">Comprehensive registry of all blue carbon projects</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="flex-1">
          <Input 
            placeholder="Search projects by name, location, or methodology..." 
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
        {inventoryStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{stat.count}</span>
                <Badge variant={stat.trend.startsWith('+') ? 'default' : 'secondary'}>
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Project Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Project Distribution by Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={projectCategories}
                  dataKey="count"
                  nameKey="category"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  {projectCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {projectCategories.map((category) => (
                <div key={category.category} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.fill }}
                  />
                  <span className="text-muted-foreground">{category.category}</span>
                  <span className="font-medium ml-auto">{category.count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Archive className="h-5 w-5 text-primary" />
              Recent Additions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Mumbai Mangrove Restoration", date: "2 days ago", status: "Under Review" },
                { name: "Kerala Seagrass Initiative", date: "5 days ago", status: "Approved" },
                { name: "Gujarat Salt Marsh Project", date: "1 week ago", status: "Active" },
                { name: "Tamil Nadu Coastal Protection", date: "2 weeks ago", status: "Active" }
              ].map((project) => (
                <div key={project.name} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-sm">{project.name}</p>
                    <p className="text-xs text-gray-500">{project.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};