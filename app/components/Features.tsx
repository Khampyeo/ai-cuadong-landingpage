import BrainIcon from "@/public/brain-svgrepo-com.svg";
import CodeIcon from "@/public/code-svgrepo-com.svg";
import BagIcon from "@/public/briefcase-alt-svgrepo-com.svg";
const Features = () => {
  const features = [
    {
      icon: <BrainIcon/>,
      title: "Inovative Thinking",
      description:
        "Designing creative solutions for compplex security and automation challenges",
    },
    {
      icon: <CodeIcon/>,
      title: "Deep Learning Expertise",
      description:
        "Mastery of 3D CNNs and Transformer models for computer vision and NLP",
    },
    {
      icon: <BagIcon/>,
      title: "Scalable Systems",
      description: "Building modular, enterprise-grade AI architectures",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="mx-4 text-center">
        <h2 className="text-primary text-3xl font-bold mb-6">Core Competencies</h2>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white flex-1 p-6 rounded-lg shadow-lg"
            >
              <div className="text-primary flex gap-2 justify-center items-center mb-2">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
