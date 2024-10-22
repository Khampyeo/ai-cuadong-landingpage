// components/ReviewSection.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Sample review data
const reviews = [
  {
    name: "Pavel",
    job: "Business Solution Director Infologistics Global",
    review:
      "The AI Avatar Assistant is incredibly responsive and understands my requirements perfectly. It's like talking to a real person!",
    rating: 5,
  },
  {
    name: "Florian",
    job: "CTO Digi-Texx Vietnam",
    review:
      "I used the AI assistant for my e-commerce platform, and it significantly improved customer satisfaction with real-time support.",
    rating: 4,
  },
  {
    name: "Phil Nguyen",
    job: "Generative AI Product Lead FPT Software",
    review:
      "Integrating the AI Avatar Assistant with our app was seamless. It provides excellent contextual responses and voice synthesis.",
    rating: 5,
  },
];

const Review = () => {

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary">What Our Users Say</h2>
        <p className="text-lg text-gray-600 mt-2">
          Hear from our satisfied users about their experience with our AI solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <Card key={index} className="bg-white shadow-lg transition-transform hover:scale-105">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{review.name}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">{review.job}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-xl">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                  <span key={idx} className="text-gray-300 text-xl">★</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Review