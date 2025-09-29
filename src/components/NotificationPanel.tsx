import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockNotifications } from "@/data/mockProjects";
import { Bell, AlertTriangle, CheckCircle, Clock, X, Eye } from "lucide-react";

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'verification_due': return AlertTriangle;
    case 'processing_complete': return CheckCircle;
    case 'credits_ready': return CheckCircle;
    case 'anomaly_detected': return AlertTriangle;
    default: return Bell;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-destructive text-destructive-foreground';
    case 'medium': return 'bg-warning text-warning-foreground';
    case 'low': return 'bg-muted text-muted-foreground';
    default: return 'bg-secondary text-secondary-foreground';
  }
};

export const NotificationPanel = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'high' | 'medium' | 'low'>('all');

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(notif => notif.priority === filter);

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications([]);
  };

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Bell className="h-6 w-6 text-primary" />
              <span>Notification Center</span>
            </CardTitle>
            <CardDescription>
              Stay updated with project alerts and system notifications
            </CardDescription>
          </div>
          {notifications.length > 0 && (
            <Button variant="outline" onClick={markAllAsRead} size="sm">
              Mark All as Read
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            size="sm"
          >
            All ({notifications.length})
          </Button>
          <Button
            variant={filter === 'high' ? 'destructive' : 'outline'}
            onClick={() => setFilter('high')}
            size="sm"
          >
            High Priority ({notifications.filter(n => n.priority === 'high').length})
          </Button>
          <Button
            variant={filter === 'medium' ? 'secondary' : 'outline'}
            onClick={() => setFilter('medium')}
            size="sm"
          >
            Medium ({notifications.filter(n => n.priority === 'medium').length})
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type);
              return (
                <Card key={notification.id} className="border-l-4 border-l-primary hover:shadow-soft transition-all">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Icon className={`h-5 w-5 mt-0.5 ${
                        notification.priority === 'high' ? 'text-destructive' :
                        notification.priority === 'medium' ? 'text-warning' :
                        'text-primary'
                      }`} />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <p className="font-medium leading-tight">{notification.message}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {notification.project}
                              </Badge>
                              <Badge className={`text-xs ${getPriorityColor(notification.priority)}`}>
                                {notification.priority} priority
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="h-6 w-6 p-0 hover:bg-primary hover:text-primary-foreground"
                            >
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => dismissNotification(notification.id)}
                              className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {new Date(notification.date).toLocaleDateString()} • 
                          {notification.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                {filter === 'all' ? 'No notifications' : `No ${filter} priority notifications`}
              </h3>
              <p className="text-sm text-muted-foreground">
                You're all caught up! New notifications will appear here.
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        {notifications.length > 0 && (
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Quick Actions</h4>
                  <p className="text-sm text-muted-foreground">
                    {notifications.filter(n => n.priority === 'high').length} high priority items need attention
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View All Projects
                  </Button>
                  <Button className="bg-gradient-ocean hover:opacity-90" size="sm">
                    Schedule Verification
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};