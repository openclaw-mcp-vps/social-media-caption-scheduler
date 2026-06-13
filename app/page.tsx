export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          AI-Powered Caption Generation
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Generate &amp; Schedule{" "}
          <span className="text-[#58a6ff]">Social Media Captions</span>{" "}
          with AI
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Stop spending hours writing captions. Let AI craft platform-perfect posts for Instagram, Twitter, LinkedIn, and TikTok — then schedule them automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $13/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "✦", title: "AI Caption Generation", desc: "Platform-specific captions tailored for Instagram, Twitter, LinkedIn, and TikTok in seconds." },
            { icon: "◷", title: "Smart Scheduling", desc: "AI suggests optimal posting times based on your audience engagement patterns." },
            { icon: "◈", title: "Analytics Dashboard", desc: "Track likes, shares, reach, and growth across all platforms in one place." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </div>
          <h3 className="text-white text-xl font-bold mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-white mb-1">
            $13<span className="text-xl text-[#8b949e] font-normal">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to grow your social presence</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited AI caption generation",
              "Schedule up to 500 posts/month",
              "4 social platforms connected",
              "Optimal time suggestions",
              "Analytics &amp; engagement tracking",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which social media platforms are supported?",
              a: "CaptionAI supports Instagram, Twitter/X, LinkedIn, and TikTok. You can connect all four platforms and schedule posts to each from a single dashboard."
            },
            {
              q: "How does the AI generate platform-specific captions?",
              a: "Our AI analyzes each platform's best practices, character limits, hashtag strategies, and tone preferences to craft captions that perform well natively on each network."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes, absolutely. You can cancel your subscription at any time with no questions asked. You'll retain access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} CaptionAI. All rights reserved.
      </footer>
    </main>
  );
}
