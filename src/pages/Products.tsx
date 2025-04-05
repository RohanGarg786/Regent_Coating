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
            name1: "RC53030",
            name2: "REGENT ACR EST TX 5303",
            name3: "POLYURETHANE ACRY. CLEAR SEALER",
            description:
              "Converter acrilico fondo finitura neutro per esterno, caratterizzato da eccellente la resistenza agli agenti atmosferici ed all'ingiallimento. Da pigmentare con mix paste al 20% della nostra serie R950 - PASTE UNIVERSALI. Consigliato per infissi e manufatti esterni. Se opportunamente trattato può essere utilizzato su qualsiasi tipologia di legno.",
          },
          {
            name1: "RC 090",
            name2: "REGENT UREPAC 30 TIX",
            name3: "POLYURETHANE ACRY. MATT TOPCOAT",
            description:
              "acrilico finitura neutro per esterno, caratterizzato da eccellente la resistenza agli agenti atmosferici ed all'ingiallimento.Opaco sintetico monocomponente tixotropico, dotata di buon riempimento, verticalità e rapidità di essiccazione. Consigliato per infissi e manufatti esterni pre-impregnati.",
          },
          {
            name1: "RC540X",
            name2: "REGENT ACR EST BIANCO",
            name3: "POLYURETHANE ACRY. WHITE SEALER",
            description:
              "Converter acrilico fondo finitura bianco per esterno, caratterizzato da eccellente la resistenza agli agenti atmosferici ed all'ingiallimento.Consigliato per infissi e manufatti esterni. Se opportunamente trattato può essere utilizzato su qualsiasi ti pologia di legno.",
          },
          {
            name1: "RC210",
            name2: "FLATTING LUCIDA",
            name3: "POLYURETHANE ACRY. CLEAR GLOSSY",
            description:
              "Vernice sintetica lucida monocomponente dotata di brillantezza, distensione e resistenza agli agenti atmosferici. Consigliata per infissi e manufatti esterni. Il pulviscolo della spruzzatura può causare fenomeni di autocombustione, pertanto pulire accuratamente il luogo a fine lavor",
          },
          {
            name1: "RC310",
            name2: "FLATTING LUCIDA CH",
            name3: "POLYURETHANE CHROME FINISH",
            description:
              "Vernice sintetica lucida monocomponente dotata di brillantezza, distensione e resistenza agli agenti atmosferici. Consigliata per infissi e manufatti esterni. Il pulviscolo della spruzzatura può causare fenomeni di autocombustione, pertanto pulire accuratamente il luogo a fine lavoro.",
          },
          {
            name1: "RC410",
            name2: "FLATTING LUCIDA SE",
            name3: "POLYURETHANE SPECIAL EFFECTS",
            description:
              "Vernice sintetica lucida monocomponente dotata di brillantezza, distensione e resistenza agli agenti atmosferici. Consigliata per infissi e manufatti esterni. Il pulviscolo della spruzzatura può causare fenomeni di autocombustione, pertanto pulire accuratamente il luogo a fine lavoro.",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
          >
            <img src={Regent_coatings} alt={product.name1} />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {product.name1}
            </h3>
            <h4 className="text-l font-semibold mb-2 text-center">
              {product.name2}
            </h4>
            <h5 className="text-m font-semibold mb-2 text-center">
              {product.name3}
            </h5>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {/* <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-600">
                  <ArrowRight className="h-4 w-4 mr-2 text-emerald-600" />
                  {feature}
                </li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);
