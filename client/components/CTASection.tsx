export function CTASection() {
  const steps = [
    { number: 1, title: "Go to the official Tagsley website" },
    { number: 2, title: "Choose the number of Tagsley cards you want" },
    { number: 3, title: "Enter your shipping and payment details" },
    { number: 4, title: "Confirm your order and enjoy knowing your belongings are safe and trackable!" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          Where Can I Buy the Tagsley Tracking Card?
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg">
          Getting your own Tagsley with a{" "}
          <span className="font-bold">70% discount</span> is simple. Just follow these steps:
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <p className="font-semibold text-slate-900">{step.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="border-4 border-slate-900 rounded-2xl p-8 md:p-12 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-5xl font-bold text-slate-900">#1</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Tracking Card of 2025</h3>
                  <p className="text-gray-600">Tagsley</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Tagsley delivers pinpoint tracking accuracy, fast charging, 5-month battery life, and credit card thickness in one sleek design. Its Apple "Find My" integration provides worldwide tracking coverage while wireless charging keeps you powered up. Perfect for anyone who wants to never lose their personal belongings again.
              </p>

              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div>
                  <p className="text-sm text-rose-600 font-semibold">Limited Time Deal:</p>
                  <p className="text-3xl font-bold text-slate-900">70% Off</p>
                </div>

                <button
                  onClick={() => window.open("https://example.com", "_blank")}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-lg"
                >
                  Click Here to Get 70% Off
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-rose-600 font-semibold">
                <span>💓</span>
                <span>2,184 people bought this week</span>
              </div>
            </div>

            {/* Score Card */}
            <div className="flex-1 bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
              <div className="text-5xl font-bold text-slate-900 mb-3">9.8</div>
              <div className="flex justify-center gap-0.5 mb-3">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
              </div>
              <p className="font-semibold text-slate-900 mb-1">Excellent</p>
              <p className="text-sm text-gray-600 mb-6">9,137 Customer Reviews</p>

              <div className="space-y-3 border-t border-gray-300 pt-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Quality</span>
                  <span className="font-bold text-slate-900">10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Easy to Use</span>
                  <span className="font-bold text-slate-900">10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Price</span>
                  <span className="font-bold text-slate-900">9</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Support</span>
                  <span className="font-bold text-slate-900">9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
