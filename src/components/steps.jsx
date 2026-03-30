const Steps = () => {
  const steps = [
    {
      id: '01',
      title: 'Create Account',
      desc: 'Sign up for free in seconds. No credit card required to get started.',
      icon: '👤',
    },
    {
      id: '02',
      title: 'Choose Products',
      desc: 'Browse our catalog and select the tools that fit your needs.',
      icon: '📦',
    },
    {
      id: '03',
      title: 'Start Creating',
      desc: 'Download and start using your premium tools immediately.',
      icon: '🚀',
    },
  ];

  return (
    <div className="py-20 bg-gray-50/50 rounded-[60px] my-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {steps.map(step => (
          <div
            key={step.id}
            className="bg-white p-10 rounded-[32px] border border-gray-100 relative shadow-sm hover:shadow-md transition-all text-center"
          >
            <span className="absolute top-6 right-6 bg-[#9538E2] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
              {step.id}
            </span>
            <div className="text-5xl mb-6 bg-purple-50 w-20 h-20 flex items-center justify-center rounded-full mx-auto">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Steps;
