import map from "../assets/map.png";

export const Contact = () => (
  <section className="py-20 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-xl text-gray-600">
          Get in touch with our wood finishing experts
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">Our Locations</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Head Office</h4>
              <p className="text-gray-600">
                123 Wood Street
                <br />
                Mumbai, Maharashtra 400001
                <br />
                India
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Factory</h4>
              <p className="text-gray-600">
                456 Industrial Area
                <br />
                Pune, Maharashtra 411001
                <br />
                India
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Phone:</strong> +91 123 456 7890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@regentcoatings.com
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
        <div>
          <h3 className="text-2xl font-bold mb-6">Find Us</h3>
          <div className="bg-gray-200 w-full h-96 rounded-lg">
            <img
              src={map}
              alt="Location"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
