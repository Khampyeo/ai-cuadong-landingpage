import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-primary text-3xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>

          <div className="text-center">
            <Button className="font-semibold">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default ContactUs;
