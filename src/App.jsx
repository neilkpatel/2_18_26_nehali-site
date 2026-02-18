function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="text-lg font-semibold text-gray-900 hover:text-accent-600 transition-colors">
            Nehali Patel
          </button>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => scrollTo('about')} className="hover:text-accent-600 transition-colors">About</button>
            <button onClick={() => scrollTo('experience')} className="hover:text-accent-600 transition-colors">Experience</button>
            <button onClick={() => scrollTo('services')} className="hover:text-accent-600 transition-colors">Services</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-accent-600 transition-colors">Skills</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-accent-600 transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="w-40 h-40 rounded-full overflow-hidden mb-8 ring-4 ring-accent-100">
            <img
              src="/headshot.png"
              alt="Nehali Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Nehali Patel</h1>
          <p className="text-xl md:text-2xl text-accent-600 font-medium mb-6">
            User Research & Digital Strategy Consultant
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
            I conduct mixed-methods research to uncover actionable insights that drive product growth.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollTo('experience')}
              className="px-8 py-3 border-2 border-gray-200 rounded-lg font-medium hover:border-accent-600 hover:text-accent-600 transition-colors"
            >
              View Experience
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-12">
            With over 12 years leading user research at companies like Peloton, Vimeo, and PwC, I help product teams
            make confident, customer-informed decisions. I specialize in building research practices from the ground
            up and translating qualitative and quantitative findings into product strategy that moves the needle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { number: '12+', label: 'Years Experience' },
              { number: '7', label: 'Fortune 500 Clients' },
              { number: 'Kellogg', label: 'MBA' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent-600">{stat.number}</div>
                <div className="text-gray-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-0">
            {[
              {
                company: 'Freelance',
                title: 'Lead User Researcher',
                period: '2024 – Present',
                highlights: [
                  'Partnering with startups and enterprise clients to lead end-to-end research initiatives',
                  'Delivering strategic insights that inform product roadmaps and go-to-market strategy',
                ],
              },
              {
                company: 'Peloton',
                title: 'Director of User Research',
                period: '2021 – 2024',
                highlights: [
                  'Led a team of researchers supporting hardware, software, and content product lines',
                  'Established scalable research operations and insight repositories across the organization',
                ],
              },
              {
                company: 'Vimeo',
                title: 'Senior Manager, UX Research',
                period: '2020 – 2021',
                highlights: [
                  'Built and managed the UX research function for Vimeo\'s enterprise video platform',
                  'Drove research-informed product decisions for key growth and retention initiatives',
                ],
              },
              {
                company: 'PwC',
                title: 'Manager, User Research & Product Strategy',
                period: '2013 – 2020',
                highlights: [
                  'Led user research and product strategy for digital transformation engagements across Fortune 500 clients',
                  'Developed human-centered design practices within PwC\'s consulting practice',
                ],
              },
            ].map((role, i) => (
              <div key={role.company} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {i < 3 && (
                  <div className="absolute left-[7px] top-3 bottom-0 w-px bg-accent-200" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full bg-accent-600 ring-4 ring-accent-50" />
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                    <h3 className="text-xl font-bold">{role.company}</h3>
                    <span className="text-sm text-gray-400 font-medium">{role.period}</span>
                  </div>
                  <p className="text-accent-600 font-medium mb-3">{role.title}</p>
                  <ul className="space-y-1">
                    {role.highlights.map((h) => (
                      <li key={h} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent-400 mt-1 shrink-0">&#8226;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What I Do</h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            I offer a range of research and strategy services tailored to your product team's needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'User Research Strategy',
                desc: 'Design comprehensive research programs aligned with business goals — from stakeholder alignment to methodology selection and roadmap planning.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                ),
              },
              {
                title: 'Usability Testing & Insights',
                desc: 'Plan and execute moderated and unmoderated usability studies, synthesize findings, and deliver clear recommendations your team can act on.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: 'Product & Growth Research',
                desc: 'Identify opportunities for product-led growth through competitive analysis, customer segmentation, and behavioral research.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
              {
                title: 'Research Team Building & Ops',
                desc: 'Stand up research functions from scratch — hiring, tooling, processes, and templates — so your team can scale insight-driven decisions.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl border border-gray-100 hover:border-accent-200 hover:shadow-md transition-all"
              >
                <div className="text-accent-600 mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Methods</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'User Interviews',
              'Usability Testing',
              'Survey Design & Analysis',
              'Journey Mapping',
              'Persona Development',
              'A/B Testing',
              'Card Sorting',
              'Heuristic Evaluation',
              'Competitive Analysis',
              'Diary Studies',
              'Stakeholder Workshops',
              'Research Ops',
              'Quantitative Analysis',
              'Ethnographic Research',
              'Prototype Testing',
              'Information Architecture',
              'Data Synthesis',
              'Research Democratization',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <h3 className="text-xl font-bold mb-1">Kellogg School of Management</h3>
              <p className="text-accent-600 font-medium mb-1">MBA</p>
              <p className="text-gray-400 text-sm">Northwestern University</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <h3 className="text-xl font-bold mb-1">University of Miami</h3>
              <p className="text-accent-600 font-medium mb-1">BBA</p>
              <p className="text-gray-400 text-sm">Herbert Business School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Looking for a research partner to help your team make better product decisions? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nehalikpatel@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/nehalipatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 rounded-lg font-medium hover:border-accent-600 hover:text-accent-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Nehali Patel. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
