import { cn } from "@/lib/utils";
import { 
  Database,
  Microscope,
  ClipboardCheck,
  BarChart3,
  Settings,
  Building2,
  Shield,
  Users,
  ChevronDown,
  ChevronRight,
  Map
} from "lucide-react";
import { useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  hasSubmenu?: boolean;
  submenuItems?: { id: string; label: string }[];
}

const navigationItems: NavigationItem[] = [
  {
    id: "registry",
    label: "Registry",
    icon: Database,
    hasSubmenu: true,
    submenuItems: [
      { id: "overview", label: "Registry Overview" },
      { id: "projects", label: "Registered Projects" },
      { id: "inventory", label: "National Inventory" }
    ]
  },
  {
    id: "validation",
    label: "Validation", 
    icon: Microscope,
    hasSubmenu: true,
    submenuItems: [
      { id: "methodology", label: "Methodology Review" },
      { id: "verification", label: "Data Verification" },
      { id: "research", label: "Research Coordination" }
    ]
  },
  {
    id: "compliance",
    label: "Compliance",
    icon: ClipboardCheck,
    hasSubmenu: true,
    submenuItems: [
      { id: "oversight", label: "Regulatory Oversight" },
      { id: "audits", label: "Audit Management" },
      { id: "performance", label: "Performance Tracking" }
    ]
  },
  // Separator for technical sections
  {
    id: "blockchain",
    label: "Blockchain",
    icon: Shield,
    hasSubmenu: true,
    submenuItems: [
      { id: "transactions", label: "Transactions" },
      { id: "contracts", label: "Smart Contracts" },
      { id: "validation", label: "Validation" }
    ]
  },
  {
    id: "community",
    label: "Community",
    icon: Users,
    hasSubmenu: true,
    submenuItems: [
      { id: "ngos", label: "NGOs" },
      { id: "panchayats", label: "Panchayats" },
      { id: "communities", label: "Communities" }
    ]
  },
  // Separator for management sections
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    hasSubmenu: true,
    submenuItems: [
      { id: "dashboard", label: "Analytics Dashboard" },
      { id: "statistics", label: "National Statistics" },
      { id: "insights", label: "Research Insights" },
      { id: "policy", label: "Policy Reports" }
    ]
  },
  {
    id: "mapping",
    label: "Mapping",
    icon: Map,
    hasSubmenu: true,
    submenuItems: [
      { id: "visualization", label: "Map Visualization" }
    ]
  },
  {
    id: "administration",
    label: "Settings",
    icon: Settings,
    hasSubmenu: true,
    submenuItems: [
      { id: "users", label: "User Management" },
      { id: "institutions", label: "Institutional Coordination" },
      { id: "system", label: "System Settings" }
    ]
  }
];

interface SidebarNavigationProps {
  activeSection?: string;
  onSectionChange?: (sectionId: string) => void;
}

export const SidebarNavigation = ({ 
  activeSection = "registry-overview", 
  onSectionChange 
}: SidebarNavigationProps) => {
  // Initialize expanded items based on active section
  const getInitialExpandedItems = () => {
    const section = activeSection.split('-')[0];
    return [section];
  };

  const [expandedItems, setExpandedItems] = useState<string[]>(getInitialExpandedItems());

  // Update expanded items when active section changes
  const updateExpandedItems = (sectionId: string) => {
    const parentSection = sectionId.split('-')[0];
    if (!expandedItems.includes(parentSection)) {
      setExpandedItems(prev => [...prev, parentSection]);
    }
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (itemId: string, hasSubmenu?: boolean) => {
    if (hasSubmenu) {
      toggleExpanded(itemId);
    } else {
      onSectionChange?.(itemId);
    }
  };

  const handleSubmenuClick = (parentId: string, submenuId: string) => {
    const fullSectionId = `${parentId}-${submenuId}`;
    updateExpandedItems(fullSectionId);
    onSectionChange?.(fullSectionId);
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col shadow-sm">
      {/* Logo/Brand Section */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
            <img src="/logo.svg" alt="SamudraMRV Logo" className="samudra-logo" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-gray-900 truncate">SamudraMRV</h1>
            <p className="text-xs text-gray-500 font-medium">Marine Restoration</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item, index) => {
          const isExpanded = expandedItems.includes(item.id);
          const isActive = activeSection === item.id || activeSection?.startsWith(`${item.id}-`);
          
          // Add visual separator before blockchain and analytics sections
          const needsSeparator = index === 3 || index === 5;
          
          return (
            <div key={item.id}>
              {needsSeparator && (
                <div className="my-3 border-t border-gray-100"></div>
              )}
              <div className="space-y-1">
                <button
                  onClick={() => handleItemClick(item.id, item.hasSubmenu)}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                    isActive
                      ? "bg-blue-50 text-blue-700 border border-blue-100 shadow-sm"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={cn(
                      "w-5 h-5 transition-colors duration-200",
                      isActive ? "text-blue-600" : "text-gray-500 group-hover:text-gray-700"
                    )} />
                    <span className="font-medium truncate">{item.label}</span>
                  </div>
                  {item.hasSubmenu && (
                    <div className={cn(
                      "transition-transform duration-200",
                      isExpanded ? "transform rotate-90" : ""
                    )}>
                      <ChevronRight className={cn(
                        "w-4 h-4",
                        isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"
                      )} />
                    </div>
                  )}
                </button>

                {/* Submenu */}
                {item.hasSubmenu && item.submenuItems && isExpanded && (
                  <div className="ml-8 space-y-1 animate-in slide-in-from-top-1 duration-200">
                    {item.submenuItems.map((submenuItem) => {
                      const submenuActive = activeSection === `${item.id}-${submenuItem.id}`;
                      
                      return (
                        <button
                          key={submenuItem.id}
                          onClick={() => handleSubmenuClick(item.id, submenuItem.id)}
                          className={cn(
                            "w-full text-left px-3 py-2 text-sm rounded-md transition-all duration-150 border-l-2",
                            submenuActive
                              ? "bg-blue-50 text-blue-700 font-medium border-blue-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent hover:border-gray-200"
                          )}
                        >
                          <span className="block truncate">{submenuItem.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-sm">
            <Building2 className="w-5 h-5 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">SamudraMRV Admin</p>
            <p className="text-xs text-gray-500 truncate">admin@samudramrv.org</p>
          </div>
        </div>
      </div>
    </div>
  );
};