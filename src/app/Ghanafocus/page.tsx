export default function GhanaFocus() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <div className="text-4xl">🇬🇭</div>
            <h3 className="text-xl font-bold">Built for Ghana</h3>
            <p className="text-blue-50 leading-relaxed">
              We understand Ghana's unique infrastructure challenges. Every tool we build is tailored to the real conditions on the ground.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="text-4xl">⚙️</div>
            <h3 className="text-xl font-bold">Low-Level Systems</h3>
            <p className="text-blue-50 leading-relaxed">
              We work at the systems level—packet filtering, traffic control, kernel modules. Building the infrastructure layer that matters.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <div className="text-4xl">📊</div>
            <h3 className="text-xl font-bold">Local Expertise</h3>
            <p className="text-blue-50 leading-relaxed">
              Our team knows Ghanaian networks inside-out. We build tools that actually work with existing infrastructure constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
