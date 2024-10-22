"use client"
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const techs = [
  {
    name: "AI Avatar Assistant Demo",
    title: "Experience the Technology",
    description:
      "Experience our real-time AI Avatar assistant providing instant, natural communication with tourists:",
    features: [
      "Real-time facial expressions and emotions",
      "Natural voice synthesis in multiple languages",
      "Contextual understanding of tourist needs",
      "Seamless integration with local services",
    ],
    img: "/core-extract.jpg",
  },
  {
    name: "CORE-XTRACT AI Platform",
    title: "",
    description:
      "CORE-XTRACT leverages cutting-edge Machine Learning (ML) and Deep Learning (DL) algorithms to automate document processing. By converting human-centric tasks like data extraction, classification, and validation into automated processes, it ensures high levels of accuracy with human-level quality control. The platform is highly adaptable to various industries that require large-scale document handling, such as finance, healthcare, and logistics.",
    features: [],
    img: "/core-extract.jpg",
  },
  {
    name: "KEXEntrance Platform",
    title: "",
    description:
      "KEXEntrance, developed independently since 2022, is a foundational platform for Robotic Process Automation (RPA). This platform is designed to integrate Generative AI (GenAI) and Large Language Models (LLM), allowing organizations to scale their automation efforts while handling complex tasks that require cognitive understanding. It acts as a springboard for building future automation solutions.",
    features: [],
    img: "/avi.jpg",
  },

  {
    name: "POLYAI-NLP Retrieval CCTV",
    title: "",
    description:
      "POLYAI-NLP is an advanced Natural Language Processing (NLP) system that enhances surveillance by enabling intelligent CCTV retrieval. The system allows users to describe events in natural language, and the AI retrieves the relevant footage from video databases. This dramatically improves search efficiency in security systems and other surveillance-heavy applications.",
    features: [],
    img: "/cctv.jpg",
  },
];

const CoreTechHighLight = () => {
  return (
    <section id="tech" className="py-20 bg-white px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Core Tech Highlights
        </h2>
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
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
            {techs.map((tech, index) => (
              <CarouselItem key={index} className="w-full">
                <Card key={index} className="p-6 text-left">
                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-6">
                      <div className="w-full">
                        <div className="flex items-center gap-4 mb-4">
                          <CardTitle className="text-2xl">
                            {tech.name}
                          </CardTitle>
                        </div>
                        <p className="mb-4 font-semibold">{tech.title}</p>
                        <p className="text-gray-600 mb-4">{tech.description}</p>
                      </div>
                      <div>
                        <ul className="list-disc text-left pl-4 mb-4">
                          {tech.features.map((item, i) => (
                            <li key={i} className="mb-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4">
                        <Button className="font-semibold">Try Live Demo</Button>
                        <Button variant={"outline"} className="font-medium">
                          View Technical Specs
                        </Button>
                      </div>
                    </div>
                    <div
                      className="flex-1 bg-black overflow-hidden rounded-lg"
                    >
                      <img src={tech.img} alt="" className="w-full"/>
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

export default CoreTechHighLight;
