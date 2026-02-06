export function HeroSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 tracking-tight">
          Best ED Treatments of 2026
        </h1>

        {/* Metadata */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-teal-500"></span>
            Last Updated - February 5, 2026
          </span>
        </div>

        {/* Author Info */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Avatar Image */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F707dc542d6134eb792dc096dfdf95900?format=webp&width=800&height=1200"
              alt="Benjamin Carter"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-gray-700">Written by Ben Carter</span>
          <span className="text-lg">🇺🇸</span>
        </div>

        {/* Tested & Approved Badge */}
        <div className="mb-8">
          <p className="text-gray-600 font-semibold mb-2">Tested & Approved</p>
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
            I burned through <strong>$800+ testing ED treatments</strong> so you don't have to. None
            of these brands say what happens when you take it after a steak dinner, or when you're
            stressed from work, or when you haven't had sex in two weeks and the pressure is
            crushing.
          </p>
          <p>
            So I tested them all in real life: with food, with alcohol, under pressure, when
            stressed, morning and night. Most failed miserably. Five actually worked.{' '}
            <strong>And one completely crushed the others out of the water.</strong>
          </p>
        </div>

        {/* Section Title */}
        <div className="mt-12"></div>
      </div>
    </section>
  );
}
