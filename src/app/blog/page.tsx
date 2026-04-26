export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building Resilient Systems for African Infrastructure",
      excerpt: "Lessons learned from engineering network solutions in resource-constrained environments and how we apply them to production systems.",
      date: "April 10, 2026",
      category: "Systems Engineering",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Digital Sovereignty: Why It Matters for Ghana",
      excerpt: "An exploration of why locally-governed infrastructure is critical for economic independence and how we're building toward that future.",
      date: "April 3, 2026",
      category: "Policy",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Packet Filtering in Emerging Markets: A Technical Deep Dive",
      excerpt: "How we designed packet filtering systems that maintain security without requiring expensive, redundant infrastructure.",
      date: "March 28, 2026",
      category: "Technical",
      readTime: "10 min read"
    }
  ];

  return (
    <section className="w-full py-20 sm:py-32 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Insights on systems engineering, digital sovereignty, and infrastructure for emerging markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-gray-50 dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                <time className="text-sm text-gray-500 dark:text-gray-400">{post.date}</time>
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
