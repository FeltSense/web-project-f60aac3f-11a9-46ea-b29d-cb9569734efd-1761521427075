typescript
export default function Pricing() {
  const plans = [
    {
      name: "Flex",
      price: "29",
      description: "Perfect for getting started on your fitness journey",
      features: [
        { text: "8 classes per month", included: true },
        { text: "Access to 50+ weekly sessions", included: true },
        { text: "All fitness disciplines", included: true },
        { text: "Mobile app access", included: true },
        { text: "Guest passes (2/month)", included: true },
        { text: "Priority class booking", included: false },
        { text: "Personal training sessions", included: false },
        { text: "Nutrition consultation", included: false },
      ],
      cta: "Start Flex Plan",
      popular: false,
    },
    {
      name: "Unlimited",
      price: "79",
      description: "For dedicated members who want full access",
      features: [
        { text: "Unlimited classes", included: true },
        { text: "Access to 50+ weekly sessions", included: true },
        { text: "All fitness disciplines", included: true },
        { text: "Mobile app access", included: true },
        { text: "Guest passes (4/month)", included: true },
        { text: "Priority class booking", included: true },
        { text: "1 personal training session/month", included: true },
        { text: "Nutrition consultation", included: false },
      ],
      cta: "Go Unlimited",
      popular: true,
    },
    {
      name: "Elite",
      price: "149",
      description: "Complete fitness transformation with personalized support",
      features: [
        { text: "Unlimited classes", included: true },
        { text: "Access to 50+ weekly sessions", included: true },
        { text: "All fitness disciplines", included: true },
        { text: "Mobile app access", included: true },
        { text: "Guest passes (8/month)", included: true },
        { text: "Priority class booking", included: true },
        { text: "4 personal training sessions/month", included: true },
        { text: "Monthly nutrition consultation", included: true },
      ],
      cta: "Join Elite",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Flexible Membership Plans
          </h2>
          <p className="text-lg text-slate-600">
            No long-term contracts. Cancel anytime. Choose the plan that fits your lifestyle.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-slate-900 shadow-lg scale-105"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-slate-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 mb-8 ${
                    plan.popular
                      ? "bg-slate-900 text-white hover:bg-slate-800 shadow-md hover:shadow-lg"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          feature.included
                            ? "text-slate-900"
                            : "text-slate-300"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          feature.included
                            ? "text-slate-700"
                            : "text-slate-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-900">
                    Features
                  </th>
                  {plans.map((plan, index) => (
                    <th
                      key={index}
                      className="text-center py-4 px-6 text-sm font-semibold text-slate-900"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-700">
                    Monthly classes
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-600">
                    8 classes
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium text-slate-900">
                    Unlimited
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium text-slate-900">
                    Unlimited
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-700">
                    Personal training sessions
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-400">
                    —
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-600">
                    1/month
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium text-slate-900">
                    4/month
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-700">
                    Nutrition consultation
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-400">
                    —
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-400">
                    —
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium text-slate-900">
                    Monthly
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-700">
                    Guest passes per month
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-600">
                    2
                  </td>
                  <td className="py-4 px-6 text-center text-sm text-slate-600">
                    4
                  </td>
                  <td className="py-4 px-6 text-center text-sm font-medium text-slate-900">
                    8
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 text-sm text-slate-700">
                    Priority class booking
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 text-slate-300 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 text-slate-900 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg
                      className="w-5 h-5 text-slate-900 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            All plans include access to our mobile app and 50+ weekly classes across all fitness disciplines.
          </p>
          <p className="text-slate-600 text-sm mt-2">
            No long-term contracts required. Cancel anytime with 30 days notice.
          </p>
        </div>
      </div>
    </section>
  );
}