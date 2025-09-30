import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building2, 
  University, 
  MapPin, 
  Users,
  Phone,
  Mail,
  Globe,
  Calendar,
  Award,
  Activity,
  CheckCircle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdministrationInstitutions = () => {
  const institutionStats = [
    { label: "Partner Institutions", count: 84, icon: Building2, color: "text-blue-500" },
    { label: "Research Organizations", count: 32, icon: University, color: "text-green-500" },
    { label: "Government Bodies", count: 28, icon: Activity, color: "text-purple-500" },
    { label: "International Partners", count: 16, icon: Globe, color: "text-orange-500" }
  ];

  const recentInstitutions = [
    {
      id: 1,
      name: "Indian Council of Agricultural Research (ICAR)",
      type: "Government Research Institute",
      location: "New Delhi, India",
      partnerships: 15,
      established: "1929",
      contact: "icar@gov.in",
      phone: "+91 11 2584 2784",
      status: "Active Partnership",
      joinDate: "Dec 2024"
    },
    {
      id: 2,
      name: "Wildlife Institute of India",
      type: "Wildlife Research Organization",
      location: "Dehradun, Uttarakhand",
      partnerships: 8,
      established: "1982",
      contact: "wii@gov.in",
      phone: "+91 135 264 0111",
      status: "New Partnership",
      joinDate: "Dec 2024"
    },
    {
      id: 3,
      name: "Marine Stewardship Council (MSC)",
      type: "International Certification Body",
      location: "London, UK",
      partnerships: 3,
      established: "1997",
      contact: "india@msc.org",
      phone: "+44 20 7811 3300",
      status: "Active Partnership",
      joinDate: "Nov 2024"
    },
    {
      id: 4,
      name: "Coastal Zone Management Authority",
      type: "Regulatory Body",
      location: "Chennai, Tamil Nadu",
      partnerships: 12,
      established: "1991",
      contact: "czma@tn.gov.in",
      phone: "+91 44 2827 9081",
      status: "Active Partnership",
      joinDate: "Nov 2024"
    }
  ];

  const institutionTypes = [
    { type: "Research Institutes", count: 32, percentage: 38 },
    { type: "Government Bodies", count: 28, percentage: 33 },
    { type: "NGOs & Civil Society", count: 16, percentage: 19 },
    { type: "International Organizations", count: 8, percentage: 10 }
  ];

  const collaborationMetrics = [
    { metric: "Active MOUs", count: 67, status: "Current" },
    { metric: "Joint Research Projects", count: 89, status: "Ongoing" },
    { metric: "Capacity Building Programs", count: 23, status: "Active" },
    { metric: "Policy Frameworks", count: 12, status: "Implemented" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Institutional Partnerships</h2>
          <p className="text-gray-600">Manage partnerships with research institutions and organizations</p>
        </div>
        <Button>
          <Building2 className="h-4 w-4 mr-2" />
          Add Institution
        </Button>
      </div>

      {/* Institution Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {institutionStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription className="text-sm font-medium">
                {stat.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.count}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Institutional Partnerships */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Recent Institutional Partnerships
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInstitutions.map((institution) => (
              <div key={institution.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {institution.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{institution.name}</h3>
                      <p className="text-sm text-gray-600">{institution.type}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {institution.location}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{institution.status}</Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Active Partnerships</p>
                    <p className="font-semibold">{institution.partnerships}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Established</p>
                    <p className="font-semibold">{institution.established}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Partnership Since</p>
                    <p className="font-semibold">{institution.joinDate}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{institution.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{institution.phone}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Partnerships
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Institution Types & Collaboration Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <University className="h-5 w-5 text-primary" />
              Institution Categories
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {institutionTypes.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{type.type}</span>
                    <span className="text-sm text-gray-600">{type.count} institutions</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${type.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500">{type.percentage}% of total partnerships</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Collaboration Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collaborationMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{metric.metric}</h4>
                    <p className="text-xs text-gray-500">Status: {metric.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-2xl">{metric.count}</p>
                    <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Management Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Partnership Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg bg-blue-50">
              <Building2 className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-blue-700">MOU Management</h3>
              <p className="text-sm text-blue-600 mt-2">
                Create and manage Memorandums of Understanding
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Manage MOUs
              </Button>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-green-50">
              <University className="h-12 w-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-green-700">Research Collaborations</h3>
              <p className="text-sm text-green-600 mt-2">
                Coordinate joint research projects and studies
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                View Projects
              </Button>
            </div>
            
            <div className="text-center p-6 border rounded-lg bg-purple-50">
              <Globe className="h-12 w-12 text-purple-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-purple-700">Global Network</h3>
              <p className="text-sm text-purple-600 mt-2">
                Expand international partnerships and collaborations
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Global Partners
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};