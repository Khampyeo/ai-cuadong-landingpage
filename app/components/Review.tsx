// components/ReviewSection.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Sample review data
const reviews = [
  {
    name: "Pavel",
    job: "Business Solution Director Infologistics Global",
    review:
      "CORE-XTRACT automates document processing with advanced ML and DL, ensuring accuracy and reliability across industries. It handles large volumes well, though initial setup can be challenging. Delivers great results once configured!",
    rating: 5,
  },
  {
    name: "Florian",
    job: "CTO Digi-Texx Vietnam",
    review:
      "KEXEntrance is a solid RPA foundation, integrating Generative AI and LLMs to handle complex tasks and scale automation. It’s great for building future solutions, though user experience could be smoother. A strong choice for advancing automation efforts!",
    rating: 4,
  },
  {
    name: "Dat Nguyen Tan",
    job: "Project Manager at FPT Software",
    review:
      "Integrating the AI Avatar Assistant with our app was seamless. It provides excellent contextual responses and voice synthesis.",
    rating: 5,
  },
  {
    name: "Son Le",
    job: "DU Lead at CMC Global",
    review:
      "CORE-XTRACT intelligent document processing has significantly enhanced document workflow by automating document handling, reducing manual errors, and cutting processing time. The seamless integration of automation has streamlined operations, ensuring greater accuracy, speed, and efficiency in our claim management processs",
    rating: 4,
  },
];

const Review = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary">Testimonials</h2>
        <p className="text-lg text-gray-600 mt-2">
          Hear from our satisfied users about their experience with our AI
          solutions.
        </p>
      </div>

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
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="w-full md:w-1/2 md:basis-1/2 lg:w-1/3 lg:basis-1/3"
            >
              <Card
                key={index}
                className="bg-white shadow-lg transition-transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {review.name}
                  </CardTitle>
                  <p className="text-sm text-gray-500 mt-1">{review.job}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{review.review}</p>
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                      <span key={idx} className="text-gray-300 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Review;
