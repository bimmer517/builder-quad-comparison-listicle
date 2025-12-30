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
      productName: "Tagsley",
      isTopPick: true,
      score: 9.8,
      ratingText: "Excellent",
      customerReviews: 9137,
      pros: [
        "Ultra-slim 1.8mm profile",
        "5-month battery life",
        "Fast wireless charging",
        "Left-behind alerts",
        "No subscription fees",
        "IP68 water resistant",
        "Apple Find My certified",
        "Global tracking network",
        "Premium card material",
        "Loud ring-to-find sound",
      ],
      cons: ["Often out of stock due to high demand"],
      dealText: "Limited Time Deal: 70% Off",
      socialProof: "2,184 people bought this week",
    },
    {
      rank: 2,
      productName: "Tile Pro",
      brand: "Target",
      score: 8.6,
      ratingText: "Good",
      customerReviews: 1134,
      pros: [
        "Replaceable battery",
        "Wide compatibility",
        "Community finding network",
        "Established brand trust",
      ],
      cons: ["Weak volume", "Too thick for modern wallets"],
    },
    {
      rank: 3,
      productName: "SmartTrack Card",
      brand: "Eufy",
      score: 8.2,
      ratingText: "Good",
      customerReviews: 923,
      pros: [
        "Affordable price point",
        "Decent build quality",
        "Easy setup process",
        "3-year battery life",
      ],
      cons: [
        "Non-rechargeable battery",
        "Poor location updates",
        "Weak alert sound",
      ],
    },
    {
      rank: 4,
      productName: "Card Universal",
      brand: "pebblebee",
      score: 7.1,
      ratingText: "Average",
      customerReviews: 543,
      pros: [
        "Universal compatibility",
        "Decent tracking range",
        "Multiple color options",
      ],
      cons: [
        "Requires special charger",
        "No left-behind alerts",
        "Cheap material",
        "Confusing setup process",
        "Not loud enough sound",
      ],
    },
    {
      rank: 5,
      productName: "Tracking Card",
      brand: "NOMAD",
      score: 6.3,
      ratingText: "Average",
      customerReviews: 291,
      pros: [
        "Premium brand reputation",
        "Sleek design aesthetic",
        "Solid construction feel",
      ],
      cons: [
        "Poor tracking precision",
        "Weak audio alerts",
        "Inconsistent connectivity",
        "Limited battery life",
        "Overpriced",
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
              />
            ))}
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
