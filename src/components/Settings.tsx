import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Database, 
  Bell,
  Lock,
  Globe,
  Monitor,
  Palette,
  Mail,
  Shield,
  Cloud,
  HardDrive,
  Wifi,
  AlertTriangle,
  CheckCircle,
  Zap,
  Download,
  Upload
} from "lucide-react";
import { useState } from "react";

const SystemHealth = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {[
      { name: "Database", status: "Healthy", icon: Database, color: "text-green-600" },
      { name: "API Services", status: "Healthy", icon: Cloud, color: "text-green-600" },
      { name: "Storage", status: "Warning", icon: HardDrive, color: "text-yellow-600" },
      { name: "Network", status: "Healthy", icon: Wifi, color: "text-green-600" }
    ].map((service) => (
      <Card key={service.name}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <service.icon className={`h-4 w-4 ${service.color}`} />
              <span className="text-sm font-medium">{service.name}</span>
            </div>
            <Badge variant={service.status === "Healthy" ? "default" : "secondary"}>
              {service.status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const GeneralSettings = () => {
  const [settings, setSettings] = useState({
    organizationName: "SamudraMRV",
    timezone: "UTC",
    language: "en",
    dateFormat: "YYYY-MM-DD",
    currency: "USD"
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Organization Settings</CardTitle>
          <CardDescription>
            Basic configuration for your organization
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="org-name">Organization Name</Label>
              <Input 
                id="org-name"
                value={settings.organizationName}
                onChange={(e) => setSettings({...settings, organizationName: e.target.value})}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={settings.timezone} onValueChange={(value) => setSettings({...settings, timezone: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="UTC">UTC</SelectItem>
                  <SelectItem value="EST">Eastern Time</SelectItem>
                  <SelectItem value="PST">Pacific Time</SelectItem>
                  <SelectItem value="GMT">Greenwich Mean Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="language">Default Language</Label>
              <Select value={settings.language} onValueChange={(value) => setSettings({...settings, language: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="pt">Portuguese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="currency">Currency</Label>
              <Select value={settings.currency} onValueChange={(value) => setSettings({...settings, currency: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            System Performance
          </CardTitle>
          <CardDescription>
            Monitor and optimize system performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SystemHealth />
          <Separator className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">142ms</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-muted-foreground">Storage Used</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    projectUpdates: true,
    complianceAlerts: true,
    systemMaintenance: true,
    weeklyReports: true,
    criticalAlerts: true
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>
            Configure how you receive system notifications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">Delivery Methods</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Label>Email Notifications</Label>
                </div>
                <Switch 
                  checked={notifications.emailNotifications}
                  onCheckedChange={(checked) => setNotifications({...notifications, emailNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <Label>SMS Notifications</Label>
                </div>
                <Switch 
                  checked={notifications.smsNotifications}
                  onCheckedChange={(checked) => setNotifications({...notifications, smsNotifications: checked})}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                  <Label>Push Notifications</Label>
                </div>
                <Switch 
                  checked={notifications.pushNotifications}
                  onCheckedChange={(checked) => setNotifications({...notifications, pushNotifications: checked})}
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-4">Notification Types</h4>
            <div className="space-y-4">
              {[
                { key: "projectUpdates", label: "Project Updates", description: "Changes to project status and milestones" },
                { key: "complianceAlerts", label: "Compliance Alerts", description: "Urgent compliance and verification issues" },
                { key: "systemMaintenance", label: "System Maintenance", description: "Scheduled maintenance and downtime" },
                { key: "weeklyReports", label: "Weekly Reports", description: "Automated weekly summary reports" },
                { key: "criticalAlerts", label: "Critical System Alerts", description: "High-priority system issues" }
              ].map((item) => (
                <div key={item.key} className="flex items-start justify-between">
                  <div className="flex-1">
                    <Label className="font-medium">{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch 
                    checked={notifications[item.key as keyof typeof notifications] as boolean}
                    onCheckedChange={(checked) => setNotifications({...notifications, [item.key]: checked})}
                  />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SecuritySettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Configuration
          </CardTitle>
          <CardDescription>
            Manage security settings and access controls
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Password Policy</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Minimum Length</Label>
                  <Select defaultValue="8">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require Special Characters</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require Numbers</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Password Expiry (days)</Label>
                  <Select defaultValue="90">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="60">60</SelectItem>
                      <SelectItem value="90">90</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Two-Factor Authentication</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Require 2FA for Admins</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Require 2FA for All Users</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Session Timeout (minutes)</Label>
                  <Select defaultValue="60">
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                      <SelectItem value="60">60</SelectItem>
                      <SelectItem value="120">120</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-4">Access Logs</h4>
            <div className="space-y-2">
              {[
                { user: "admin@samudramrv.org", action: "Login successful", time: "2 minutes ago", ip: "192.168.1.100" },
                { user: "sarah.johnson@samudramrv.org", action: "Report generated", time: "1 hour ago", ip: "10.0.1.45" },
                { user: "michael.chen@samudramrv.org", action: "User updated", time: "3 hours ago", ip: "172.16.0.12" }
              ].map((log, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-600" />
                    <span>{log.user}</span>
                    <span className="text-muted-foreground">-</span>
                    <span>{log.action}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {log.time} • {log.ip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const IntegrationSettings = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            API Integrations
          </CardTitle>
          <CardDescription>
            Manage third-party integrations and API connections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Satellite Data Provider",
                description: "Real-time satellite imagery and NDVI data",
                status: "Connected",
                lastSync: "2 hours ago"
              },
              {
                name: "Carbon Registry API",
                description: "Verified Carbon Standard registry integration",
                status: "Connected",
                lastSync: "1 day ago"
              },
              {
                name: "Weather Service",
                description: "Meteorological data for project sites",
                status: "Disconnected",
                lastSync: "1 week ago"
              },
              {
                name: "Compliance Database",
                description: "International compliance and certification data",
                status: "Connected",
                lastSync: "4 hours ago"
              }
            ].map((integration) => (
              <Card key={integration.name}>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{integration.name}</h4>
                      <Badge variant={integration.status === "Connected" ? "default" : "outline"}>
                        {integration.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Last sync: {integration.lastSync}</span>
                      <Button size="sm" variant="outline">
                        Configure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Import/Export</CardTitle>
          <CardDescription>
            Manage data backup and migration settings
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Download className="h-6 w-6" />
              <span className="font-medium">Export Data</span>
              <span className="text-xs text-muted-foreground">Download all project data</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Upload className="h-6 w-6" />
              <span className="font-medium">Import Data</span>
              <span className="text-xs text-muted-foreground">Upload external datasets</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">System Settings</h2>
          <p className="text-muted-foreground">
            Configure system preferences and security settings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            Admin Access Required
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <GeneralSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <SecuritySettings />
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <IntegrationSettings />
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Save Changes</h4>
              <p className="text-sm text-muted-foreground">
                Remember to save your configuration changes
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">Reset to Defaults</Button>
              <Button>Save All Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};