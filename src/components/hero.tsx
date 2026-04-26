export default function Hero() {
  return (
    <>
      <section className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 py-20 sm:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Systems Infrastructure for Emerging Networks
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-8 italic tracking-wide">
                Protecting Ghana's Digital Sovereignty
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Ghana-based systems engineering firm building high-performance networking and security systems designed for real-world conditions. From packet filtering to deep network observability, we deliver production-grade systems that operate at the kernel level to ensure maximum speed and reliability.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">⚙️</div>
                  <p className="text-white text-xl font-semibold">Low-Level Systems. Real-World Impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-20 sm:py-32 px-4 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To engineer the foundational systems that secure Ghana's digital sovereignty, ensuring that the infrastructure powering our financial and national data is audited, transparent, and entirely locally governed.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe that true security requires local oversight, verifiable code, and systems that operate entirely within our borders.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Approach</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>• Systems research grounded in real constraints</li>
                <li>• Production-grade software you can rely on</li>
                <li>• Deep understanding of local infrastructure challenges</li>
                <li>• Tools that work where others fail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
