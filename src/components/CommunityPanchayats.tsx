import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Building, 
  MapPin, 
  Users, 
  Phone,
  Mail,
  Calendar,
  Award,
  Activity,
  Vote,
  TreePine
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const CommunityPanchayats = () => {
  const panchayatPartners = [
    {
      id: 1,
      name: "Sundarbans Gram Panchayat",
      state: "West Bengal",
      population: 12500,
      projects: 8,
      representative: "Shri Ramesh Kumar",
      phone: "+91 98765 54321",
      email: "sundarbans.gp@wb.gov.in",
      status: "Active Collaboration"
    },
    {
      id: 2,
      name: "Pulicat Village Panchayat",
      state: "Tamil Nadu",
      population: 8200,
      projects: 5,
      representative: "Smt. Kamala Devi",
      phone: "+91 98765 54322",
      email: "pulicat.vp@tn.gov.in",
      status: "Active Collaboration"
    },
    {
      id: 3,
      name: "Chilika Gram Panchayat",
      state: "Odisha",
      population: 9800,
      projects: 6,
      representative: "Shri Bijay Mohanty",
      phone: "+91 98765 54323",
      email: "chilika.gp@odisha.gov.in",
      status: "New Partnership"
    },
    {
      id: 4,
      name: "Vembanad Village Council",
      state: "Kerala",
      population: 7500,
      projects: 4,
      representative: "Smt. Priya Nair",
      phone: "+91 98765 54324",
      email: "vembanad.vc@kerala.gov.in",
      status: "Active Collaboration"
    }
  ];

  const initiatives = [
    { title: "Community Mangrove Nurseries", participants: 450, panchayats: 12, status: "Ongoing" },
    { title: "Traditional Knowledge Documentation", participants: 200, panchayats: 8, status: "Ongoing" },
    { title: "Eco-Tourism Development", participants: 320, panchayats: 6, status: "Planning" },
    { title: "Fisherman Training Programs", participants: 180, panchayats: 10, status: "Completed" }
  ];

  const recentMeetings = [
    { panchayat: "Sundarbans Gram Panchayat", topic: "Mangrove restoration progress review", date: "Dec 20, 2024", attendees: 25 },
    { panchayat: "Pulicat Village Panchayat", topic: "Community involvement strategy", date: "Dec 18, 2024", attendees: 18 },
    { panchayat: "Chilika Gram Panchayat", topic: "New project proposal discussion", date: "Dec 15, 2024", attendees: 22 },
    { panchayat: "Vembanad Village Council", topic: "Traditional fishing practices integration", date: "Dec 12, 2024", attendees: 15 }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Panchayat Coordination</h2>
          <p className="text-gray-600">Local governance partnerships for community-driven blue carbon initiatives</p>
        </div>
        <Button>
          <Vote className="h-4 w-4 mr-2" />
          Schedule Meeting
        </Button>
      </div>

      {/* Panchayat Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Partner Panchayats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">28</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Community Projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TreePine className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">67</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Village Population
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">2.4L</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Livelihood Benefits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">₹3.2Cr</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partner Panchayats */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5 text-primary" />
            Partner Panchayats & Village Councils
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {panchayatPartners.map((panchayat) => (
              <div key={panchayat.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {panchayat.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{panchayat.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {panchayat.state}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{panchayat.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Population</p>
                    <p className="font-semibold">{panchayat.population.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Projects</p>
                    <p className="font-semibold">{panchayat.projects}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{panchayat.representative}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{panchayat.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{panchayat.phone}</span>
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

      {/* Community Initiatives */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Community Initiatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {initiatives.map((initiative, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{initiative.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {initiative.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                    <div>
                      <p>Participants: {initiative.participants}</p>
                    </div>
                    <div>
                      <p>Panchayats: {initiative.panchayats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Recent Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeetings.map((meeting, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">{meeting.panchayat}</h4>
                  <p className="text-sm text-gray-600 mb-2">{meeting.topic}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{meeting.date}</span>
                    <span>{meeting.attendees} attendees</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};