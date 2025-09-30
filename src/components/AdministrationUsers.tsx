import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  UserPlus, 
  Shield, 
  Mail,
  Phone,
  Building,
  Calendar,
  Settings,
  Award,
  Activity,
  CheckCircle,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdministrationUsers = () => {
  const userStats = [
    { label: "Total Users", count: 1247, icon: Users, color: "text-blue-500" },
    { label: "Active This Month", count: 892, icon: Activity, color: "text-green-500" },
    { label: "Pending Approvals", count: 23, icon: Clock, color: "text-orange-500" },
    { label: "System Admins", count: 12, icon: Shield, color: "text-purple-500" }
  ];

  const recentUsers = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      email: "priya.sharma@nccr.gov.in",
      role: "Marine Biologist",
      department: "Scientific Validation",
      joinDate: "Dec 20, 2024",
      status: "Active",
      lastLogin: "2 hours ago"
    },
    {
      id: 2,
      name: "Shri Rajesh Kumar",
      email: "rajesh.kumar@coastal.org",
      role: "Project Coordinator",
      department: "Community Engagement",
      joinDate: "Dec 18, 2024",
      status: "Pending",
      lastLogin: "Never"
    },
    {
      id: 3,
      name: "Smt. Anita Patel",
      email: "anita.patel@mangrove.ngo",
      role: "NGO Representative",
      department: "Partner Organizations",
      joinDate: "Dec 15, 2024",
      status: "Active",
      lastLogin: "1 day ago"
    },
    {
      id: 4,
      name: "Dr. Suresh Menon",
      email: "suresh.menon@research.ac.in",
      role: "Research Scientist",
      department: "Research Coordination",
      joinDate: "Dec 12, 2024",
      status: "Active",
      lastLogin: "3 hours ago"
    }
  ];

  const roleDistribution = [
    { role: "Project Coordinators", count: 156, percentage: 35 },
    { role: "Research Scientists", count: 89, percentage: 20 },
    { role: "Community Representatives", count: 134, percentage: 30 },
    { role: "NGO Partners", count: 45, percentage: 10 },
    { role: "Government Officials", count: 23, percentage: 5 }
  ];

  const departmentStats = [
    { dept: "Scientific Validation", users: 89, active: 76 },
    { dept: "Community Engagement", users: 156, active: 142 },
    { dept: "Registry Management", users: 67, active: 59 },
    { dept: "Compliance Monitoring", users: 45, active: 41 },
    { dept: "Research Coordination", users: 34, active: 31 }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
          <p className="text-gray-600">Manage system users, roles, and permissions</p>
        </div>
        <Button>
          <UserPlus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* User Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.count.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Users */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Recent User Registrations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.role} • {user.department}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Mail className="h-3 w-3" />
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        Joined {user.joinDate}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={user.status === 'Active' ? 'default' : 'secondary'}
                    className="mb-2"
                  >
                    {user.status}
                  </Badge>
                  <p className="text-xs text-gray-500">
                    Last login: {user.lastLogin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Role Distribution & Department Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Role Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roleDistribution.map((role, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{role.role}</span>
                    <span className="text-sm text-gray-600">{role.count} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${role.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">{role.percentage}% of total users</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              Department Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{dept.dept}</h4>
                    <p className="text-xs text-gray-500">
                      {dept.active} active of {dept.users} total users
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{dept.users}</p>
                    <Badge variant="outline" className="text-xs">
                      {Math.round((dept.active / dept.users) * 100)}% Active
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            User Management Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg bg-blue-50">
              <UserPlus className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-blue-700">Bulk User Import</h3>
              <p className="text-sm text-blue-600 mt-2">
                Import multiple users from CSV or Excel files
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Import Users
              </Button>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-green-50">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-green-700">Role Management</h3>
              <p className="text-sm text-green-600 mt-2">
                Create and manage user roles and permissions
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Manage Roles
              </Button>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-purple-50">
              <Activity className="h-12 w-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-purple-700">User Activity</h3>
              <p className="text-sm text-purple-600 mt-2">
                Monitor user login patterns and system usage
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Activity
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};