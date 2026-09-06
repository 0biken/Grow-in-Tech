const ContactPage = () => {
  return (
    <div className="container-page py-20 lg:py-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="section-eyebrow mb-6">CONTACT</p>
        <h1 className="section-heading text-git-title mb-6">
          Let's keep in touch
        </h1>
        <p className="section-subheading mx-auto">
          Have questions about GiT, our programs, or partnerships? Reach out directly.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 glass-card overflow-hidden h-fit">
          <a
            href="mailto:git.kommunity@gmail.com"
            className="flex justify-between items-center p-6 border-b border-git-border hover:bg-git-surface-2 transition-colors duration-200 group"
          >
            <div>
              <p className="font-sans text-sm font-semibold text-git-title mb-1">Email us</p>
              <p className="font-sans text-git-muted text-sm">git.kommunity@gmail.com</p>
            </div>
            <span className="text-git-muted group-hover:text-git-accent transition-colors">&rarr;</span>
          </a>
          
          <a
            href="tel:+2348162860397"
            className="flex justify-between items-center p-6 border-b border-git-border hover:bg-git-surface-2 transition-colors duration-200 group"
          >
            <div>
              <p className="font-sans text-sm font-semibold text-git-title mb-1">Call us</p>
              <p className="font-sans text-git-muted text-sm">+234 816 286 0397</p>
            </div>
            <span className="text-git-muted group-hover:text-git-accent transition-colors">&rarr;</span>
          </a>
          
          <div
            className="flex justify-between items-center p-6 hover:bg-git-surface-2 transition-colors duration-200 group"
          >
            <div>
              <p className="font-sans text-sm font-semibold text-git-title mb-1">Visit campus</p>
              <p className="font-sans text-git-muted text-sm">University of Ibadan, Nigeria</p>
            </div>
            <span className="text-git-muted group-hover:text-git-accent transition-colors">&rarr;</span>
          </div>
        </div>

        <div className="lg:col-span-3 glass-card p-8 sm:p-10">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block mb-2 font-sans text-sm font-medium text-git-body">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-xl border border-git-border bg-git-surface px-4 py-3 font-sans text-git-title focus:border-git-accent focus:ring-1 focus:ring-git-accent outline-none transition-shadow"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-sans text-sm font-medium text-git-body">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-xl border border-git-border bg-git-surface px-4 py-3 font-sans text-git-title focus:border-git-accent focus:ring-1 focus:ring-git-accent outline-none transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-sans text-sm font-medium text-git-body">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-xl border border-git-border bg-git-surface px-4 py-3 font-sans text-git-title focus:border-git-accent focus:ring-1 focus:ring-git-accent outline-none transition-shadow resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full py-4 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
