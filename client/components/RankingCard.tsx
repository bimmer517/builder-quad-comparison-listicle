import { StarIcon, CheckCircle2, XCircle } from "lucide-react";

interface RankingCardProps {
  rank: number;
  productName: string;
  brand?: string;
  isTopPick?: boolean;
  score: number;
  ratingText: string;
  customerReviews: number;
  pros: string[];
  cons: string[];
  dealText?: string;
  socialProof?: string;
  productImage?: string;
}

export function RankingCard({
  rank,
  productName,
  brand,
  isTopPick = false,
  score,
  ratingText,
  customerReviews,
  pros,
  cons,
  dealText,
  socialProof,
  productImage,
}: RankingCardProps) {
  const getRatingStars = (score: number) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 !== 0;
    return (
      <div className="flex gap-0.5">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              key={i}
              size={20}
              className={`${
                i < fullStars
                  ? "fill-teal-500 text-teal-500"
                  : i === fullStars && hasHalf
                    ? "fill-teal-300 text-teal-500"
                    : "text-gray-300"
              }`}
            />
          ))}
      </div>
    );
  };

  return (
    <div
      className={`relative mb-12 ${isTopPick ? "border-4 border-slate-900 rounded-2xl p-6 md:p-8 bg-white shadow-lg" : ""}`}
    >
      {/* Top Pick Ribbon */}
      {isTopPick && (
        <div className="absolute -left-6 top-8 md:top-12">
          <div className="relative">
            <div className="w-0 h-0 border-l-16 border-r-0 border-t-8 border-b-8 border-l-orange-500 border-t-transparent border-b-transparent"></div>
            <div className="absolute -left-4 top-0 w-8 h-4 bg-orange-500"></div>
          </div>
        </div>
      )}

      {/* Rank Number and Product Header */}
      <div className="flex items-start gap-4 md:gap-6 mb-6">
        {/* Rank with ribbon effect */}
        {isTopPick && (
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-gray-400">#1</span>
            <div className="w-16 h-16 bg-gradient-to-b from-orange-400 to-orange-600 transform -skew-y-12"></div>
          </div>
        )}
        {!isTopPick && (
          <span className="text-3xl font-bold text-gray-400">#{rank}</span>
        )}

        {/* Product Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
              {productName}
            </h3>
            {isTopPick && (
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Best Choice in 2025
              </span>
            )}
          </div>
          {brand && <p className="text-gray-600 text-sm">by {brand}</p>}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Product Image */}
        {productImage && (
          <div className="md:col-span-1 flex justify-center">
            <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-sm">Product Image</span>
            </div>
          </div>
        )}

        {/* Pros Section */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-emerald-600 text-lg mb-3">PROS</h4>
          <ul className="space-y-2">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Section */}
        <div className="md:col-span-1">
          <h4 className="font-bold text-rose-600 text-lg mb-3">CONS</h4>
          <ul className="space-y-2">
            {cons.map((con, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-slate-700">
                <XCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Review Score Card */}
        <div className="md:col-span-1 border border-gray-300 rounded-lg p-4">
          <div className="text-center space-y-2">
            <div className="text-5xl font-bold text-slate-900">{score.toFixed(1)}</div>
            {getRatingStars(score)}
            <p className="font-semibold text-slate-900">{ratingText}</p>
            <p className="text-xs text-gray-600">
              {customerReviews.toLocaleString()} Customer Reviews
            </p>

            {dealText && (
              <p className="text-xs font-semibold text-rose-600 mt-3">{dealText}</p>
            )}

            {/* Visit Site Button */}
            <button
              onClick={() => window.open("https://example.com", "_blank")}
              className="w-full mt-4 px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200 text-sm uppercase tracking-wide"
            >
              VISIT SITE
            </button>

            {socialProof && (
              <div className="flex items-center justify-center gap-2 text-xs text-rose-600 mt-3 px-3 py-2 bg-rose-50 rounded">
                <span>💓</span>
                <span>{socialProof}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Read Full Review Link */}
      {isTopPick && (
        <div className="text-center mt-6">
          <a href="#deep-dive" className="text-blue-600 hover:underline font-semibold">
            Read Full Product Review
          </a>
        </div>
      )}
    </div>
  );
}
