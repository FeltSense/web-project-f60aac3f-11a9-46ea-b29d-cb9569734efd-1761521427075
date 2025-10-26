typescript
export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "50+ Weekly Classes",
      description: "Diverse schedule spanning HIIT, yoga, strength training, cycling, Pilates, and dance fitness. Morning, midday, and evening sessions designed to fit any lifestyle, with beginner to advanced progressions available across all disciplines."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Certified Expert Trainers",
      description: "Nationally certified instructors with specialized credentials in their disciplines. Small class sizes ensure personalized form corrections, modifications for injuries, and individualized attention to help you progress safely and effectively."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Membership Options",
      description: "Month-to-month plans with no long-term commitments or cancellation fees. Unlimited class access, class pack bundles, or drop-in rates. Pause your membership when life gets busy, with complimentary guest passes for friends."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Premium Studio Facilities",
      description: "Climate-controlled studios with professional-grade equipment, cushioned flooring, and full-length mirrors. Complimentary amenities include filtered water stations, luxury changing rooms, secure lockers, and premium mat and equipment rentals."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Thrive
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A complete fitness experience designed around your goals, schedule, and preferences. From expert instruction to premium facilities, we've created an environment where you can focus on what matters most—your progress.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center text-slate-700 group-hover:from-slate-700 group-hover:to-slate-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <p className="text-slate-700 font-medium">
              Ready to experience the difference?
            </p>
            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-sm hover:shadow-md">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}