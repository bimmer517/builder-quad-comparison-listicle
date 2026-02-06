export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "I've been using MEDVi QUAD for about 5 months now, and it's completely changed my relationship. I was on sildenafil for almost a year before switching, and the difference is night and day. With sildenafil, it worked maybe 60% of the time if I timed everything perfectly. With QUAD, it just works every time. The 15-minute onset means no more awkward waiting or killed moments. Worth every penny for not having to plan your intimate life around a pill schedule.",
      author: "Jake Martinez",
      location: "Arizona",
    },
    {
      quote:
        "i tried hims for like 8 months and it was so hit or miss… sometimes it worked great, sometimes nothing happened and i'd just wasted $45. switched to medvi quad and its been consistent every single time. the mental part is what i didnt realize i was missing. even when im tired or stressed from work it still works because of the apomorphine thing. my girlfriend noticed the difference immediately lol. should have switched way sooner",
      author: "Tyler Stevens",
      location: "Colorado",
    },
    {
      quote:
        "I'm someone who's tried pretty much everything – Viagra, Cialis, Hims, Ro, generic versions. QUAD is the first one that addresses the actual problem instead of just blood flow. The 36-hour window is a relationship saver. My wife and I don't have to schedule anymore, which was honestly killing the spontaneity more than the ED itself. No complaints, 5/5",
      author: "David Richardson",
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
