import React from 'react';
import { MessageCircle, X, Phone, Video, Plus, Search, MoreVertical } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

interface MessagesDropdownProps {
  isOpen: boolean;
  onClose?: () => void;
  unreadCount?: number;
}

const MessagesDropdown: React.FC<MessagesDropdownProps> = ({ 
  isOpen, 
  onClose, 
  unreadCount = 0
}) => {
  if (!isOpen) return null;

  const contacts = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Marine Biologist",
      status: "online",
      avatar: "PS",
      avatarColor: "bg-green-100 text-green-700",
      lastMessage: "The mangrove restoration data shows 18% increase in biomass this quarter",
      lastActive: "now",
      unreadCount: 2
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Blockchain Verifier",
      status: "away",
      avatar: "RK",
      avatarColor: "bg-blue-100 text-blue-700",
      lastMessage: "Smart contract validation complete for 500 carbon credits",
      lastActive: "5m ago",
      unreadCount: 1
    },
    {
      id: 3,
      name: "Coastal Panchayat",
      role: "Field Data Contributor",
      status: "offline",
      avatar: "CP",
      avatarColor: "bg-purple-100 text-purple-700",
      lastMessage: "Uploaded 47 seagrass monitoring photos via mobile app",
      lastActive: "2h ago",
      unreadCount: 0
    },
    {
      id: 4,
      name: "NGO EcoMarine",
      role: "Community Partner",
      status: "online",
      avatar: "EM",
      avatarColor: "bg-teal-100 text-teal-700",
      lastMessage: "Community training session completed with 25 participants",
      lastActive: "1h ago",
      unreadCount: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <Card className="absolute right-0 top-full mt-2 w-80 bg-white border shadow-xl z-50 p-0 overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4 text-gray-700" />
            <h3 className="font-semibold text-gray-900">Messages</h3>
            {unreadCount > 0 && (
              <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-blue-500 text-white">
                {unreadCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-7 h-7 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-200"
            >
              <Plus className="w-3 h-3" />
            </Button>
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
              placeholder="Search conversations..."
              className="pl-8 h-8 text-sm bg-white border-gray-200 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Contacts List */}
      <div className="max-h-80 overflow-y-auto">
        {contacts.map((contact, index) => (
          <div key={contact.id}>
            <div className="p-3 hover:bg-gray-50 transition-colors cursor-pointer group">
              <div className="flex items-center space-x-3">
                {/* Avatar with Status */}
                <div className="relative flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${contact.avatarColor}`}>
                    {contact.avatar}
                  </div>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full ${getStatusColor(contact.status)}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">
                        {contact.name}
                      </h4>
                      {contact.unreadCount > 0 && (
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-blue-500 text-white">
                          {contact.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600"
                      >
                        <Phone className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-6 h-6 p-0 text-gray-400 hover:text-gray-600"
                      >
                        <Video className="w-3 h-3" />
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
                  
                  <p className="text-xs text-gray-500 mt-0.5">{contact.role}</p>
                  
                  <div className="flex items-center justify-between mt-1">
                    <p className={`text-sm text-gray-600 truncate ${
                      contact.unreadCount > 0 ? 'font-medium' : ''
                    }`}>
                      {contact.lastMessage}
                    </p>
                  </div>
                  
                  <span className="text-xs text-gray-500 mt-1 block">
                    {contact.lastActive}
                  </span>
                </div>
              </div>
            </div>
            {index < contacts.length - 1 && <Separator />}
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
          Open Messages App
        </Button>
      </div>
    </Card>
  );
};

export default MessagesDropdown;
