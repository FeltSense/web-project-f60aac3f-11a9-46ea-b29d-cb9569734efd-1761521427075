export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      content: "I've tried other gyms but always felt lost. The trainers here actually take time to adjust my form and check in on my progress. Three months in and I'm finally seeing results that stick.",
      image: "SM"
    },
    {
      name: "James Chen",
      role: "Software Developer",
      content: "The early morning classes fit perfectly before work. What I appreciate most is the variety—I never get bored, and my instructor remembers my name and limitations from a previous injury.",
      image: "JC"
    },
    {
      name: "Maria Rodriguez",
      role: "Small Business Owner",
      content: "I was intimidated at first, but everyone here is focused on their own journey. The community feel is real—people actually encourage each other. It's become my favorite hour of the day.",
      image: "MR"
    },
    {
      name: "David Park",
      role: "High School Teacher",
      content: "After years of back pain from sitting at a desk, the flexibility and core work here has made a genuine difference. I can get through a full day of teaching without discomfort now.",
      image: "DP"
    },
    {
      name: "Emily Thompson",
      role: "Nurse",
      content: "Working night shifts made it hard to find consistent workout times. The 24/7 access and variety of class times means I can actually maintain a routine that works with my schedule.",
      image: "ET"
    },
    {
      name: "Michael Foster",
      role: "Retired Veteran",
      content: "I needed something low-impact but effective. The trainers worked with my knee issues and created modifications that let me participate fully. I'm stronger now than I was two years ago.",
      image: "MF"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4 tracking-tight">
            Real Stories from Our Members
          </h2>
          <p className="text-lg text-slate-600">
            Hear from people who've made Elevate part of their daily routine
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-slate-200 group-hover:text-slate-300 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-8 text-base">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-600 font-medium text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Join hundreds of members transforming their fitness journey
          </p>
          <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md font-medium">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}