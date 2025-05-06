import { ScrollReveal } from "../components/ScrollReveal";
export const Contact = () => (
  <section className="py-20 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">
            Get in touch with our wood finishing experts
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Our Locations</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Head Office</h4>
              <p className="text-gray-600">
                REGENT COATINGS,
                <br />
                Piazza Signorelli,
                <br />1 27020 Parona (PV) Italia
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Factory</h4>
              <p className="text-gray-600">
                REGENT COATINGS,
                <br />
                Piazza Signorelli,
                <br />1 27020 Parona (PV) Italia
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Phone:</strong> +39 0384-25301
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:regentcoatings@gmail.com"
                  className="text-gray-600 hover:underline"
                >
                  regentcoatings@gmail.com
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Business Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
        <ScrollReveal>
        <div>
          <h3 className="text-2xl font-bold mb-6">Find Us</h3>
          <div className="relative w-full h-0 pb-[56.25%] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.2766139911264!2d8.7498778!3d45.2826318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786fe0c906e6e31%3A0x6c0ffb4e36b140ab!2sPiazza%20Signorelli%2C%201%2C%2027020%20Parona%20PV%2C%20Italy!5e0!3m2!1sen!2sin!4v1743871426607!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </ScrollReveal>
      </div>
      </ScrollReveal>
    </div>
  </section>
);
