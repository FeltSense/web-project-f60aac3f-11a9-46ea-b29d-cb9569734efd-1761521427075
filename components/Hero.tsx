export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">50+ Classes Weekly</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
              Elevate Fitness Studio – Find Your Workout, On Your Schedule
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From HIIT and yoga to strength training and cycling, access 50+ weekly classes led by certified trainers who know your name. Drop in for a single session or build your routine—no contracts, no pressure.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Multiple disciplines under one roof</p>
                  <p className="text-sm text-slate-500">Yoga, HIIT, spin, barre, strength, and more</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Trainers who actually coach</p>
                  <p className="text-sm text-slate-500">Certified instructors with specialized credentials</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-700 font-medium">Flexible membership options</p>
                  <p className="text-sm text-slate-500">Month-to-month plans, class packs, or drop-ins</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-md">
                View Class Schedule
              </button>
              <button className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">
                Book Free Trial Class
              </button>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              First class is free. No credit card required.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-slate-600 font-medium">Studio Image</p>
                  <p className="text-sm text-slate-500 max-w-xs">Replace with photo of your studio floor, class in session, or training area</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-slate-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-xs text-slate-600 mt-1">Weekly Classes</div>
                </div>
                <div className="border-l border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">12</div>
                  <div className="text-xs text-slate-600 mt-1">Disciplines</div>
                </div>
                <div className="border-l border-slate-200">
                  <div className="text-2xl font-bold text-slate-900">0</div>
                  <div className="text-xs text-slate-600 mt-1">Contracts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}