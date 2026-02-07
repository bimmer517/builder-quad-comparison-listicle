import { StarIcon, CheckCircle2 } from "lucide-react";

export function DeepDiveSection() {
  const scores = [
    { label: "Quality", value: 9.5 },
    { label: "Effectiveness", value: 10 },
    { label: "Value", value: 9.8 },
    { label: "Support", value: 9.3 },
  ];

  const pros = [
    "Ignites sexual desire (Apomorphine)",
    ">10 minute onset (Vardenafil)",
    "Rock-solid, bigger erections (Sildenafil)",
    "36-hour window (Tadalafil)",
    "Works after dinner & drinks (Sublingual delivery)",
    "Money back guarantee",
  ];

  return (
    <section id="deep-dive" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          5 Reasons why{" "}
          <u className="decoration-2 underline-offset-4">Quad 4 in 1</u> is #1
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Body Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <div className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 mt-0.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F707dc542d6134eb792dc096dfdf95900?format=webp&width=800&height=1200"
                  alt="Ben Carter"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Written by Ben Carter
                </p>
                <p className="text-gray-600">
                  on February 5, 2026 | American Health Digest
                </p>
              </div>
            </div>

            {/* Product Image */}
            <div className="w-full rounded-lg overflow-hidden shadow-sm aspect-video">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F0f8a16342526448a9a4d9dc291752d34%2F8da990828c6c4a36bc261f37d98da865?format=webp&width=800&height=1200"
                alt="Testing MedVi Quad 4 in 1 sublingual treatment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-8 mt-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  1. Ignites Real Sexual Arousal
                </h3>
                <p>
                  Most ED pills only open blood vessels. QUAD includes
                  Apomorphine-which activates your brain's arousal pathways. You
                  don't just perform. You actually want it. That's real desire,
                  not mechanical function.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  2. Fastest Activation on the Market in Under 10 Minutes
                </h3>
                <p>
                  Sublingual drops hit your bloodstream directly-no digestion
                  required. While competitors take 30-60 minutes, you're ready
                  in 5-15. That's the difference between spontaneous intimacy
                  and mood-killing waiting games.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  3. The Whole Weekend on One Dose (36 Hours)
                </h3>
                <p>
                  Take it Friday night. Stay ready through Sunday morning. No
                  re-dosing. No mental math. No planning sex around pill timing.
                  One dose, entire weekend, zero pressure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  4. Don't Let a Yummy Date Night Meal Stop the After-Date Night
                  Fun
                </h3>
                <p>
                  Steak and wine? Heavy pasta? Post-dinner drinks? Doesn't
                  matter. QUAD absorbs through your mouth-bypassing your stomach
                  entirely. Your dinner plans and your bedroom plans can finally
                  coexist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  5. Lab-Compounded by US-Licensed Pharmacists
                </h3>
                <p>
                  QUAD isn't mass-produced in some overseas facility. It's
                  precision-compounded by US-licensed pharmacists following
                  strict quality standards. Every batch is tested, measured, and
                  verified before it reaches you.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Score Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-gray-50 rounded-lg border border-gray-200 p-6">
              <div className="text-center space-y-4">
                {/* Score */}
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2">
                    9.8
                  </div>
                  <div className="flex justify-center gap-0.5 mb-2">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          size={20}
                          className="fill-teal-500 text-teal-500"
                        />
                      ))}
                  </div>
                  <p className="font-semibold text-slate-900">
                    <strong>
                      <u>MedVi Quad 4 in 1</u>
                    </strong>
                  </p>
                </div>

                {/* Score Breakdown */}
                <div className="space-y-3 pt-6 border-t border-gray-300">
                  {scores.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-700">
                        {item.label}
                      </span>
                      <span className="font-bold text-slate-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pros/Cons */}
                <div className="pt-6 border-t border-gray-300 text-left space-y-3">
                  <div>
                    <h4 className="font-bold text-emerald-600 text-sm mb-2">
                      PROS
                    </h4>
                    <ul className="space-y-1">
                      {pros.map((pro, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 flex-shrink-0 mt-0.5"
                          />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visit Site Button */}
                <div className="pt-6 border-t border-gray-300">
                  <a
                    href="https://quad.medvi.org/?oid=13&affid=161"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-4 py-3 bg-slate-900 border border-slate-900 text-white font-semibold rounded hover:bg-slate-800 transition-all text-sm text-center"
                  >
                    VISIT SITE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
