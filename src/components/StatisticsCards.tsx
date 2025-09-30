import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Database, ClipboardCheck, Microscope, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockProjects, dashboardStats } from "@/data/mockProjects";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: "increase" | "decrease";
  icon: React.ComponentType<{ className?: string }>;
  iconColor?: string;
}

const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor = "text-blue-600"
}: StatCardProps) => {
  const isPositive = changeType === "increase";
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-4 sm:p-6 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-600 mb-2 leading-tight h-8 flex items-start">
              <span className="line-clamp-2">{title}</span>
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none">{value}</p>
          </div>
          <div className="flex-shrink-0 ml-3 sm:ml-4">
            <div className={cn(
              "w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center",
              iconColor.includes("blue") ? "bg-blue-100" :
              iconColor.includes("green") ? "bg-green-100" :
              iconColor.includes("purple") ? "bg-purple-100" :
              iconColor.includes("orange") ? "bg-orange-100" :
              iconColor.includes("yellow") ? "bg-yellow-100" : "bg-gray-100"
            )}>
              <Icon className={cn("w-5 h-5 sm:w-6 sm:h-6", iconColor)} />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1 mt-2">
          {isPositive ? (
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
          ) : (
            <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
          )}
          <span className={cn(
            "text-xs sm:text-sm font-medium",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            {change}
          </span>
          <span className="text-xs sm:text-sm text-gray-500">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const StatisticsCards = () => {
  // Calculate dynamic statistics from actual project data
  const verifiedProjects = mockProjects.filter(p => p.status === 'verified').length;
  const pendingValidations = mockProjects.filter(p => p.status === 'pending' || p.status === 'monitoring').length;
  const completedProjects = mockProjects.filter(p => p.status === 'completed').length;
  const complianceRate = Math.round((verifiedProjects + completedProjects) / mockProjects.length * 100);

  const stats = [
    {
      title: "Registered Projects",
      value: dashboardStats.totalProjects.toString(),
      change: "+15.4%",
      changeType: "increase" as const,
      icon: Database,
      iconColor: "text-blue-600"
    },
    {
      title: "Pending Validations",
      value: pendingValidations.toString(),
      change: "-5.2%",
      changeType: "decrease" as const,
      icon: ClipboardCheck,
      iconColor: "text-yellow-600"
    },
    {
      title: "Scientific Reviews",
      value: (verifiedProjects + completedProjects).toString(),
      change: "+18.3%",
      changeType: "increase" as const,
      icon: Microscope,
      iconColor: "text-purple-600"
    },
    {
      title: "Compliance Rate",
      value: `${complianceRate}%`,
      change: "+3.1%",
      changeType: "increase" as const,
      icon: BarChart3,
      iconColor: "text-green-600"
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="h-full">
            <StatCard
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
              iconColor={stat.iconColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};