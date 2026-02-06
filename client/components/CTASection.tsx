export function CTASection() {
  const steps = [
    { number: 1, title: "Go to the official MEDVi website" },
    { number: 2, title: "Complete the 5-minute medical consultation with a licensed US physician" },
    { number: 3, title: "Get your prescription approved (typically within 24 hours)" },
    { number: 4, title: "Receive discreet delivery in 3-5 days and experience reliable intimate health!" },
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
          Where Can I Get MedVi Quad 4 in 1?
        </h2>

        <p className="text-center text-gray-700 mb-12 text-lg">
          Getting your own <span className="font-bold">MedVi Quad 4 in 1</span> is simple. Just follow these steps:
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
            {/* Image Column */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F8da990828c6c4a36bc261f37d98da865?format=webp&width=800&height=1200"
                  alt="MedVi Quad 4 in 1"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-5xl font-bold text-slate-900">#1</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">ED Treatment of 2026</h3>
                  <p className="text-gray-600">MedVi Quad 4 in 1</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                MedVi Quad 4 in 1 delivers comprehensive dual-pathway coverage, 15-minute onset, 36-hour effectiveness, and CNS arousal activation in one sublingual dose. Its 4-ingredient formula (sildenafil + tadalafil + apomorphine + oxytocin) provides complete coverage while sublingual delivery ensures fast absorption regardless of food or alcohol. Perfect for anyone who wants reliable intimate health without planning restrictions.
              </p>

              <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <button
                  onClick={() => window.open("https://example.com", "_blank")}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-lg"
                >
                  Click Here to Start Your Consultation
                </button>
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

              <div className="space-y-3 border-t border-gray-300 pt-6">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Quality</span>
                  <span className="font-bold text-slate-900">10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Effectiveness</span>
                  <span className="font-bold text-slate-900">10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold">Value</span>
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
