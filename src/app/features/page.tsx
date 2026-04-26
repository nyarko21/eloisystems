export default function Features() {
  const features = [
    {
      icon: '�',
      title: 'High Perforamnce Packet Filtering',
      description: 'Advanced packet filtering and policy enforcement. Control your network at the lowest level with fine-grained traffic rules.',
    },
    {
      icon: '🎛️',
      title: 'Traffic Control',
      description: 'Intelligent traffic shaping and queue management. Optimize bandwidth usage in resource-constrained environments.',
    },
    {
      icon: '🔍',
      title: 'High Performance Network Observability',
      description: 'Real-time visibility into network behavior. Understand what\'s happening on your infrastructure with deep observability tools.',
    },
    {
      icon: '🔐',
      title: 'Security Infrastructure',
      description: 'Systems-level security hardening. Build networks that defend against threats from the ground up.',
    },
    {
      icon: '⚡',
      title: 'Performance Engineering',
      description: 'Optimized for constraint environments. We design systems that deliver under real-world conditions.',
    },
  ];

  return (
    <section id="features" className="w-full py-20 sm:py-32 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What We Build
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Low-level systems and tools that power reliable networks in emerging markets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
