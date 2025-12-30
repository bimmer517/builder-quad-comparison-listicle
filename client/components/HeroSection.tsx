export function HeroSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-400 mb-8">
          Best Wallet Trackers of 2025
        </h1>

        {/* Metadata */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Last Updated - Dec 25, 2025
          </span>
          <span>|</span>
          <a href="#disclosure" className="text-blue-600 hover:underline">
            Advertising disclosure
          </a>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Avatar placeholder - using CSS since we can't load external images */}
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
            BC
          </div>
          <span className="text-gray-700">Written by Benjamin Chos</span>
          <span className="text-lg">🇺🇸</span>
        </div>

        {/* Tested & Approved Badge */}
        <div className="mb-8">
          <p className="text-gray-600 font-semibold mb-2">Tested & Approved</p>
          <p className="text-sm text-gray-500 mb-2">Consumers' Reviews</p>
          <div className="flex justify-center gap-1">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="text-2xl">
                  ⭐
                </span>
              ))}
          </div>
        </div>

        {/* Introduction Text */}
        <div className="text-left max-w-3xl mx-auto space-y-4 text-gray-700 leading-relaxed">
          <p>
            I've spent three months testing because most solutions completely miss the mark. AirTags
            are too thick, Tile trackers die when you need them, and subscription trackers drain
            your bank account.
          </p>
          <p>
            After real-world testing in wallets, laptop bags, purses, and travel pouches, I've found
            five that actually work anywhere you need them. One completely changed how I think about
            never losing important things.
          </p>
          <p>
            I've spent three months testing because most solutions completely miss the mark. AirTags
            are too thick, Tile trackers die when you need them, and subscription trackers drain
            your bank account.
          </p>
          <p>
            After real-world testing in wallets, laptop bags, purses, and travel pouches, I've found
            five that actually work anywhere you need them. One completely changed how I think about
            never losing important things.
          </p>
        </div>

        {/* Section Title */}
        <div className="mt-12">
          <p className="text-lg font-semibold text-gray-400">top tracking cards</p>
        </div>
      </div>
    </section>
  );
}
