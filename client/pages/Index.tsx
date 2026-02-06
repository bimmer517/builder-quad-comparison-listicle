import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RankingCard } from "@/components/RankingCard";
import { DeepDiveSection } from "@/components/DeepDiveSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Index() {
  const [expandedProducts, setExpandedProducts] = useState(false);

  const toggleProducts = () => {
    setExpandedProducts(!expandedProducts);
  };

  const products = [
    {
      rank: 1,
      productName: "MEDVi QUAD",
      productImage: "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F8da990828c6c4a36bc261f37d98da865?format=webp&width=800&height=1200",
      isTopPick: true,
      score: 9.8,
      ratingText: "Excellent",
      customerReviews: 8247,
      pros: [
        "4-in-1 comprehensive formula",
        "15-minute onset time",
        "36-hour effectiveness window",
        "CNS + vascular dual-pathway",
        "Sublingual fast absorption",
        "No food/alcohol interference",
        "Zero subscription fees",
        "US-licensed physician care",
        "Discreet home delivery",
        "90-day money-back guarantee",
      ],
      cons: [
        "Higher cost than single-ingredient options",
        "Requires telehealth consultation",
      ],
      dealText: "Limited Time Deal: First Month $79",
      socialProof: "💓 1,856 people started consultations this week",
    },
    {
      rank: 2,
      productName: "Hims Hard Mints",
      productImage: "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F4bda750cc32d41bd82ea6d18d11c9dc2?format=webp&width=800&height=1200",
      brand: "Hims",
      score: 8.4,
      ratingText: "Good",
      customerReviews: 2891,
      pros: [
        "Recognizable brand",
        "Mint format",
        "Simple subscription model",
        "Wide marketing reach",
      ],
      cons: [
        "30-60 minute wait time",
        "4-6 hour window only",
        "PDE5 inhibitor only (no CNS)",
        "Food restrictions apply",
        "Inconsistent effectiveness",
      ],
    },
    {
      rank: 3,
      productName: "Ro Sparks",
      productImage: "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F1b762a4e79944c61beb4bb9e51bc3231?format=webp&width=800&height=1200",
      brand: "Ro",
      score: 8.1,
      ratingText: "Good",
      customerReviews: 1734,
      pros: [
        "15-minute sublingual onset",
        "Established telehealth brand",
        "Professional medical team",
        "Easy-to-use format",
      ],
      cons: [
        "Short 4-6 hour window",
        "Single mechanism (PDE5 only)",
        "No mental arousal component",
        "Higher monthly cost",
        "Limited spontaneity",
      ],
    },
    {
      rank: 4,
      productName: "BlueChew",
      productImage: "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2Fc49b0d29429d4f54a091b7be75f158f7?format=webp&width=800&height=1200",
      brand: "BlueChew",
      score: 7.3,
      ratingText: "Average",
      customerReviews: 1129,
      pros: [
        "Affordable pricing",
        "Chewable format",
        "No pharmacy visits",
        "Simple ordering",
      ],
      cons: [
        "30-45 minute onset",
        "Food/alcohol restrictions",
        "Basic sildenafil only",
        "Short effectiveness window",
        "Weak for stress-related ED",
      ],
    },
    {
      rank: 5,
      productName: "Generic Sildenafil",
      brand: "Various",
      score: 6.8,
      ratingText: "Average",
      customerReviews: 847,
      pros: [
        "Lowest upfront cost",
        "Widely available",
        "FDA-approved active ingredient",
      ],
      cons: [
        "45-60 minute wait time",
        "Strict food restrictions",
        "No mental arousal support",
        "4-6 hour window only",
        "Requires doctor visit or telehealth",
        "Inconsistent under stress",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />

        {/* Ranking Cards Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {products.map((product) => (
              <RankingCard
                key={product.rank}
                rank={product.rank}
                productName={product.productName}
                brand={product.brand}
                isTopPick={product.isTopPick}
                score={product.score}
                ratingText={product.ratingText}
                customerReviews={product.customerReviews}
                pros={product.pros}
                cons={product.cons}
                dealText={product.dealText}
                socialProof={product.socialProof}
                productImage={product.productImage}
                isHidden={product.rank > 3 && !expandedProducts}
              />
            ))}

            {/* Load More / Load Less Button */}
            {products.length > 3 && (
              <div className="flex flex-col items-center gap-4 mt-12 py-8">
                <button
                  onClick={toggleProducts}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    {expandedProducts ? "See Less Of The List" : "See The Rest Of The List"}
                  </span>
                  <ChevronUp
                    size={20}
                    className={`text-gray-400 transition-transform duration-300 ${
                      expandedProducts ? "rotate-0" : "rotate-180"
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        <DeepDiveSection />

        <TestimonialsSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
