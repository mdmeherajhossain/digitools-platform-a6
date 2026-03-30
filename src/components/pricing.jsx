const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", desc: "Perfect for getting started", features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"] },
    { name: "Pro", price: "29", desc: "Best for professionals", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"], popular: true },
    { name: "Enterprise", price: "99", desc: "For teams and businesses", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"] },
  ];

  return (
    <div className="py-20 px-4 md:px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`p-10 rounded-[40px] border flex flex-col ${plan.popular ? "bg-[#9538E2] text-white border-none shadow-xl scale-105 relative" : "bg-white border-gray-100"}`}>
            {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold">Most Popular</span>}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={plan.popular ? "text-white/80" : "text-gray-500"}>{plan.desc}</p>
            <div className="my-8">
              <span className="text-5xl font-bold">${plan.price}</span>
              <span className={plan.popular ? "text-white/70" : "text-gray-400"}>/Month</span>
            </div>
            <div className="space-y-4 mb-10 flex-grow">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className={plan.popular ? "text-white" : "text-green-500"}>✓</span>
                  <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{f}</span>
                </div>
              ))}
            </div>
            <button className={`btn w-full rounded-full h-14 border-none font-bold ${plan.popular ? "bg-white text-[#9538E2] hover:bg-gray-100" : "bg-[#9538E2] text-white hover:bg-[#832fd6]"}`}>
              {plan.name === "Enterprise" ? "Contact Sales" : plan.name === "Pro" ? "Start Pro Trial" : "Get Started Free"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Pricing;