import React from 'react';
import { Bell, CheckCircle, AlertCircle, Clock, X, ExternalLink, MoreVertical, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose?: () => void;
  unreadCount?: number;
  onMarkAllRead?: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ 
  isOpen, 
  onClose, 
  unreadCount = 0, 
  onMarkAllRead 
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'validation',
      title: 'Project Validation Required',
      message: 'Mangrove restoration project MAL-2024-003 needs scientific validation review.',
      time: '2 minutes ago',
      priority: 'high',
      unread: true,
      avatar: 'MR',
      color: 'bg-red-100 text-red-700'
    },
    {
      id: 2,
      type: 'blockchain',
      title: 'Carbon Credits Tokenized',
      message: '15,500 tCO2e credits successfully minted on blockchain for project THI-2024-001.',
      time: '15 minutes ago',
      priority: 'medium',
      unread: true,
      avatar: 'BC',
      color: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      type: 'compliance',
      title: 'Monitoring Report Due',
      message: 'Quarterly monitoring report for project VIE-2023-012 due in 3 days.',
      time: '1 hour ago',
      priority: 'medium',
      unread: true,
      avatar: 'CM',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      id: 4,
      type: 'system',
      title: 'System Maintenance Scheduled',
      message: 'Scheduled maintenance window on Saturday 2:00-4:00 AM UTC.',
      time: '2 hours ago',
      priority: 'low',
      unread: false,
      avatar: 'SY',
      color: 'bg-gray-100 text-gray-700'
    },
    {
      id: 5,
      type: 'registry',
      title: 'Registry Update Complete',
      message: 'Successfully updated 12 project records with latest field data.',
      time: '4 hours ago',
      priority: 'low',
      unread: false,
      avatar: 'RG',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-3 h-3 text-red-500" />;
      case 'medium':
        return <Clock className="w-3 h-3 text-orange-500" />;
      default:
        return <CheckCircle className="w-3 h-3 text-green-500" />;
    }
  };

  return (
    <Card className="absolute right-0 top-full mt-2 w-96 bg-white border shadow-xl z-50 p-0 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Notifications</h3>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                {unreadCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-1">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMarkAllRead}
                className="text-xs h-7 px-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
              >
                Mark all read
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-7 h-7 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-200"
            >
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
        
        {/* Search */}
        <div className="mt-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-3 h-3 text-gray-400" />
            <Input
              placeholder="Search notifications..."
              className="pl-8 h-8 text-sm bg-white border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="max-h-80 overflow-y-auto">
        {notifications.map((notification, index) => (
          <div key={notification.id}>
            <div className={`p-3 hover:bg-gray-50 transition-colors cursor-pointer group ${
              notification.unread ? 'bg-blue-50/30' : ''
            }`}>
              <div className="flex items-start space-x-3">
                {/* Avatar with Priority Icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${notification.color}`}>
                    {notification.avatar}
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full flex items-center justify-center border border-gray-200">
                    {getPriorityIcon(notification.priority)}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className={`text-sm font-medium text-gray-900 truncate ${
                          notification.unread ? 'font-semibold' : ''
                        }`}>
                          {notification.title}
                        </h4>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600"
                          >
                            <MoreVertical className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index < notifications.length - 1 && <Separator />}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-3 border-t bg-gray-50">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-sm text-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
        >
          View all notifications
        </Button>
      </div>
    </Card>
  );
};

export default NotificationDropdown;
