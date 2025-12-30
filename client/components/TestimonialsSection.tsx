export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I've been using Tagsley for about 4 months now, and it's already saved me twice. Once when I left my wallet at a restaurant (Find My showed exactly which table), and another time when it slipped between my car seats. The battery life is exactly as advertised. I charge it maybe once every few months. Worth every penny for the peace of mind.",
      author: "Jake Hernandez",
      location: "New Hampshire",
    },
    {
      quote:
        "i lost my purse at the mall last week and was freaking out because it had everything in it… credit cards, ID, cash, everything. i used the app and found it in like 5 minutes at the food court where i forgot it. my friends think im paranoid for putting a tracker in my wallet but hey, better safe than sorry and who was right, right?",
      author: "Hannah Stevens",
      location: "Oregon",
    },
    {
      quote:
        "I'm someone who misplaces things alot and this has already saved me twice – once when my wallet slipped between car seats and another time when I left it at restaurant. No complaints 5/5",
      author: "Dana Fahrsted",
      location: "Georgia",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <p className="text-gray-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
