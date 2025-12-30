import { StarIcon, CheckCircle2, XCircle } from "lucide-react";

export function DeepDiveSection() {
  const scores = [
    { label: "Quality", value: 10 },
    { label: "Easy to Use", value: 10 },
    { label: "Price", value: 9 },
    { label: "Support", value: 9 },
  ];

  const pros = [
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
  ];

  const cons = ["Often out of stock due to high demand"];

  return (
    <section id="deep-dive" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          I Bought & Tested the Best-Selling Tracking Cards. Here's Why Tagsley is #1:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Body Content */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              <span className="text-blue-600 font-bold">Limited Time Sale: 70% Off Tagsley Tracking Card</span>
            </p>

            <div className="flex items-start gap-3 text-sm">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 mt-0.5"></div>
              <div>
                <p className="font-semibold text-gray-900">Written by Benjamin Chos</p>
                <p className="text-gray-600">on December 25, 2025 Tech</p>
              </div>
            </div>

            {/* Product Image Placeholder */}
            <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product Testing Image</span>
            </div>

            <p>
              I've always been that person who loses important things at the worst possible moments. Wallet
              missing before a flight, laptop bag nowhere to be found during a crucial meeting, passport
              vanishing right before international travel.
            </p>

            <p>
              After my third "emergency replacement" situation in six months, I decided to finally solve this
              problem properly. The tracking market is flooded with options, but most are either too thick and
              bulky for daily use or come with expensive monthly subscriptions that add up fast.
            </p>

            <p>
              Then I discovered <span className="text-blue-600 font-bold">Tagsley</span>. With over{" "}
              <span className="font-bold">12,000 verified reviews</span> and claims about being the thinnest
              tracker that perfectly does its job, I figured it was worth putting to the test.
            </p>

            <p>
              The card arrived in 3 days, and I was immediately impressed by how genuinely thin it felt – exactly
              like a credit card. Everything about the packaging and build quality screamed premium without the
              premium price tag.
            </p>

            <p>
              Tagsley uses breakthrough 1.8mm technology that delivers wireless charging and Apple "Find My"
              integration without the bulk that makes other trackers impractical for daily carry.
            </p>

            <p>
              But what really sets Tagsley apart is its versatility. It's <span className="font-bold">ultra-slim, durable, and fits anywhere you need it</span> – wallets, laptop sleeves, passport holders, purses.
            </p>

            <p>
              You don't need to think about it at all, just slip it in and feel more confident knowing it's there.
            </p>

            {/* My Test Results */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">My Test Results</h3>

              <p>
                As advertised, <span className="font-bold">Tagsley is sleek, slim, and doesn't take up extra space in your wallet</span>.
              </p>

              <p className="mt-4">
                I took it with me on a few trips – airports, busy shopping centers, and even crowded public transport.
                I specifically tested its tracking capabilities in real-world scenarios where losing your wallet could
                actually happen.
              </p>

              <p className="mt-4">
                I intentionally left my wallet in different locations around my house, office, and car to see how
                quickly and accurately the Find My app could locate it. I tested it hidden under couch cushions, in
                jacket pockets, car cup holders, and even buried in my gym bag.
              </p>

              <p className="mt-4">
                The precision was impressive. Whether my wallet was in obvious places or completely hidden, Tagsley
                pinpointed its location <span className="font-bold">within seconds</span>. The sound feature worked
                perfectly too – loud enough to hear through fabric and from reasonable distances, but not embarrassingly
                loud in quiet places.
              </p>

              <p className="mt-4">
                That's when I knew Tagsley's Apple Find My integration was doing exactly what it promised.
              </p>

              <p className="mt-4 font-semibold text-slate-900">Now, let's talk about durability.</p>

              <p className="mt-4">
                Since Tagsley is meant to stay in your wallet, I didn't push it to extremes, but I did test it in
                real-world situations. I tossed it in and out of my wallet, carried it around in different pockets,
                threw it into bags a couple of times, and even got it wet.
              </p>

              <p className="mt-4">
                After all that, it's still in excellent condition. It holds up to everyday use without any signs of
                wear, which is exactly what you need from a product that's protecting your most important cards.
              </p>

              <p className="mt-4">
                In the end, Tagsley passed all my tests with flying colors. It's simple, effective, and offers exactly
                what you expect from an ultra-slim tracking card.
              </p>

              <p className="mt-4">Still, I had some other tracking cards to test, so let's see how they compare.</p>
            </div>

            {/* The Results */}
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">The Results:</h3>

              <div className="space-y-4 border-l-4 border-gray-300 pl-6">
                <div>
                  <p className="font-bold text-slate-900">
                    1. Complete Apple Find My Integration:
                  </p>
                  <p className="text-gray-700 mt-2">
                    While most competitors only offer basic tracking features, Tagsley's Find My network covers all
                    Apple devices including iPhones, iPads, MacBooks, AirPods, Apple Watches, and more. The best part
                    is that only one card is needed to track it all through Apple's massive device network.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">2. Slim, Discreet Design:</p>
                  <p className="text-gray-700 mt-2">
                    A common complaint I had with other cards is that they're chunky and often interfere with other
                    cards in your wallet, despite being advertised as slim. Tagsley, however, is ultra-slim at just
                    1.8mm thick and fits seamlessly with the rest of my cards without adding bulk.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">3. Built to Last:</p>
                  <p className="text-gray-700 mt-2">
                    Tagsley is waterproof, tear-proof, and stays in great condition even when exposed to everyday use.
                    In contrast, many other trackers cards I tested showed signs of damage after just a few weeks.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-slate-900">
                    4. Doesn't Interfere with Card Functionality:
                  </p>
                  <p className="text-gray-700 mt-2">
                    After using other trackers, I noticed some of my cards didn't work properly after being stored next
                    to them for a while. With Tagsley, I didn't have any issues. My credit cards and IDs work exactly
                    like they should when I need them.
                  </p>
                </div>
              </div>

              <p className="mt-8 font-semibold text-slate-900 text-lg">
                Out of the 10 tracking cards I've tested, Tagsley is my #1 pick. It's sleek, it tracks everything
                perfectly, and you can just set it and forget it.
              </p>
            </div>

            {/* Value Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Value</h3>
              <p>
                When it comes to keeping track of your most important belongings,{" "}
                <span className="text-blue-600 font-bold">Tagsley</span> offers incredible value.
              </p>
              <p className="mt-4">
                At <span className="font-bold">$43.99 for a single card</span>, it's reasonable considering what it
                protects. If you want to cover multiple items, the 3-card bundle brings it down to{" "}
                <span className="font-bold">$34.95 per tracker</span>.
              </p>
              <p className="mt-4">
                I've had friends lose their wallets while traveling. My buddy Brandon spent $400 just on emergency
                document fees when his passport went missing in Barcelona. Between replacement cards, emergency cash
                transfers, and the sheer panic, it's a nightmare I never want to experience.
              </p>
              <p className="mt-4">
                If you occasionally leave things behind in places (coffee shops, Ubers, hotel rooms), having that
                backup plan just makes sense.
              </p>
              <p className="mt-4 font-semibold text-slate-900">The peace of mind is worth more than the cost.</p>
            </div>

            {/* Never Lose Anything */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Never Lose Anything Important Again</h3>
              <p>
                At the heart of Tagsley is its advanced Apple Find My integration, designed to locate your belongings
                anywhere in the world using Apple's vast network. This technology creates an ultra-wide, invisible
                network that instantly pinpoints your items no matter where they are.
              </p>
              <p className="mt-4">
                But Tagsley isn't just for wallets. It protects all your important items, including laptop bags,
                passport holders, purses, and even luggage.
              </p>
              <p className="mt-4">
                What's even better is that it works silently and efficiently without interfering with your phone, Wi-Fi,
                or other devices. The tracking works seamlessly with iPhones through the Apple Find My app, leveraging
                Apple's vast network of devices worldwide. So you don't need to worry about connectivity issues or battery
                drain on your phone.
              </p>
              <p className="mt-4">
                <span className="text-blue-600 font-bold">Tagsley</span> gives you the ultimate peace of mind against
                losing your most valuable possessions, all without the hassle.
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
                  <p className="text-xs text-gray-600">9,137 Customer Reviews</p>
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
                  <p className="text-xs font-semibold text-rose-600 mb-3">Limited Time Deal: 70% Off</p>
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
