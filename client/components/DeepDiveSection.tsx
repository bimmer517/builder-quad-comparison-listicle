import { StarIcon, CheckCircle2, XCircle } from "lucide-react";

export function DeepDiveSection() {
  const scores = [
    { label: "Quality", value: 10 },
    { label: "Effectiveness", value: 10 },
    { label: "Value", value: 9 },
    { label: "Support", value: 9 },
  ];

  const pros = [
    "4-in-1 comprehensive formula",
    "15-minute onset time",
    "36-hour effectiveness window",
    "CNS + vascular dual-pathway",
    "Sublingual fast absorption",
    "No food/alcohol interference",
    "Zero subscription fees",
    "US-licensed physician care",
    "Discreet home delivery",
    "90-day money-back guarantee",
  ];

  const cons = [
    "Higher cost than single-ingredient options",
    "Requires telehealth consultation",
  ];

  return (
    <section id="deep-dive" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          I Bought & Tested the Best-Selling ED Treatments. Here's Why MEDVi QUAD is #1:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Body Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              <span className="text-blue-600 font-bold">Limited Time Sale: First Month $79 (Regular $119)</span>
            </p>

            <div className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold">BC</div>
              <div>
                <p className="font-semibold text-gray-900">Written by Benjamin Carter</p>
                <p className="text-gray-600">on February 5, 2025 | Men's Health</p>
              </div>
            </div>

            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product Testing Image</span>
            </div>

            <p>
              I've always been that person who avoids addressing health issues until they become impossible to ignore. Performance anxiety, inconsistent results, the timing stress of having to plan intimacy 60 minutes in advance like you're scheduling a business meeting.
            </p>

            <p>
              After my third "it's not working tonight" situation in two months, I decided to finally solve this problem properly. The ED treatment market is flooded with options, but most are either outdated single-ingredient formulas or come with planning requirements that kill spontaneity completely.
            </p>

            <p>
              Then I discovered <span className="text-blue-600 font-bold">MEDVi QUAD</span>. With over{" "}
              <span className="font-bold">8,000 verified reviews</span> and claims about being the only 4-ingredient CNS + vascular formula with 15-minute onset, I figured it was worth putting to the test.
            </p>

            <p>
              The first shipment arrived in 3 days via discreet packaging, and I was immediately impressed by the sublingual format – no pills to swallow, no planning around meals. Everything about the medical consultation and product quality felt premium without the premium price tag.
            </p>

            <p>
              MEDVi QUAD uses breakthrough dual-pathway technology that combines sildenafil, tadalafil, apomorphine, and oxytocin for complete coverage – addressing desire, speed, strength, and stamina simultaneously.
            </p>

            <p>
              But what really sets MEDVi QUAD apart is its versatility. It works when you're stressed, tired, or not "in the mood yet" – addressing both the mental and physical components that single-ingredient competitors completely ignore.
            </p>

            <p>
              You don't need to think about timing, food restrictions, or planning windows at all. Just take it 15 minutes before and feel confident knowing it's working on all cylinders.
            </p>

            {/* My Test Results */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Test Results</h3>

              <p>
                As advertised, <span className="font-bold">MEDVi QUAD is fast-acting, long-lasting, and doesn't require the rigid planning that makes other treatments impractical</span>.
              </p>

              <p className="mt-4">
                I tested it across different scenarios – after dinner dates, with wine, when stressed from work, when tired, and during spontaneous moments. I specifically tested situations where single-ingredient treatments had failed me before.
              </p>

              <p className="mt-4">
                I compared the onset time against my previous sildenafil prescription (which took 45-60 minutes on a good day). I tested it after high-fat meals that would normally kill effectiveness. I tried it when genuinely exhausted and "not in the mood" to see if the apomorphine component actually worked.
              </p>

              <p className="mt-4">
                The difference was dramatic. Whether conditions were perfect or far from ideal, MEDVi QUAD delivered consistent results within 15 minutes. The mental arousal component was noticeable – even when stressed or tired, the desire was there in a way it wasn't with Viagra alone.
              </p>

              <p className="mt-4">
                That's when I knew MEDVi QUAD's dual-pathway approach was doing exactly what it promised.
              </p>

              <p className="mt-4 font-semibold text-slate-900">Now, let's talk about the 36-hour window.</p>

              <p className="mt-4">
                This was the unexpected benefit I didn't fully appreciate until experiencing it. With my old prescription, I had a 4-6 hour window. If nothing happened during that narrow timeframe, that was it – dose wasted. With QUAD's tadalafil component, Friday night coverage extends through the entire weekend.
              </p>

              <p className="mt-4">
                The psychological relief of not watching the clock cannot be overstated. No more "we need to do this now before the window closes" pressure. Just natural spontaneity whenever the moment feels right.
              </p>

              <p className="mt-4">
                In the end, MEDVi QUAD passed all my tests with flying colors. It's comprehensive, effective, and offers exactly what you need from a modern ED treatment that actually works in real life.
              </p>

              <p className="mt-4">Still, I had some other treatments to test, so let's see how they compare.</p>
            </div>

            {/* The Results */}
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">The Results:</h3>

              <div className="space-y-4 border-l-4 border-gray-300 pl-6">
                <div>
                  <p className="font-bold text-slate-900">
                    1. Complete Dual-Pathway Coverage:
                  </p>
                  <p className="text-gray-700 mt-2">
                    While most competitors only offer basic PDE5 inhibition (blood flow), MEDVi QUAD's 4-ingredient formula addresses CNS arousal, immediate response, extended window, and refractory period reduction. The best part is that one dose covers all bases – no stacking multiple pills or supplements.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">2. Actually Fast When It Matters:</p>
                  <p className="text-gray-700 mt-2">
                    A common complaint I had with oral pills is that they take 45-60 minutes even on an empty stomach. MEDVi QUAD's sublingual delivery gets into your bloodstream in 15 minutes, period. No waiting, no planning, no killed moments.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">3. Works Despite Real Life:</p>
                  <p className="text-gray-700 mt-2">
                    MEDVi QUAD performs consistently even when conditions aren't perfect – after meals, with alcohol, when stressed, when tired. In contrast, the single-ingredient treatments I tested became unreliable the moment real-world variables entered the equation.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    4. The 36-Hour Advantage:
                  </p>
                  <p className="text-gray-700 mt-2">
                    After using short-acting treatments, I realized how much anxiety came from that narrow 4-6 hour window. With MEDVi QUAD's 36-hour coverage, there's no clock-watching, no pressure, no "use it or lose it" stress. Just confidence that you're covered whenever the moment happens.
                  </p>
                </div>
              </div>

              <p className="mt-8 font-semibold text-slate-900 text-lg">
                Out of the 8 ED treatments I've tested, MEDVi QUAD is my #1 pick. It's comprehensive, it works reliably, and you can take it without planning your entire evening around pharmaceutical timing.
              </p>
            </div>

            {/* Value Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Value</h3>
              <p>
                When it comes to reliable intimate health, <span className="text-blue-600 font-bold">MEDVi QUAD</span> offers incredible value.
              </p>
              <p className="mt-4">
                At <span className="font-bold">$119 for a month's supply (30 doses)</span>, it's reasonable considering what it protects – your relationship, your confidence, your spontaneity. The current first-month promotion brings it down to <span className="font-bold">$79</span>.
              </p>
              <p className="mt-4">
                I've had friends spend hundreds on urologist visits, trial-and-error with different prescriptions, couples therapy addressing intimacy issues that were actually medical. My buddy Jason spent over $1,200 across six months just trying to find something that worked consistently before discovering combination therapy.
              </p>
              <p className="mt-4">
                If you've tried single-ingredient treatments with mixed results, or if you're tired of planning intimacy around pharmaceutical timing windows, having a solution that actually works is priceless.
              </p>
              <p className="mt-4 font-semibold text-slate-900">The peace of mind is worth more than the cost.</p>
            </div>

            {/* Never Lose Anything */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Never Deal With Performance Anxiety Again</h3>
              <p>
                At the heart of MEDVi QUAD is its advanced dual-pathway technology, designed to address both the mental and physical components that traditional treatments ignore. This creates a comprehensive solution that works reliably regardless of stress, fatigue, or timing.
              </p>
              <p className="mt-4">
                But MEDVi QUAD isn't just for occasional use. It provides 36-hour coverage that restores natural spontaneity to your intimate life – no planning, no pressure, no watching the clock.
              </p>
              <p className="mt-4">
                What's even better is that it works without interfering with meals, alcohol, or your daily routine. The sublingual delivery bypasses digestive variables that sabotage oral pills, and the CNS component addresses desire even when you're stressed or not "in the mood yet."
              </p>
              <p className="mt-4">
                <span className="text-blue-600 font-bold">MEDVi QUAD</span> gives you the ultimate confidence in your intimate health, all without the hassle of traditional ED treatments.
              </p>
            </div>
          </div>

          {/* Right Column - Score Card */}
          <div className="md:col-span-1">
            <div className="sticky top-20 bg-gray-50 rounded-lg border border-gray-200 p-6">
              <div className="text-center space-y-4">
                {/* Score */}
                <div>
                  <div className="text-5xl font-bold text-slate-900 mb-2">9.8</div>
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
                  <p className="font-semibold text-slate-900">Excellent</p>
                  <p className="text-xs text-gray-600">8,247 Customer Reviews</p>
                </div>

                {/* Score Breakdown */}
                <div className="space-y-3 pt-6 border-t border-gray-300">
                  {scores.map((item) => (
                    <div key={item.label} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{item.label}</span>
                      <span className="font-bold text-slate-900">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Pros/Cons */}
                <div className="pt-6 border-t border-gray-300 text-left space-y-3">
                  <div>
                    <h4 className="font-bold text-emerald-600 text-sm mb-2">PROS</h4>
                    <ul className="space-y-1">
                      {pros.map((pro, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-slate-700">
                          <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-rose-600 text-sm mb-2">CONS</h4>
                    <ul className="space-y-1">
                      {cons.map((con, idx) => (
                        <li key={idx} className="flex gap-2 text-xs text-slate-700">
                          <XCircle size={14} className="text-rose-600 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deal Text */}
                <div className="pt-6 border-t border-gray-300">
                  <p className="text-xs font-semibold text-rose-600 mb-3">Limited Time Deal: First Month $79</p>
                  <button
                    onClick={() => window.open("https://example.com", "_blank")}
                    className="w-full px-4 py-3 bg-white border border-gray-400 text-slate-900 font-semibold rounded hover:bg-gray-100 transition-all text-sm"
                  >
                    VISIT SITE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
