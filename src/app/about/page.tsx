export default function About() {
  return (
    <section id="about" className="w-full py-20 sm:py-32 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are */}
        <div className="mb-20 pb-20 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Who We Are
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <p className="text-lg lg:text-xl text-gray-900 dark:text-white leading-relaxed">
              We are a team of Ghanaian engineers operating at the systems level. While others build applications, we build the foundations they run on. We are the architects of Ghana's digital fortress.
            </p>
          </div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Eloi Systems
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Ghana-based systems engineering firm building high-performance networking and security systems designed for real-world conditions. From packet filtering to deep network observability, we deliver production-grade systems that operate at the kernel level to ensure maximum speed and reliability.
              </p>
              <p className="text-lg leading-relaxed">
                We understand the real challenges: constrained resources, variable infrastructure quality, and the need for systems that simply work. We combine rigorous systems research with practical engineering to deliver tools that perform in the field.
              </p>
              <p className="text-lg leading-relaxed">
                Every system we build addresses local infrastructure challenges. We're not interested in solving problems on paper—we're interested in solutions that work where it matters.
              </p>
            </div>
          </div>

          <div className="space-y-6">
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
  );
}
