import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MapPin, 
  Heart, 
  Phone,
  Mail,
  Calendar,
  Award,
  Activity,
  Home,
  Fish,
  Waves
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const CommunityEngagement = () => {
  const communityGroups = [
    {
      id: 1,
      name: "Sundarbans Fishermen Cooperative",
      type: "Fishermen Cooperative",
      location: "Sundarbans, West Bengal",
      members: 450,
      leader: "Shri Kamal Das",
      phone: "+91 98765 67890",
      email: "sundarbans.coop@gmail.com",
      projects: 6,
      status: "Active"
    },
    {
      id: 2,
      name: "Coastal Women's Self Help Group",
      type: "Women's SHG",
      location: "Pulicat, Tamil Nadu",
      members: 180,
      leader: "Smt. Meera Bai",
      phone: "+91 98765 67891",
      email: "pulicat.shg@gmail.com",
      projects: 4,
      status: "Active"
    },
    {
      id: 3,
      name: "Mangrove Youth Collective",
      type: "Youth Group",
      location: "Chilika, Odisha",
      members: 320,
      leader: "Shri Arjun Patra",
      phone: "+91 98765 67892",
      email: "chilika.youth@gmail.com",
      projects: 5,
      status: "Active"
    },
    {
      id: 4,
      name: "Backwater Conservation Society",
      type: "Community Organization",
      location: "Vembanad, Kerala",
      members: 280,
      leader: "Smt. Lakshmi Menon",
      phone: "+91 98765 67893",
      email: "vembanad.conservation@gmail.com",
      projects: 3,
      status: "New Member"
    }
  ];

  const engagementPrograms = [
    { program: "Mangrove Awareness Campaigns", participants: 1200, sessions: 24, completion: 85 },
    { program: "Traditional Knowledge Workshops", participants: 600, sessions: 15, completion: 92 },
    { program: "Sustainable Fishing Training", participants: 800, sessions: 18, completion: 78 },
    { program: "Eco-Tourism Guide Training", participants: 150, sessions: 8, completion: 95 }
  ];

  const recentEvents = [
    { title: "Community Mangrove Plantation Drive", date: "Dec 22, 2024", participants: 200, location: "Sundarbans" },
    { title: "Traditional Fishing Practices Workshop", date: "Dec 18, 2024", participants: 85, location: "Pulicat" },
    { title: "Women's Leadership Training", date: "Dec 15, 2024", participants: 65, location: "Chilika" },
    { title: "Youth Environmental Awareness", date: "Dec 10, 2024", participants: 120, location: "Vembanad" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Community Engagement</h2>
          <p className="text-gray-600">Local community participation and stakeholder management</p>
        </div>
        <Button>
          <Heart className="h-4 w-4 mr-2" />
          New Initiative
        </Button>
      </div>

      {/* Community Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Community Groups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">32</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Active Members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">5,240</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Training Programs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">48</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Livelihood Impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">₹4.8Cr</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Groups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Community Groups & Organizations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {communityGroups.map((group) => (
              <div key={group.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {group.type === 'Fishermen Cooperative' ? <Fish className="h-4 w-4" /> :
                         group.type === 'Women\'s SHG' ? <Heart className="h-4 w-4" /> :
                         group.type === 'Youth Group' ? <Users className="h-4 w-4" /> :
                         <Waves className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{group.name}</h3>
                      <p className="text-sm text-gray-500">{group.type}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        {group.location}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{group.status}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Members</p>
                    <p className="font-semibold">{group.members}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Projects</p>
                    <p className="font-semibold">{group.projects}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Home className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{group.leader}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{group.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-600">{group.phone}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
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

      {/* Engagement Programs & Recent Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Engagement Programs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {engagementPrograms.map((program, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm">{program.program}</h4>
                    <Badge variant="outline" className="text-xs">
                      {program.completion}% Complete
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-2">
                    <div>
                      <p>Participants: {program.participants}</p>
                    </div>
                    <div>
                      <p>Sessions: {program.sessions}</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${program.completion}%` }}
                    ></div>
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
              Recent Community Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvents.map((event, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm mb-1">{event.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                    <MapPin className="h-3 w-3 ml-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    {event.participants} participants
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};