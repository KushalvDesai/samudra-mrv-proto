import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  FlaskConical, 
  Microscope, 
  BookOpen, 
  Users,
  Building2,
  GraduationCap,
  Award,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const ValidationResearch = () => {
  const researchInstitutions = [
    { name: "ICMAM - Chennai", projects: 12, status: "Active" },
    { name: "NIO - Goa", projects: 8, status: "Active" },
    { name: "CAS in Marine Biology - Kerala", projects: 6, status: "Active" },
    { name: "CMLRE - Kochi", projects: 4, status: "Active" }
  ];

  const ongoingStudies = [
    { title: "Mangrove Carbon Sequestration Rates", progress: 78, duration: "18 months" },
    { title: "Seagrass Ecosystem Assessment", progress: 45, duration: "24 months" },
    { title: "Salt Marsh Restoration Efficiency", progress: 92, duration: "12 months" },
    { title: "Coastal Sediment Analysis", progress: 30, duration: "36 months" }
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Research Coordination</h2>
          <p className="text-gray-600">Collaborative research with scientific institutions</p>
        </div>
        <Button>
          <Users className="h-4 w-4 mr-2" />
          New Collaboration
        </Button>
      </div>

      {/* Research Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Active Collaborations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">15</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Ongoing Studies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">23</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Published Papers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">67</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium">
              Research Grants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold">₹12.5Cr</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partner Institutions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Partner Research Institutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {researchInstitutions.map((institution) => (
                <div key={institution.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium">{institution.name}</p>
                      <p className="text-sm text-gray-500">{institution.projects} active projects</p>
                    </div>
                  </div>
                  <Badge variant="default">{institution.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Microscope className="h-5 w-5 text-primary" />
              Ongoing Research Studies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ongoingStudies.map((study) => (
                <div key={study.title} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{study.title}</p>
                      <p className="text-xs text-gray-500">Duration: {study.duration}</p>
                    </div>
                    <span className="text-sm font-medium">{study.progress}%</span>
                  </div>
                  <Progress value={study.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Publications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Recent Publications & Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Carbon Storage Assessment in Indian Mangroves", journal: "Marine Ecology Progress", date: "Dec 2024" },
              { title: "Seagrass Restoration Success Metrics", journal: "Coastal Research Journal", date: "Nov 2024" },
              { title: "Blue Carbon Methodology Validation", journal: "Nature Climate Change", date: "Oct 2024" },
              { title: "Coastal Ecosystem Services Valuation", journal: "Ecosystem Services", date: "Sep 2024" }
            ].map((publication) => (
              <div key={publication.title} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-sm mb-2">{publication.title}</h4>
                <p className="text-xs text-gray-500 mb-1">{publication.journal}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {publication.date}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};