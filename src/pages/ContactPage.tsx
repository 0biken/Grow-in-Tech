const ContactPage = () => {
  return (
    <div className="container-page max-w-3xl py-12 text-center sm:py-16">
      <h1 className="text-[length:var(--text-h1)] font-extrabold text-git-white">
        Contact Us
      </h1>
      <p className="section-subheading mx-auto max-w-xl">
        Have questions about GiT, our programs, or partnerships? Reach out
        directly.
      </p>

      <div className="mt-14 flex flex-col items-center gap-8 rounded-3xl border border-git-border bg-git-surface p-8 sm:p-10">
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-git-light">
            General Inquiries
          </h2>
          <a
            href="mailto:git.kommunity@gmail.com"
            className="mt-2 inline-block text-xl font-bold text-git-white transition-colors duration-150 hover:text-git-accent sm:text-2xl"
          >
            git.kommunity@gmail.com
          </a>
        </div>

        <div className="h-px w-16 bg-git-border" role="presentation" />

        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-git-light">
            Call Us
          </h2>
          <a
            href="tel:+2348162860397"
            className="mt-2 inline-block text-xl font-bold text-git-white transition-colors duration-150 hover:text-git-accent"
          >
            +234 816 286 0397
          </a>
          <p className="mt-1 font-sans text-sm text-git-muted">
            Ezeocha Obioma (GiT Lead)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
