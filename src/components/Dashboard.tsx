import { SidebarNavigation } from "@/components/SidebarNavigation";
import { TopNavigation } from "@/components/TopNavigation";
import { StatisticsCards } from "@/components/StatisticsCards";
import { DashboardCharts } from "@/components/DashboardCharts";
import { ProjectRegistry } from "@/components/ProjectRegistry";
import { ImageUpload } from "@/components/ImageUpload";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { MapVisualization } from "@/components/MapVisualization";
import { UserManagement } from "@/components/UserManagement";
import { Settings } from "@/components/Settings";
import { BlockchainDashboard } from "@/components/BlockchainDashboard";
import { NationalRegistryOverview } from "@/components/NationalRegistryOverview";
import { RegistryInventory } from "@/components/RegistryInventory";
import { ValidationMethodology } from "@/components/ValidationMethodology";
import { ValidationVerification } from "@/components/ValidationVerification";
import { ValidationResearch } from "@/components/ValidationResearch";
import { ComplianceOversight } from "@/components/ComplianceOversight";
import { CompliancePerformance } from "@/components/CompliancePerformance";
import { ComplianceAudits } from "@/components/ComplianceAudits";
import { BlockchainTransactions } from "@/components/BlockchainTransactions";
import { BlockchainContracts } from "@/components/BlockchainContracts";
import { BlockchainValidation } from "@/components/BlockchainValidation";
import { CommunityNGOs } from "@/components/CommunityNGOs";
import { CommunityPanchayats } from "@/components/CommunityPanchayats";
import { CommunityEngagement } from "@/components/CommunityEngagement";
import { AnalyticsInsights } from "@/components/AnalyticsInsights";
import { AnalyticsPolicy } from "@/components/AnalyticsPolicy";
import { AdministrationUsers } from "@/components/AdministrationUsers";
import { AdministrationInstitutions } from "@/components/AdministrationInstitutions";
import { useState } from "react";

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("registry-overview");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Enhanced section change handler with debugging and loading state
  const handleSectionChange = (sectionId: string) => {
    console.log("[DASHBOARD] Section changed to:", sectionId);
    setIsLoading(true);
    setActiveSection(sectionId);
    
    // Show brief success feedback
    setTimeout(() => {
      setIsLoading(false);
      console.log("[DASHBOARD] Successfully loaded:", sectionId);
    }, 150);
  };

  // Enhanced breadcrumb logic
  const getBreadcrumbs = () => {
    const [section, subsection] = activeSection.split('-');
    
    const sectionLabels: { [key: string]: string } = {
      registry: "Registry",
      validation: "Validation", 
      compliance: "Compliance",
      blockchain: "Blockchain",
      community: "Community",
      analytics: "Analytics",
      administration: "Administration"
    };

    const subsectionLabels: { [key: string]: string } = {
      overview: "Overview",
      projects: "Projects",
      inventory: "Inventory",
      methodology: "Methodology",
      verification: "Verification", 
      research: "Research",
      oversight: "Oversight",
      audits: "Audits",
      performance: "Performance",
      transactions: "Transactions",
      contracts: "Contracts",
      ngos: "NGOs",
      panchayats: "Panchayats",
      communities: "Communities",
      statistics: "Statistics",
      insights: "Insights",
      policy: "Policy",
      users: "Users",
      institutions: "Institutions",
      system: "System"
    };

    return [
      { label: "SamudraMRV" },
      { label: sectionLabels[section] || section },
      ...(subsection ? [{ label: subsectionLabels[subsection] || subsection }] : [])
    ];
  };

  const renderMainContent = () => {
    console.log("[RENDER] Rendering content for section:", activeSection);
    
    switch (activeSection) {
      // National Registry sections
      case "registry-overview":
        return (
          <div className="h-full">
            <NationalRegistryOverview />
          </div>
        );
      case "registry-projects":
        return (
          <div className="h-full">
            <ProjectRegistry />
          </div>
        );
      case "registry-inventory":
        return (
          <div className="h-full">
            <RegistryInventory />
          </div>
        );

      // Scientific Validation sections
      case "validation-methodology":
        return (
          <div className="h-full">
            <ValidationMethodology />
          </div>
        );
      case "validation-verification":
        return (
          <div className="h-full">
            <ValidationVerification />
          </div>
        );
      case "validation-research":
        return (
          <div className="h-full">
            <ValidationResearch />
          </div>
        );

      // Compliance & Monitoring sections  
      case "compliance-oversight":
        return (
          <div className="h-full">
            <ComplianceOversight />
          </div>
        );
      case "compliance-audits":
        return (
          <div className="h-full">
            <ComplianceAudits />
          </div>
        );
      case "compliance-performance":
        return (
          <div className="h-full">
            <CompliancePerformance />
          </div>
        );

      // Blockchain sections
      case "blockchain-transactions":
        return (
          <div className="h-full">
            <BlockchainTransactions />
          </div>
        );
      case "blockchain-contracts":
        return (
          <div className="h-full">
            <BlockchainContracts />
          </div>
        );
      case "blockchain-validation":
        return (
          <div className="h-full">
            <BlockchainValidation />
          </div>
        );

      // Community sections
      case "community-ngos":
        return (
          <div className="h-full">
            <CommunityNGOs />
          </div>
        );
      case "community-panchayats":
        return (
          <div className="h-full">
            <CommunityPanchayats />
          </div>
        );
      case "community-communities":
        return (
          <div className="h-full">
            <CommunityEngagement />
          </div>
        );

      // Analytics & Reporting sections
      case "analytics-dashboard":
        return (
          <div className="h-full">
            <AnalyticsDashboard />
          </div>
        );
      case "analytics-statistics":
        return (
          <div className="h-full flex flex-col">
            <div className="mb-6">
              <StatisticsCards />
            </div>
            <div className="flex-1 min-h-0">
              <DashboardCharts />
            </div>
          </div>
        );
      case "analytics-insights":
        return (
          <div className="h-full">
            <AnalyticsInsights />
          </div>
        );
      case "analytics-policy":
        return (
          <div className="h-full">
            <AnalyticsPolicy />
          </div>
        );

      // Mapping sections
      case "mapping-visualization":
        return (
          <div className="h-full">
            <MapVisualization />
          </div>
        );

      // Administration sections
      case "administration-users":
        return (
          <div className="h-full">
            <AdministrationUsers />
          </div>
        );
      case "administration-institutions":
        return (
          <div className="h-full">
            <AdministrationInstitutions />
          </div>
        );
      case "administration-system":
        return (
          <div className="h-full">
            <Settings />
          </div>
        );

      // Default case - Registry Overview
      default:
        console.warn("[WARNING] Unknown section:", activeSection, "- defaulting to Registry Overview");
        return (
          <div className="h-full">
            <NationalRegistryOverview />
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="flex-shrink-0">
        <SidebarNavigation
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Fixed Top Navigation */}
        <div className="flex-shrink-0">
          <TopNavigation
            breadcrumbs={getBreadcrumbs()}
            notifications={3}
            messages={2}
            onThemeToggle={handleThemeToggle}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 flex min-h-0 overflow-hidden">
          {/* Main Content - Full Width */}
          <main className="flex-1 overflow-auto">
            <div className="p-6 h-full">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <span className="text-gray-600">Loading...</span>
                  </div>
                </div>
              ) : (
                renderMainContent()
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};