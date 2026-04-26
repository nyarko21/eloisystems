export default function Careers() {
  return (
    <section id="careers" className="w-full py-20 sm:py-32 px-4 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Careers
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          We're not currently hiring, but we're always interested in hearing from talented individuals passionate about advancing Ghana's computing infrastructure.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          If you'd like to express interest in future opportunities, feel free to reach out to us.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
