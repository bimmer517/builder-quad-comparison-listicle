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
  isHidden?: boolean;
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
  isHidden = false,
}: RankingCardProps) {
  const getRatingStars = (score: number) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 !== 0;
    return (
      <div className="flex gap-0.5 justify-center">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              key={i}
              size={18}
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

  if (isHidden) return null;

  return (
    <div
      className={`relative mb-8 rounded-lg overflow-visible shadow-md transition-all duration-300 ${
        isTopPick ? "border-4 border-slate-900 bg-white" : "border border-gray-200 bg-white"
      }`}
    >
      {/* Top Pick Ribbon - Golden flag */}
      {isTopPick && (
        <div className="absolute -left-2 md:-left-1 top-7 md:top-8 w-16 md:w-20 h-12 md:h-14 z-10">
          <div className="relative w-full h-full">
            {/* Orange ribbon/flag */}
            <div
              className="absolute inset-0 bg-orange-500 shadow-md"
              style={{
                clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)",
              }}
            ></div>
            {/* #1 text on ribbon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-lg">
                #1
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Product Header */}
      <div className={`px-4 md:px-6 pt-6 pb-4 border-b border-gray-200 ${isTopPick ? "ml-20 md:ml-20" : ""}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
              {!isTopPick && (
                <span className="text-gray-400 font-bold">#{rank}</span>
              )}
              <span className="truncate">{productName}</span>
            </h3>
            {brand && <p className="text-xs md:text-sm text-gray-600 mt-1">by {brand}</p>}
          </div>
          {isTopPick && (
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">
              Best Choice in 2026
            </span>
          )}
        </div>
      </div>

      {/* Main Content Grid - 4 columns on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Product Image Column */}
        <div className="md:col-span-1 flex justify-center items-start p-4 md:border-r border-gray-200">
          <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {productImage ? (
              <img src={productImage} alt={productName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-400 text-sm text-center px-2">Product Image</span>
            )}
          </div>
        </div>

        {/* Pros Section */}
        <div className="md:col-span-1 p-4 md:border-r border-gray-200">
          <h4 className="font-bold text-emerald-600 text-base mb-4 uppercase tracking-wide">
            Pros
          </h4>
          <ul className="space-y-2">
            {pros.map((pro, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-slate-700 leading-snug">
                <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cons Section */}
        <div className="md:col-span-1 p-4 md:border-r border-gray-200">
          <h4 className="font-bold text-rose-600 text-base mb-4 uppercase tracking-wide">
            Cons
          </h4>
          <ul className="space-y-2">
            {cons.map((con, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-slate-700 leading-snug">
                <XCircle size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Review Score Card */}
        <div className="md:col-span-1 p-4 bg-gray-50 flex flex-col items-center justify-start">
          <div className="text-center w-full">
            <div className="text-5xl font-bold text-slate-900 mb-2">
              {score.toFixed(1)}
            </div>
            {getRatingStars(score)}
            <p className="font-semibold text-slate-900 mt-2 text-sm">{ratingText}</p>

            {dealText && (
              <p className="text-xs font-semibold text-rose-600 mt-3 leading-tight">
                {dealText}
              </p>
            )}

            {/* Visit Site Button */}
            <button
              onClick={() => window.open("https://example.com", "_blank")}
              className="w-full mt-4 px-4 py-3 bg-white border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-200 text-sm uppercase tracking-wider"
            >
              VISIT SITE
            </button>

            {socialProof && (
              <div className="flex items-center justify-center gap-2 text-xs text-rose-600 mt-3 px-2 py-2 bg-rose-50 rounded w-full">
                <span>💓</span>
                <span className="text-center">{socialProof}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Read Full Review Link - only for top pick */}
      {isTopPick && (
        <div className="text-center py-4 border-t border-gray-200">
          <a href="#deep-dive" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
            Read Full Product Review
          </a>
        </div>
      )}
    </div>
  );
}
