import { BlogPost } from "../interface/BlogInterface";
import RegentBackground from "../assets/Regent_background_new.webp";
import RegentImage from "../assets/Regent_image.png";
import Drum from "../assets/Drum.jpg"; // Assuming this is the image for PU polish
export const coatings: BlogPost[] = [
  {
    id: "regent-coatings-polyurethane",
    title: "Regent Coatings Polyurethane",
    excerpt:
      "High-performance protection with lasting shine for industrial and marine applications.Regent Coatings Polyurethane is a premium-quality, two-component polyurethane finish formulated to provide outstanding durability, chemical resistance, and long-term weather protection.",
    date: "April 12, 2024",
    image: `${RegentBackground}`, // Replace with actual image URL
    link: "/blog/regent-polyurethane",
    content:
      "Regent Coatings Polyurethane is a premium-quality, two-component polyurethane finish formulated to provide outstanding durability, chemical resistance, and long-term weather protection. This high-performance coating delivers a sleek, high-gloss finish while safeguarding surfaces against harsh industrial environments, UV exposure, and abrasion.",
    keyFeatures: [
      "Exceptional Durability – Withstands abrasion, impact, and heavy wear.",
      "Chemical Resistance – Protects against oils, fuels, mild acids, and solvents.",
      "UV and Weather Resistant – Maintains color and gloss in exterior exposure.",
      "Smooth Gloss Finish – Professional-grade aesthetic appeal with excellent flow and leveling.",
      "Versatile Application – Compatible with spray, brush, or roller.",
      "Long-Term Protection – Designed to perform in aggressive industrial and marine environments.",
    ],
    applications: [
      "Industrial equipment and heavy machinery",
      "Steel structures, pipelines, and storage tanks",
      "Concrete floors, garages, and workshops",
      "Marine vessels, docks, and offshore platforms",
      "OEM manufacturing and refurbishment projects",
      "Decorative and protective coatings for architectural surfaces",
    ],
    technicalSpecs: [
      { property: "Type", value: "Two-component polyurethane coating" },
      { property: "Mixing Ratio", value: "2:1 (Base : Hardener)" },
      {
        property: "Finish",
        value: "High gloss (custom finishes available upon request)",
      },
      { property: "Solids Content", value: "50 ± 2%" },
      { property: "Specific Gravity", value: "1.10 ± 0.05" },
      { property: "Pot Life", value: "6 hours at 25°C" },
      { property: "Dry to Touch", value: "2–3 hours at 25°C" },
      { property: "Recoat Interval", value: "5–8 hours at 25°C" },
      {
        property: "Full Cure",
        value: "7 days at 25°C (faster with elevated temperatures)",
      },
      {
        property: "Recommended Thinner",
        value: "Polyurethane Thinner (Regent Brand)",
      },
      {
        property: "Application Methods",
        value: "Airless spray, conventional spray, brush, or roller",
      },
      { property: "Flash Point", value: "27°C" },
    ],
    surfacePrep: [
      "Surface must be clean, dry, and free from grease, rust, or loose material.",
      "For metal surfaces, sandblasting or mechanical cleaning is recommended.",
      "For concrete, ensure full curing, followed by cleaning and priming as required.",
      "Remove old, peeling paint prior to application.",
      "Always test a small area for compatibility.",
    ],
    packaging: [
      "Standard Sizes: 1.5L, 6L, and 30L sets (Base + Hardener)",
      "Custom packaging available upon request.",
    ],
    safety: [
      "Use in well-ventilated areas.",
      "Avoid contact with skin and eyes; wear protective gear.",
      "Store in a cool, dry place away from ignition sources.",
      "Keep out of reach of children.",
      "Refer to Safety Data Sheet (SDS) for full precautions.",
    ],
  },
  {
    id: "best-pu-polish",
    title: "Best PU Polish Brand in India - REGENT COATINGS",
    excerpt:
      "Regent Coatings is renowned for its high-quality polyurethane (PU) polishes that enhance and protect wooden surfaces.",
    date: "May 15, 2024",
    image: `${RegentImage}`, // Replace with actual image URL for PU polish
    link: "/blog/regent-pu-polish",
    content:
      "Regent Coatings is a distinguished brand in India, renowned for its high-quality polyurethane (PU) polishes that enhance and protect wooden surfaces. Their PU polishes are formulated to provide a durable, glossy finish, safeguarding furniture and fixtures from scratches, stains, and moisture.",
    keyFeatures: [
      "Durability: Offers a tough protective layer that resists wear and tear, extending the lifespan of wooden items.",
      "Glossy Finish: Imparts a high-gloss sheen, enhancing the natural beauty of wood.",
      "Protection: Guards against stains, moisture, and environmental factors, maintaining the wood's integrity.",
      "Ease of Application: Designed for smooth application, ensuring a uniform and professional-looking finish.",
    ],
    applications: [
      "Furniture: Ideal for enhancing the appearance and durability of wooden furniture.",
      "Cabinetry: Provides a protective and attractive finish for kitchen and storage cabinets.",
      "Wooden Fixtures: Suitable for doors, windows, and other wooden fixtures requiring a robust finish.",
    ],
    technicalSpecs: [], // No technical specs provided in the content, so leaving empty
    surfacePrep: [], // No surface preparation details provided
    packaging: [], // No packaging details provided
    safety: [], // No safety details provided
  },
  {
    id: "pu-polish-paints",
    title:
      "PU Polish/Paints in India That Lasts Forever - Only from Regent Coatings",
    excerpt:
      "Regent Coatings offers PU polish that withstands India’s toughest conditions, providing near-permanent protection.",
    date: "Jan 18, 2025",
    image: `${Drum}`, // Replace with actual image URL for this product
    link: "/blog/regent-pu-paints",
    content:
      "When it comes to long-lasting surface protection in India’s toughest conditions, Regent Coatings stands unmatched. Their PU (polyurethane) polish is specifically engineered to withstand the harshest environmental challenges—be it extreme humidity, scorching heat, coastal salinity, or industrial pollution. Regent’s PU polish is a two-component system (2K PU) that forms a hard, resilient film, offering exceptional resistance.",
    keyFeatures: [
      "UV Radiation Resistance: Protects against sun damage and fading.",
      "Chemical Exposure Resistance: Withstands oils, solvents, and other chemicals.",
      "Abrasion and Impact Resistance: Durable against wear and physical damage.",
      "Moisture and Humidity Resistance: Prevents damage from water and high humidity.",
      "Long-Lasting Finish: Doesn’t yellow, peel, or degrade over time with minimal maintenance.",
    ],
    applications: [
      "Exterior woodwork and furniture",
      "Metal structures like grills, gates, staircases",
      "Industrial flooring",
      "Pipelines and structural steel in marine/coastal areas",
    ],
    technicalSpecs: [], // No technical specs provided in the content
    surfacePrep: [], // No surface preparation details provided
    packaging: [], // No packaging details provided
    safety: [], // No safety details provided
  },
];
