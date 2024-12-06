"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-32 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
          AI-CuaDong
          <br />
          <span className="text-primary">Pioneering AI Solutions</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Transforming business through innovative AI technologies and deep
          technical expertise
        </p>

        <div className="flex flex-col items-center mt-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button
            onClick={() => router.push("https://portal.ai-cuadong.com")}
            size="lg"
            variant="default"
            className="font-semibold"
          >
            Explore Our Solutions
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
