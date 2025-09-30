import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  UserPlus, 
  Settings, 
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Bell,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  Home,
  BarChart3,
  FileText,
  Building,
  Bookmark,
  Star,
  Activity,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  lastActive: string;
  avatar: string;
}

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection }: { 
  activeSection: string; 
  setActiveSection: (section: string) => void; 
}) => (
  <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
    <div className="p-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Users className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-semibold">SamudraMRV</span>
      </div>
    </div>
    
    <div className="flex-1 px-3">
      <div className="space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Favorites
        </div>
        <Button
          variant={activeSection === "overview" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("overview")}
        >
          <Star className="h-4 w-4 mr-2" />
          Overview
        </Button>
        <Button
          variant={activeSection === "users" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("users")}
        >
          <Users className="h-4 w-4 mr-2" />
          Users
        </Button>
      </div>

      <div className="mt-6 space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Dashboards
        </div>
        <Button
          variant={activeSection === "overview" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("overview")}
        >
          <BarChart3 className="h-4 w-4 mr-2" />
          Overview
        </Button>
        <Button
          variant={activeSection === "analytics" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("analytics")}
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      </div>

      <div className="mt-6 space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Pages
        </div>
        <Button
          variant={activeSection === "users" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("users")}
        >
          <Users className="h-4 w-4 mr-2" />
          User Profile
        </Button>
        <Button
          variant={activeSection === "projects" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("projects")}
        >
          <FileText className="h-4 w-4 mr-2" />
          Projects
        </Button>
        <Button
          variant={activeSection === "account" ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => setActiveSection("account")}
        >
          <Settings className="h-4 w-4 mr-2" />
          Account
        </Button>
      </div>

      <div className="mt-6 space-y-1">
        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Corporate
        </div>
        <Button variant="ghost" className="w-full justify-start">
          <Building className="h-4 w-4 mr-2" />
          Corporate
        </Button>
      </div>
    </div>
  </div>
);

// Top Bar Component
const TopBar = ({ darkMode, setDarkMode }: { 
  darkMode: boolean; 
  setDarkMode: (mode: boolean) => void; 
}) => (
  <div className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Dashboards</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">User Management</span>
      </div>
    </div>
    
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search..." className="pl-9 w-64" />
      </div>
      
      <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      
      <Button variant="ghost" size="sm" className="relative">
        <Bell className="h-4 w-4" />
        <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">
          3
        </Badge>
      </Button>
      
      <Button variant="ghost" size="sm">
        <MessageSquare className="h-4 w-4" />
      </Button>
      
      <Button variant="ghost" size="sm">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

// Right Panel Component
const RightPanel = () => (
  <div className="w-80 bg-card border-l border-border h-screen overflow-y-auto">
    <div className="p-6">
      <div className="space-y-6">
        {/* Notifications */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Notifications</h3>
            <Badge variant="secondary">3</Badge>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">You fixed a bug.</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New user registered.</p>
                <p className="text-xs text-muted-foreground">30 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">System maintenance scheduled.</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Activities */}
        <div>
          <h3 className="font-semibold mb-4">Activities</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-green-100 text-green-700">SC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">Changed the style.</p>
                <p className="text-xs text-muted-foreground">Just now</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-blue-100 text-blue-700">RV</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">Released a new version.</p>
                <p className="text-xs text-muted-foreground">30 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-100 text-orange-700">SB</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm">Submitted a bug.</p>
                <p className="text-xs text-muted-foreground">12 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Contacts */}
        <div>
          <h3 className="font-semibold mb-4">Contacts</h3>
          <div className="space-y-3">
            {[
              { name: "Natali Craig", avatar: "NC", status: "online" },
              { name: "Drew Cano", avatar: "DC", status: "away" },
              { name: "Andi Lane", avatar: "AL", status: "offline" },
              { name: "Koray Okumus", avatar: "KO", status: "online" },
            ].map((contact) => (
              <div key={contact.name} className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>{contact.avatar}</AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background ${
                    contact.status === 'online' ? 'bg-green-500' : 
                    contact.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                </div>
                <span className="text-sm">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UserCard = ({ 
  user, 
  onEdit, 
  onDelete, 
  onViewDetails 
}: {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
  onViewDetails: (user: User) => void;
}) => (
  <Card className="hover:shadow-md transition-all duration-200">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Badge variant={user.status === "Active" ? "default" : 
                         user.status === "Pending" ? "secondary" : "outline"}>
            {user.status}
          </Badge>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Role:</span>
          <Badge variant="outline">{user.role}</Badge>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Department:</span>
          <span>{user.department}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last Active:</span>
          <span>{user.lastActive}</span>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Button size="sm" variant="outline" onClick={() => onViewDetails(user)}>
            <Eye className="h-3 w-3 mr-1" />
            View
          </Button>
          <Button size="sm" variant="outline" onClick={() => onEdit(user)}>
            <Edit className="h-3 w-3 mr-1" />
            Edit
          </Button>
          <Button size="sm" variant="outline" onClick={() => onDelete(user)}>
            <Trash2 className="h-3 w-3 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const RolePermissions = () => (
  <div className="space-y-6">
    {[
      {
        role: "Administrator",
        description: "Full system access and user management",
        permissions: ["All Projects", "User Management", "System Settings", "Reports", "Compliance"],
        userCount: 3
      },
      {
        role: "Project Manager",
        description: "Manage assigned projects and team members",
        permissions: ["Assigned Projects", "Team Management", "Reports", "Image Upload"],
        userCount: 8
      },
      {
        role: "Research Scientist",
        description: "Access to data analysis and research tools",
        permissions: ["Data Analysis", "Reports", "Image Upload", "NDVI Monitoring"],
        userCount: 12
      },
      {
        role: "Compliance Officer",
        description: "Monitor compliance and generate verification reports",
        permissions: ["Compliance Reports", "Verification", "Audit Logs"],
        userCount: 4
      },
      {
        role: "Field Technician",
        description: "Data collection and basic monitoring access",
        permissions: ["Image Upload", "Basic Reports", "Project View"],
        userCount: 15
      }
    ].map((role) => (
      <Card key={role.role}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {role.role}
              </CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{role.userCount}</div>
              <div className="text-xs text-muted-foreground">users</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <Label className="text-sm font-medium">Permissions:</Label>
              <div className="flex flex-wrap gap-1 mt-1">
                {role.permissions.map((permission) => (
                  <Badge key={permission} variant="secondary" className="text-xs">
                    {permission}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Button size="sm" variant="outline">
                Edit Permissions
              </Button>
              <Button size="sm" variant="outline">
                View Users
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const AddUserForm = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    sendInvite: true
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" />
          Add New User
        </CardTitle>
        <CardDescription>
          Invite a new team member to the SamudraMRV platform
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="user-name">Full Name</Label>
            <Input 
              id="user-name"
              placeholder="Enter full name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="user-email">Email Address</Label>
            <Input 
              id="user-email"
              type="email"
              placeholder="Enter email address"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="user-role">Role</Label>
            <Select value={newUser.role} onValueChange={(value) => setNewUser({...newUser, role: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="administrator">Administrator</SelectItem>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="research-scientist">Research Scientist</SelectItem>
                <SelectItem value="compliance-officer">Compliance Officer</SelectItem>
                <SelectItem value="field-technician">Field Technician</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="user-department">Department</Label>
            <Select value={newUser.department} onValueChange={(value) => setNewUser({...newUser, department: value})}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marine-biology">Marine Biology</SelectItem>
                <SelectItem value="environmental-science">Environmental Science</SelectItem>
                <SelectItem value="compliance">Compliance</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="research">Research & Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch 
            id="send-invite"
            checked={newUser.sendInvite}
            onCheckedChange={(checked) => setNewUser({...newUser, sendInvite: checked})}
          />
          <Label htmlFor="send-invite">Send invitation email immediately</Label>
        </div>

        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add User
          </Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState<User>(null);

  const users = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@samudramrv.org",
      role: "Marine Biologist",
      department: "Research",
      status: "Active",
      lastActive: "2 hours ago",
      avatar: ""
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@samudramrv.org",
      role: "Project Manager",
      department: "Operations",
      status: "Active",
      lastActive: "1 day ago",
      avatar: ""
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      email: "priya.patel@samudramrv.org",
      role: "Compliance Officer",
      department: "Compliance",
      status: "Active",
      lastActive: "3 hours ago",
      avatar: ""
    },
    {
      id: 4,
      name: "James Rodriguez",
      email: "james.rodriguez@samudramrv.org",
      role: "Field Technician",
      department: "Operations",
      status: "Pending",
      lastActive: "Never",
      avatar: ""
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      email: "lisa.wang@samudramrv.org",
      role: "Research Scientist",
      department: "Environmental Science",
      status: "Active",
      lastActive: "5 hours ago",
      avatar: ""
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      email: "ahmed.hassan@samudramrv.org",
      role: "Administrator",
      department: "IT",
      status: "Active",
      lastActive: "30 minutes ago",
      avatar: ""
    }
  ];

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = (user: User) => {
    console.log("Delete user:", user);
  };

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">
            Manage team members, roles, and permissions
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {users.length} active users
          </Badge>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">{users.filter(u => u.status === "Active").length}</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold">{users.filter(u => u.status === "Pending").length}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Roles</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Permissions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team members and their access</CardDescription>
            </div>
            <Button className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Input placeholder="Search users..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
                <SelectItem value="project-manager">Project Manager</SelectItem>
                <SelectItem value="scientist">Research Scientist</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Roles & Permissions Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Roles & Permissions
          </CardTitle>
          <CardDescription>
            Manage roles and access control for your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RolePermissions />
        </CardContent>
      </Card>

      {/* Add User Section */}
      <AddUserForm />
    </div>
  );
};