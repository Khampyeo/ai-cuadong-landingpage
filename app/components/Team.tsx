import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import LinkedinIcon from "@/public/linkedin-svgrepo-com.svg";
const Team = () => {
  // Sample data for team members
  const members = [
    {
      name: "Phuc Nguyen",
      role: "Generative AI Product Lead",
      image: "/alice.jpg",
      domain: ["ESG", "AI Product Management", "Supply Chain"],
      linkedin: "",
    },
    {
      name: "Hung Dang Hoang Kieu",
      role: "Full Stack Engineer / Infrastructure System Engineer",
      image: "/bob.jpg",
      domain: [
        "DevOps",
        "System Networking",
        "Cloud Technologies",
      ],
      linkedin: "",
    },
    {
      name: "Nghia Nguyen",
      role: "AI Engineer",
      image: "/charlie.jpg",
      domain: ["AI/ML/DL Model Development", "Data Engineering"],
      linkedin: "",
    },
    {
      name: "Luan Tran",
      role: "AI Engineer",
      image: "/charlie.jpg",
      domain: ["Machine Learning", "Deep Learning", "Computer Vision"],
      linkedin: "",
    },
    {
      name: "Nam Pham",
      role: "Project Manager",
      image: "/charlie.jpg",
      domain: ["Natural Language Processing", "Machine Learning","Data Analysis"],
      linkedin: "",
    },
    {
      name: "Kiet Nguyen",
      role: "Fullstack Engineer",
      image: "/charlie.jpg",
      domain: ["Frontend Development", "Backend Development","Database Management"],
      linkedin: "",
    },
  ];

  return (
    <section id="member" className="py-20 bg-gray-100">
      <div className="mx-4 text-center">
        <h2 className="text-primary text-3xl font-bold mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <Card key={member.name} className="p-3">
              <CardHeader>
                <div className="w-32 h-32 mx-auto bg-black rounded-full"></div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <div className="flex justify-center gap-2 mt-3">
                  {member.domain.map((i, key) => (
                    <Badge key={key} variant="secondary">
                      <p className="font-medium">{i}</p>
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <LinkedinIcon />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;