import { ArrowRight } from "lucide-react";
import Regent_coatings from "../assets/Regent_coatings.png";

export const Products = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
        Our Products
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Hi-Gloss Wood Polish",
            description: "Mirror-like finish for luxury wood surfaces",
            image:
              "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800",
            features: [
              "High gloss finish",
              "Scratch resistant",
              "Long-lasting protection",
            ],
          },
          {
            name: "Matte Wood Sealer",
            description: "Natural, sophisticated matte finish",
            image:
              "https://images.unsplash.com/photo-1614014077943-840960ce6694?auto=format&fit=crop&w=800",
            features: ["Natural look", "Water resistant", "Easy application"],
          },
          {
            name: "Wood Grain Enhancer",
            description: "Brings out the natural beauty of wood",
            image:
              "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&w=800",
            features: ["Enhances grain", "Deep penetration", "Rich color"],
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
          >
            <img src={Regent_coatings} alt={product.name} />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
