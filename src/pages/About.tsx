import { ArrowRight } from "lucide-react";

export const About = () => (
  <section className="py-20 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About Regent Coatings
        </h2>
        <p className="text-xl text-gray-600">
          Crafting Excellence in Wood Finishes Since 1995
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=800"
            alt="Our Story"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          <p className="text-gray-600 mb-6">
            For over 25 years, Regent Coatings has been at the forefront of wood
            finishing technology, delivering premium solutions that protect and
            enhance wooden surfaces across India.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            To provide innovative, eco-friendly wood finishing solutions that
            bring out the natural beauty of wood while ensuring lasting
            protection.
          </p>
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Quality Excellence
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Environmental Responsibility
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Customer Satisfaction
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
