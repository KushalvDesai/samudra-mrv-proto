import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectRegistry } from "@/components/ProjectRegistry";
import { ImageUpload } from "@/components/ImageUpload";
import { NotificationPanel } from "@/components/NotificationPanel";
import { CreditIssuance } from "@/components/CreditIssuance";
import { Leaf, Waves, TrendingUp, CheckCircle, Users, BarChart3 } from "lucide-react";
import { dashboardStats } from "@/data/mockProjects";

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  trend 
}: { 
  title: string; 
  value: string | number; 
  description: string; 
  icon: any; 
  trend?: string; 
}) => (
  <Card className="hover:shadow-medium transition-all duration-300">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <Icon className="h-4 w-4 text-primary" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
      {trend && (
        <div className="flex items-center mt-2 text-xs text-success">
          <TrendingUp className="h-3 w-3 mr-1" />
          {trend}
        </div>
      )}
    </CardContent>
  </Card>
);

export const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-muted/20">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              SamudraMRV Admin
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Marine & Coastal Ecosystem Restoration Monitoring Dashboard
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <StatCard
            title="Total Projects"
            value={dashboardStats.totalProjects}
            description="Active restoration initiatives"
            icon={BarChart3}
            trend="+12% from last month"
          />
          <StatCard
            title="Carbon Credits Issued"
            value={dashboardStats.totalCreditsIssued.toLocaleString()}
            description="Verified carbon offset credits"
            icon={Leaf}
            trend="+8.2% this quarter"
          />
          <StatCard
            title="Carbon Sequestered"
            value={`${dashboardStats.totalCarbonSequestered}t`}
            description="Total CO₂ captured"
            icon={TrendingUp}
            trend="+15.4% from target"
          />
          <StatCard
            title="Active Projects"
            value={dashboardStats.activeProjects}
            description="Currently monitored sites"
            icon={Users}
          />
          <StatCard
            title="Average NDVI Score"
            value={dashboardStats.averageNdvi}
            description="Ecosystem health index"
            icon={CheckCircle}
            trend="Healthy range"
          />
          <StatCard
            title="Pending Verification"
            value={dashboardStats.projectsAwaitingVerification}
            description="Projects awaiting review"
            icon={Waves}
          />
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="registry" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card shadow-soft">
            <TabsTrigger value="registry" className="data-[state=active]:bg-gradient-ocean data-[state=active]:text-white">
              Project Registry
            </TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-gradient-forest data-[state=active]:text-white">
              Image Upload
            </TabsTrigger>
            <TabsTrigger value="credits" className="data-[state=active]:bg-gradient-earth data-[state=active]:text-white">
              Credit Issuance
            </TabsTrigger>
            <TabsTrigger value="notifications" className="data-[state=active]:bg-gradient-hero data-[state=active]:text-white">
              Notifications
            </TabsTrigger>
          </TabsList>

          <div className="mt-6">
            <TabsContent value="registry" className="animate-slide-up">
              <ProjectRegistry />
            </TabsContent>
            
            <TabsContent value="upload" className="animate-slide-up">
              <ImageUpload />
            </TabsContent>
            
            <TabsContent value="credits" className="animate-slide-up">
              <CreditIssuance />
            </TabsContent>
            
            <TabsContent value="notifications" className="animate-slide-up">
              <NotificationPanel />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};