const programs = [
  {
    title: "Digital Marketing",
    icon: "📈",
    category: "Distribution & Growth",
    description: "Master audience acquisition, campaign analytics, social algorithms, and organic growth strategies for tech ventures and products.",
    color: "bg-git-accent",
    accentText: "text-git-accent",
    link: "https://forms.gle/79hqwjfPJrNXRRyf9",
    sessions: "3 Hands-On Sessions",
    takeaway: "Learn to build distribution channels that generate thousands of views and customers for $0."
  },
  {
    title: "Copywriting",
    icon: "✍️",
    category: "Persuasion & Sales",
    description: "Craft magnetic words that sell. Master psychological hooks, landing page storytelling, email marketing, and conversion copywriting.",
    color: "bg-git-sage",
    accentText: "text-git-sage",
    link: "https://forms.gle/RNXKeDCPnt2iS9no8",
    sessions: "3 Hands-On Sessions",
    takeaway: "Transform passive readers into active buyers, community members, and investors."
  },
  {
    title: "Graphics Design",
    icon: "🎨",
    category: "Visual Identity & UI",
    description: "Design stunning visual systems, brand identities, pitch assets, and modern interface layouts using Figma and industry tools.",
    color: "bg-git-ocean",
    accentText: "text-git-ocean",
    link: "https://forms.gle/dHryemBXjvbUaX4h6",
    sessions: "3 Hands-On Sessions",
    takeaway: "Establish instant credibility and command premium pricing with world-class aesthetics."
  },
  {
    title: "Vibe Coding",
    icon: "⚡",
    category: "AI & Rapid Prototyping",
    description: "Build and deploy production-ready web apps in hours using modern AI coding agents, natural language prompting, and modern frameworks.",
    color: "bg-git-forest",
    accentText: "text-git-forest",
    link: "https://forms.gle/zcZ39HQyNMaP65MW6",
    sessions: "3 Hands-On Sessions",
    takeaway: "Bypass syntax roadblocks and turn complex software ideas into reality in a single weekend."
  },
  {
    title: "Automation",
    icon: "⚙️",
    category: "Systems & 10x Leverage",
    description: "Streamline repetitive digital tasks, connect apps with APIs, and build intelligent no-code automated workflows that run 24/7.",
    color: "bg-git-yellow",
    accentText: "text-git-yellow",
    link: "https://forms.gle/8QgzFQ7Pd8F7Ezhe9",
    sessions: "3 Hands-On Sessions",
    takeaway: "Save 15+ hours every week and run a multi-person business operation as a solo student."
  },
  {
    title: "Financial Literacy",
    icon: "💼",
    category: "Wealth & Equity Management",
    description: "Master personal and startup financial management, cross-border freelance monetization, equity allocation, budgeting, and long-term wealth compounding.",
    color: "bg-[#7C3AED]",
    accentText: "text-[#7C3AED]",
    link: "https://forms.gle/sACU5y985mM597Dt6",
    sessions: "3 Hands-On Sessions",
    takeaway: "Retain your income, navigate foreign exchange, and structure venture ownership wisely."
  },
];

const caseStudies = [
  {
    title: "Digital Marketing",
    icon: "📈",
    advantage: "Audience & Zero-Cost Distribution",
    caseStudy:
      "A campus founder developed a student marketplace app but had zero users. By applying organic content funnels, campus-specific micro-influencer strategies, and algorithmic TikTok hooks, she onboarded 2,400 active UI students in 3 weeks with zero advertising budget.",
    tip: "Distribution eats product for breakfast. Even the most brilliant software dies in obscurity without a deliberate marketing engine.",
    keyMetric: "0 Budget → 2,400+ Active Users"
  },
  {
    title: "Copywriting",
    icon: "✍️",
    advantage: "High-Ticket Conversion & Persuasion",
    caseStudy:
      "A student freelancer was pitching international clients for technical writing and getting ignored with generic proposals. After rewriting his cold outreach and portfolio with benefit-driven hooks and objection-handling copy, his response rate jumped from 3% to 28%, landing him two $800/mo retainer clients.",
    tip: "Features tell, benefits sell. People don't buy your service; they buy the transformation and certainty your words deliver.",
    keyMetric: "3% → 28% Cold Pitch Response Rate"
  },
  {
    title: "Graphics Design",
    icon: "🎨",
    advantage: "Instant Trust & Perceived Value",
    caseStudy:
      "A group of engineering students built an AI tool for exam prep but their MVP looked unpolished and untrustworthy. A design overhaul—clean typography, cohesive color palette, and sleek mockups—helped them win a $1,500 hackathon grant because judges immediately trusted their execution quality.",
    tip: "Users judge your credibility in the first 50 milliseconds. Exceptional design is how you signal excellence before a user reads a single line of text.",
    keyMetric: "Instant Credibility → $1,500 Grant Win"
  },
  {
    title: "Vibe Coding",
    icon: "⚡",
    advantage: "Speed of Execution with AI",
    caseStudy:
      "A non-technical economics major had an idea for an automated CGPA calculator and academic progress tracker for UI students. Instead of waiting 6 months to learn syntax from scratch, he used AI coding assistants and natural language prompting to ship a live, responsive web app in 36 hours.",
    tip: "You no longer need a 4-year computer science degree to ship software. Master problem decomposition and let AI act as your junior engineering team.",
    keyMetric: "Concept to Live Web App in 36 Hours"
  },
  {
    title: "Automation",
    icon: "⚙️",
    advantage: "10x Output & Time Multiplication",
    caseStudy:
      "A student society executive spent 5 hours every Monday manually checking payment receipts, updating spreadsheets, and sending confirmation emails. By building a 3-step automation workflow linking Google Forms, webhooks, and email triggers, registrations are verified in 2 seconds with zero human error.",
    tip: "Never do manually what code can do on autopilot. If you repeat a digital task more than twice, automate it immediately.",
    keyMetric: "5 Hours Weekly Chores → 2 Seconds Auto"
  },
  {
    title: "Financial Literacy",
    icon: "💼",
    advantage: "Wealth Preservation & Equity Protection",
    caseStudy:
      "A student who started earning remote freelance income in dollars quickly fell into panic when tax and currency fluctuation ate into his earnings. Financial literacy training taught him how to hedge currency risk, budget for operational runway, and retain equity when approached by outside investors.",
    tip: "Revenue is vanity, profit is sanity, but cash flow is reality. Earning money is half the battle; knowing how to keep, protect, and multiply it guarantees independence.",
    keyMetric: "Avoided Bad Equity Dilution & Currency Losses"
  },
];

const ProgramsPage = () => {
  return (
    <div className="bg-git-base min-h-screen">
      {/* ── HERO BANNER: BIG & BOLD ── */}
      <section className="container-page pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-git-accent-soft text-git-accent font-semibold text-xs sm:text-sm tracking-wider uppercase mb-8 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-git-accent animate-pulse" />
            JCIN UI × Grow In Tech (GiT) Presents
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-git-title uppercase leading-[1.05] mb-8">
            Digital Skill Up 2026 <br />
            <span className="text-git-accent relative inline-block">
              : The Intelligent Creator Workshop
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-git-accent/40"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-git-accent max-w-3xl mx-auto leading-relaxed font-semibold mb-4">
            Digital Skills for The AI Era.
          </p>
          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-git-muted max-w-3xl mx-auto leading-relaxed font-normal">
            Six high-leverage masterclass tracks engineered to turn university students from passive technology consumers into self-sufficient, high-earning creators and builders. Featuring top trainers from reputable brands and organizations.
          </p>

          {/* Quick value badges */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-git-title">
            <span className="px-4 py-2 rounded-xl bg-git-surface border border-git-border shadow-xs">
              ⚡ 6 Specialised Tracks
            </span>
            <span className="px-4 py-2 rounded-xl bg-git-surface border border-git-border shadow-xs">
              👨‍🏫 Top Industry Trainers
            </span>
            <span className="px-4 py-2 rounded-xl bg-git-surface border border-git-border shadow-xs">
              🛠️ 3-Session Practical Sprints
            </span>
            <span className="px-4 py-2 rounded-xl bg-git-surface border border-git-border shadow-xs">
              💻 Sep 16-18 • Fully Online & Free
            </span>
          </div>

          {/* Jump to Why Tech Skills CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tracks"
              className="btn-primary py-3.5 px-8 text-base font-bold shadow-md hover:shadow-git-accent/20"
            >
              Choose Your Track &rarr;
            </a>
            <a
              href="#why-tech-skills"
              className="btn-ghost py-3.5 px-6 text-sm font-semibold text-git-muted hover:text-git-title"
            >
              Why Learn Tech Skills? (Case Studies) &darr;
            </a>
          </div>
        </div>
      </section>

      {/* ── TRACKS GRID ── */}
      <section id="tracks" className="container-page pb-28">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="section-eyebrow mb-2">CHOOSE YOUR FOCUS</p>
          <h2 className="section-heading text-git-title">
            The Six Masterclass Tracks
          </h2>
          <p className="section-subheading mx-auto">
            Select up to two tracks that align with your ambitions to stack your capabilities (Max 2 tracks per person to avoid schedule conflicts).
          </p>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <li
              key={program.title}
              className="flex flex-col relative overflow-hidden glass-card p-8 sm:p-9 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-git-border"
            >
              {/* Color Stripe Header */}
              <div className={`absolute top-0 left-0 right-0 h-2 ${program.color}`} />

              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-3xl p-2 rounded-xl bg-git-surface-2">{program.icon}</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-git-surface-2 text-git-muted border border-git-border">
                  {program.category}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-git-title tracking-tight mt-2">
                {program.title}
              </h3>

              <p className="mt-4 font-sans text-git-muted text-sm leading-relaxed">
                {program.description}
              </p>

              <div className="mt-6 pt-4 border-t border-git-border flex-grow">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-git-accent mb-1">
                  Core Takeaway
                </p>
                <p className="font-sans text-xs text-git-body leading-relaxed">
                  {program.takeaway}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-git-border flex items-center justify-between">
                <span className="text-xs font-medium text-git-caption">
                  {program.sessions}
                </span>
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-bold text-sm text-git-accent hover:text-git-accent-hover transition-colors inline-flex items-center gap-1.5"
                >
                  Register Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CASE STUDIES & BENEFITS SECTION ── */}
      <section id="why-tech-skills" className="py-24 bg-git-surface-2/60 border-y border-git-border">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="section-eyebrow mb-3">CASE STUDIES &amp; REAL-WORLD LEVERAGE</p>
            <h2 className="section-heading text-git-title text-3xl sm:text-4xl lg:text-5xl">
              Why Learn Tech Skills? The Intelligent Creator Advantage
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-git-muted">
              In a modern economy, a certificate tells someone what you studied, but tech skills prove what you can actually build, communicate, and deliver. Here is how each track transforms student potential into undeniable results:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article
                key={item.title}
                className="glass-card p-8 flex flex-col justify-between relative overflow-hidden bg-git-surface hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl p-2 rounded-lg bg-git-surface-2">{item.icon}</span>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-git-title">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs font-semibold text-git-accent">
                        {item.advantage}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 bg-git-surface-2/70 p-4 rounded-xl border border-git-border/60">
                    <p className="font-sans text-xs font-bold uppercase tracking-wider text-git-title mb-1.5">
                      Case Study Example:
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-git-body leading-relaxed">
                      {item.caseStudy}
                    </p>
                    <div className="mt-3 pt-2 border-t border-git-border/40 inline-block font-sans text-xs font-bold text-git-accent">
                      ✓ Impact: {item.keyMetric}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-git-border">
                  <p className="font-sans text-xs font-bold uppercase tracking-wider text-git-muted mb-1">
                    💡 Creator Tip
                  </p>
                  <p className="font-sans text-xs text-git-title italic leading-relaxed">
                    &ldquo;{item.tip}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* ── THE SKILL STACKING FORMULA ── */}
          <div className="mt-16 glass-card p-8 sm:p-12 border-git-accent/40 bg-gradient-to-br from-git-surface via-git-accent-soft/20 to-git-surface">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-git-accent text-git-dark text-xs font-extrabold uppercase tracking-wider mb-4">
                The Multiplier Effect
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-git-title mb-4">
                The Intelligent Creator Formula: 1 + 1 = 10
              </h3>
              <p className="font-sans text-base text-git-body leading-relaxed mb-8">
                Tech skills do not exist in isolation. The most valuable creators stack them together to build unfair advantages in their careers:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center mb-8">
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">⚡</span>
                  <p className="text-xs font-bold text-git-title">Vibe Coding</p>
                  <p className="text-[10px] text-git-muted">To Build Fast</p>
                </div>
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">🎨</span>
                  <p className="text-xs font-bold text-git-title">Graphics</p>
                  <p className="text-[10px] text-git-muted">To Look Premium</p>
                </div>
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">✍️</span>
                  <p className="text-xs font-bold text-git-title">Copywriting</p>
                  <p className="text-[10px] text-git-muted">To Persuade</p>
                </div>
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">📈</span>
                  <p className="text-xs font-bold text-git-title">Marketing</p>
                  <p className="text-[10px] text-git-muted">To Reach Crowds</p>
                </div>
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">⚙️</span>
                  <p className="text-xs font-bold text-git-title">Automation</p>
                  <p className="text-[10px] text-git-muted">To Scale 10x</p>
                </div>
                <div className="p-3 bg-git-surface rounded-xl border border-git-border shadow-2xs">
                  <span className="block text-xl mb-1">💼</span>
                  <p className="text-xs font-bold text-git-title">Finance</p>
                  <p className="text-[10px] text-git-muted">To Keep Wealth</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <a
                  href="#tracks"
                  className="btn-primary py-3 px-8 text-sm sm:text-base font-bold"
                >
                  Pick Your Masterclass Track &rarr;
                </a>
                <a
                  href="https://chat.whatsapp.com/EoZRm6mqTG2AYHAp9O2SIM?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost py-3 px-6 text-sm font-semibold text-git-title inline-flex items-center gap-2"
                >
                  Join the Kommunity &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
