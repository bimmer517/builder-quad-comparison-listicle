export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Been using this for 5 months now and it's a game changer. Sildenafil worked maybe 60% of the time, this works every time. 15 min onset is clutch.",
      author: "Jake M.",
      location: "Arizona",
    },
    {
      quote:
        "Hims was super inconsistent for me, sometimes it worked sometimes nothing. Switched to this and it's been solid every time, even when I'm stressed or tired from work.",
      author: "Tyler S.",
      location: "Colorado",
    },
    {
      quote:
        "I've tried everything at this point lol. This is the first one where the 36 hour thing actually matters because we don't have to plan it anymore. Way better than just the blood flow stuff.",
      author: "David R.",
      location: "North Carolina",
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
                  — {testimonial.author}, {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
