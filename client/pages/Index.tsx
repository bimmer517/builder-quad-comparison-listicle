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
      productName: "MedVi Quad 4 in 1",
      productImage:
        "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F8da990828c6c4a36bc261f37d98da865?format=webp&width=800&height=1200",
      isTopPick: true,
      score: 9.8,
      ratingText: "Excellent",
      customerReviews: 8247,
      pros: [
        "Ignites sexual desire (Apomorphine)",
        ">10 minute onset (Vardenafil)",
        "Rock-solid, bigger erections (Sildenafil)",
        "36-hour window (Tadalafil)",
        "Works after dinner & drinks (Sublingual delivery)",
        "Money back guarantee",
      ],
      cons: ["Requires online consultation", "Harder to qualify"],
    },
    {
      rank: 2,
      productName: "Rugiet 3 in 1",
      productImage:
        "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2Fb4c67d36804a4c9e9829f9512dffa0fc?format=webp&width=800&height=1200",
      brand: "Rugiet Health",
      score: 8.9,
      ratingText: "Excellent",
      customerReviews: 4521,
      pros: [
        "15-30 minute onset (Sildenafil)",
        "24-36 hour duration (Tadalafil)",
        "Enhances desire (Apomorphine)",
        "Flavored mint chocolate",
      ],
      cons: [
        "Customers report side effects",
        "High cost per dose ($6-$10)",
        "Subscription model only",
        "Flavor taste bad",
      ],
    },
    {
      rank: 3,
      productName: "Hims 2 in 1 Mints",
      productImage:
        "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F4bda750cc32d41bd82ea6d18d11c9dc2?format=webp&width=800&height=1200",
      brand: "Hims",
      score: 8.4,
      ratingText: "Good",
      customerReviews: 2891,
      pros: [
        "Strengthened erections (Sildenafil)",
        "Last 24-36 hours (Tadalafil)",
        "30m-1hr onset (Vardenafil)",
        "Popular branding",
        "Vitamin B12",
      ],
      cons: [
        "30-60 minute wait time",
        "4-6 hour window only",
        "Doesn't ignite desire",
        "Food restrictions apply",
        "Inconsistent effectiveness",
        "Expensive doses",
        "Hard to reach customer service",
      ],
    },
    {
      rank: 4,
      productName: "Ro Sparks 2 in 1",
      productImage:
        "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F1b762a4e79944c61beb4bb9e51bc3231?format=webp&width=800&height=1200",
      brand: "Ro",
      score: 8.1,
      ratingText: "Good",
      customerReviews: 1734,
      pros: [
        "Harder erections (Sildenafil)",
        "24-36 hour duration (Tadalafil)",
      ],
      cons: [
        "Short 4-6 hour window",
        "No mental arousal",
        "Higher monthly cost",
        "Limited spontaneity",
        "Taste bad",
      ],
    },
    {
      rank: 5,
      productName: "BlueChew",
      productImage:
        "https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2Fc49b0d29429d4f54a091b7be75f158f7?format=webp&width=800&height=1200",
      brand: "BlueChew",
      score: 7.3,
      ratingText: "Average",
      customerReviews: 1129,
      pros: ["Stronger erections (Sildenafil)", "Cheaper doses"],
      cons: [
        "30-60 minute onset",
        "Food/alcohol restrictions",
        "Basic sildenafil only",
        "2-6 hour window",
        "Weak for stress-related ED",
        "Doesn't ignite desire ",
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
                    {expandedProducts
                      ? "See Less Of The List"
                      : "See The Rest Of The List"}
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
