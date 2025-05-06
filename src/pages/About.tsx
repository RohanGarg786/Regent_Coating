import { ArrowRight } from "lucide-react";
import Company from "../assets/Company.png";
import { ScrollReveal } from "../components/ScrollReveal";
export const About = () => (
  <section className="py-20 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          The Legacy of Regent Coatings
        </h2>
        <p className="text-xl text-gray-600">
          Crafting Excellence in Wood Finishes Since 1995
        </p>
      </div>
        </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-12">
      <ScrollReveal>
        <div>
          <img src={Company} alt="Our Story" className="rounded-lg shadow-xl" />
        </div>
        </ScrollReveal>
        <div>
        <ScrollReveal>
          <h3 className="text-2xl font-bold mb-4">
            The Story of Regent Coatings
          </h3>
          </ScrollReveal>
          <ScrollReveal>
          <p className="text-gray-600 mb-6">
            Founded with a vision to redefine excellence in surface finishing,
            Regent Coatings was born out of a deep passion for craftsmanship and
            a commitment to quality. The name "Regent" was chosen to represent
            royalty, authority, and enduring elegance—values that mirror the
            superior performance and majestic finish our products bring to every
            surface.
          </p>
          </ScrollReveal>
          <ScrollReveal>
          <p className="text-gray-600 mb-6">
            From humble beginnings in a small workshop, Regent Coatings quickly
            earned a reputation for delivering wood finishes that not only
            protect but also enhance the natural beauty of wood. Inspired by the
            timeless sophistication of Italian craftsmanship, we blended
            traditional expertise with modern technology to create finishes that
            exude warmth, richness, and depth.
          </p>
          </ScrollReveal>
          <ScrollReveal>
          <p className="text-gray-600 mb-6">
            Over the years, our product line expanded—from polyurethane and
            melamine to cutting-edge water-based and eco-friendly finishes—while
            our commitment to innovation, durability, and aesthetic brilliance
            remained unchanged. Today, Regent Coatings stands as a trusted name
            in homes, workshops, and luxury interior projects, celebrated not
            just for its products, but for the values it represents: heritage,
            quality, and a finish worthy of royalty.
          </p>
          </ScrollReveal>
          <ScrollReveal>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          </ScrollReveal>
          <ScrollReveal>
          <p className="text-gray-600 mb-6">
            To provide innovative, eco-friendly wood finishing solutions that
            bring out the natural beauty of wood while ensuring lasting
            protection.
          </p>
          </ScrollReveal>
          <ScrollReveal>
          <h3 className="text-2xl font-bold mb-4">Our Values</h3>
          </ScrollReveal>
          <ul className="space-y-2">
          <ScrollReveal>
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Quality Excellence
            </li>
            </ScrollReveal>
            <ScrollReveal>
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Environmental Responsibility
            </li>
            </ScrollReveal>
            <ScrollReveal>
            <li className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
              Customer Satisfaction
            </li>
            </ScrollReveal>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
