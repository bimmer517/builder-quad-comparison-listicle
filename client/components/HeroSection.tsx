export function HeroSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-500 mb-8 tracking-tight">
          Best ED Treatments of 2026
        </h1>

        {/* Metadata */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Last Updated - February 5, 2026
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
          <span className="text-gray-700">Written by Benjamin Carter</span>
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
            I've spent four months testing because most ED solutions completely miss the mark.
            Single-ingredient pills work inconsistently, timing windows kill spontaneity, and food
            restrictions make planning a nightmare.
          </p>
          <p>
            After real-world testing with different meals, stress levels, timing scenarios, and
            relationship contexts, I've found five that actually deliver reliable results. One
            completely changed how I think about intimate health.
          </p>
        </div>

        {/* Section Title */}
        <div className="mt-12">
          <p className="text-lg font-semibold text-gray-400">top ed treatments</p>
        </div>
      </div>
    </section>
  );
}
