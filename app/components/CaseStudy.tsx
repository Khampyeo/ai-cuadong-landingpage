"use client";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BarChart, Camera, FileText, MessageSquare } from "lucide-react";

const caseStudies = [
  {
    title: "Supply Chain Document Automation",
    icon: <FileText className="w-12 h-12 text-orange-500" />,
    challenge:
      "A leading manufacturing company struggled with processing 10,000+ monthly invoices and POs manually, leading to delays and errors.",
    solution:
      "Implemented an intelligent document processing system using Computer Vision and NLP to:",
    implementation: [
      "Automatically extract data from various document formats",
      "Validate information against business rules",
      "Integrate with existing ERP system",
      "Enable real-time tracking and reporting",
    ],
    results: [
      "90% reduction in processing time",
      "99.5% accuracy in data extraction",
      "Cost savings of $200,000 annually",
      "Improved vendor relationships",
    ],
    technologies: ["OCR", "NLP", "Machine Learning", "Python", "React"],
  },
  {
    title: "Intelligent Security Surveillance",
    icon: <Camera className="w-12 h-12 text-orange-500" />,
    challenge:
      "A commercial complex needed to modernize their security system and automate incident detection across 100+ cameras.",
    solution:
      "Developed an AI-powered surveillance system with natural language search capabilities:",
    implementation: [
      "Real-time video analysis for threat detection",
      "Natural language interface for video search",
      "Automated alert system",
      "Integration with existing security infrastructure",
    ],
    results: [
      "80% faster incident response time",
      "100% coverage of critical areas",
      "Reduced security staff workload by 60%",
      "Enhanced visitor safety",
    ],
    technologies: ["Computer Vision", "NLP", "Real-time Processing", "Python"],
  },
  {
    title: "Sales Operations Automation",
    icon: <BarChart className="w-12 h-12 text-orange-500" />,
    challenge:
      "A B2B Electric company in Vietnam struggled with complex sales bonus calculations and commission processing, causing delays and disputes.",
    solution:
      "Integration with CRM (Salesforce) and payment systems (Oracle JDE):",
    implementation: [
      "Automated bonus calculation engine",
      "Real-time performance tracking",
      "Integration with CRM and payment systems",
      "Self-service reporting portal",
    ],
    results: [
      "95% reduction in processing time",
      "Zero calculation errors",
      "Improved sales team satisfaction",
      "Transparent commission tracking",
    ],
    technologies: ["Machine Learning", "Spring Boot", "React", "SQL"],
  },
  {
    title: "AI Customer Support Assistant",
    icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
    challenge:
      "A tech company needed to scale customer support while maintaining quality and reducing response times.",
    solution: "Implemented an AI-powered support assistant with:",
    implementation: [
      "Multi-language support capability",
      "Integration with knowledge base",
      "Context-aware responses",
      "Seamless human handoff",
    ],
    results: [
      "70% reduction in response time",
      "24/7 support availability",
      "40% reduction in support costs",
      "85% positive customer feedback",
    ],
    technologies: ["NLP", "LLM", "Node.js", "React"],
  },
];

const CaseStudy = () => {
  return (
    <section id="case-studies" className="py-20 bg-white px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Case Studies</h2>
        <p className="mb-12 text-lg text-gray-600">
          Discover how we&apos;ve helped our clients achieve remarkable results
          through our solutions.
        </p>

        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnMouseEnter: true,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full">
            <span className="sr-only">Previous</span>
          </CarouselPrevious>

          <CarouselContent>
            {caseStudies.map((caseStudy, index) => (
              <CarouselItem
                key={index}
                className="w-full md:w-1/2 md:basis-1/2"
              >
                <Card key={index} className="p-6 text-left">
                  <div className="flex flex-col gap-6">
                    <div className="w-full">
                      <div className="flex items-center gap-4 mb-4">
                        {caseStudy.icon}
                        <CardTitle>{caseStudy.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 mb-4">
                        <strong>Challenge:</strong>
                        <br />
                        {caseStudy.challenge}
                      </p>
                      <p className="text-gray-600 mb-4">
                        <strong>Solution:</strong>
                        <br />
                        {caseStudy.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Implementation</h4>
                      <ul className="list-disc grid grid-cols-2 gap-4 text-left pl-4 mb-4">
                        {caseStudy.implementation.map((item, i) => (
                          <li key={i} className="mb-2">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <ul className="list-disc grid grid-cols-2 text-left gap-4 pl-4 mb-4">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="mb-2">
                            {result}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3 mt-4">
                        {caseStudy.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 z-10 rounded-full">
            <span className="sr-only">Next</span>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudy;
