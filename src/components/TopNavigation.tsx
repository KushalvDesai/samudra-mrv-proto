import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NotificationDropdown from "@/components/NotificationDropdown";
import MessagesDropdown from "@/components/MessagesDropdown";
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  MessageCircle, 
  Settings, 
  ChevronRight,
  User,
  Command,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

interface TopNavigationProps {
  breadcrumbs?: { label: string; href?: string }[];
  notifications?: number;
  messages?: number;
  onThemeToggle?: () => void;
  isDarkMode?: boolean;
}

export const TopNavigation = ({
  breadcrumbs = [{ label: "NCCR Blue Carbon" }, { label: "Dashboard" }],
  notifications = 3,
  messages = 2,
  onThemeToggle,
  isDarkMode = false
}: TopNavigationProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(notifications);
  const [unreadMessages, setUnreadMessages] = useState(messages);

  const handleMarkAllNotificationsRead = () => {
    setUnreadNotifications(0);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowMessages(false); // Close messages if open
  };

  const toggleMessages = () => {
    setShowMessages(!showMessages);
    setShowNotifications(false); // Close notifications if open
  };

  const closeDropdowns = () => {
    setShowNotifications(false);
    setShowMessages(false);
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 shadow-sm">
      <div className="h-full flex items-center px-6 gap-4">
        {/* Left Section - Breadcrumbs */}
        <div className="flex items-center min-w-0 flex-1">
          <nav className="flex items-center space-x-1 text-sm min-w-0">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-1 min-w-0">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                )}
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "text-gray-900 font-semibold truncate"
                      : "text-gray-600 hover:text-gray-900 cursor-pointer transition-colors truncate"
                  }
                >
                  {crumb.label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Center Section - Enhanced Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-4">
          <div className="relative group w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Search className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" />
            </div>
            <Input
              type="text"
              placeholder="Search projects, credits, validations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-16 bg-gray-50/80 border-gray-200 rounded-lg text-sm placeholder:text-gray-500 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:shadow-sm transition-all duration-200 outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-1 border border-gray-200 rounded text-xs font-medium text-gray-500 bg-white shadow-sm">
                <Command className="w-3 h-3 mr-0.5" />
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Mobile Search Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>

        {/* Right Section - Action Icons */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Help Button */}
          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onThemeToggle}
            className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>

          {/* Messages Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMessages}
              className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors relative"
            >
              <MessageCircle className="w-4 h-4" />
              {unreadMessages > 0 && (
                <Badge 
                  variant="secondary" 
                  className="absolute -top-1 -right-1 w-4 h-4 p-0 text-xs flex items-center justify-center rounded-full bg-blue-500 text-white"
                >
                  {unreadMessages > 9 ? "9+" : unreadMessages}
                </Badge>
              )}
            </Button>
            <MessagesDropdown 
              isOpen={showMessages}
              onClose={closeDropdowns}
              unreadCount={unreadMessages}
            />
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleNotifications}
              className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              {unreadNotifications > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-4 h-4 p-0 text-xs flex items-center justify-center rounded-full"
                >
                  {unreadNotifications > 9 ? "9+" : unreadNotifications}
                </Badge>
              )}
            </Button>
            <NotificationDropdown 
              isOpen={showNotifications}
              onClose={closeDropdowns}
              unreadCount={unreadNotifications}
              onMarkAllRead={handleMarkAllNotificationsRead}
            />
          </div>

          {/* Settings */}
          <Button
            variant="ghost"
            size="sm"
            className="w-9 h-9 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </Button>

          {/* User Profile */}
          <div className="flex items-center pl-4 ml-2 border-l border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium text-gray-900">Dr. Marina Chen</div>
                <div className="text-xs text-gray-500">NCCR Administrator</div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                MC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(showNotifications || showMessages) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdowns}
        />
      )}
    </header>
  );
};