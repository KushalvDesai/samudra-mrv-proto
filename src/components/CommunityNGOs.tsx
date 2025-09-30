import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building2, 
  MapPin, 
  Users, 
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const CommunityNGOs = () => {
  const ngoPartners = [
    {
      id: 1,
      name: "Mangrove Foundation India",
      location: "Mumbai, Maharashtra",
      projects: 15,
      established: "2010",
      focus: "Mangrove Conservation",
      contact: "contact@mangrovesindia.org",
      phone: "+91 98765 43210",
      status: "Active Partner"
    },
    {
      id: 2,
      name: "Coastal Conservation Society",
      location: "Chennai, Tamil Nadu",
      projects: 12,
      established: "2008",
      focus: "Coastal Restoration",
      contact: "info@coastalconservation.org",
      phone: "+91 98765 43211",
      status: "Active Partner"
    },
    {
      id: 3,
      name: "Blue Carbon Initiative",
      location: "Kochi, Kerala",
      projects: 8,
      established: "2015",
      focus: "Blue Carbon Research",
      contact: "research@bluecarbon.in",
      phone: "+91 98765 43212",
      status: "Research Partner"
    },
    {
      id: 4,
      name: "Wetlands Trust",
      location: "Bhubaneswar, Odisha",
      projects: 10,
      established: "2012",
      focus: "Wetland Protection",
      contact: "hello@wetlandstrust.org",
      phone: "+91 98765 43213",
      status: "Active Partner"
    }
  ];

  const recentActivities = [
    { ngo: "Mangrove Foundation India", activity: "Submitted Q4 progress report", date: "2 days ago", type: "Report" },
    { ngo: "Coastal Conservation Society", activity: "Organized community workshop", date: "5 days ago", type: "Event" },
    { ngo: "Blue Carbon Initiative", activity: "Published research findings", date: "1 week ago", type: "Research" },
    { ngo: "Wetlands Trust", activity: "Started new restoration project", date: "2 weeks ago", type: "Project" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">NGO Partnership Management</h2>
          <p className="text-gray-600">Coordinating with Non-Governmental Organizations for blue carbon initiatives</p>
        </div>
        <Button>
          <Building2 className="h-4 w-4 mr-2" />
          Add New Partner
        </Button>
      </div>

      {/* Partnership Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Partner NGOs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">42</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Collaborative Projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">156</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Community Members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">12,847</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Funding Distributed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">₹8.2Cr</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NGO Partners List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Partner Organizations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ngoPartners.map((ngo) => (
              <div key={ngo.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{ngo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{ngo.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {ngo.location}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{ngo.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Active Projects</p>
                    <p className="font-semibold">{ngo.projects}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Established</p>
                    <p className="font-semibold">{ngo.established}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{ngo.focus}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{ngo.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{ngo.phone}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Projects
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">{activity.ngo}</p>
                    <p className="text-sm text-gray-600">{activity.activity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs mb-1">
                    {activity.type}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {activity.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};