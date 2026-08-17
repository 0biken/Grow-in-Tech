import { Link } from "react-router-dom";

const GetInvolvedPage = () => {
  return (
    <div className="container-page max-w-5xl py-12 sm:py-16">
      <h1 className="text-center text-[length:var(--text-h1)] font-extrabold text-git-white">
        Get Involved
      </h1>
      <p className="section-subheading mx-auto max-w-2xl">
        Whether you want to join our community or help shape its future as part
        of the founding committee, there is a place for you here.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="flex flex-col items-start rounded-3xl border border-git-accent/30 bg-git-accent/10 p-8 sm:p-10">
          <h2 className="text-[length:var(--text-h3)] font-bold text-git-light">
            Join GiT
          </h2>
          <p className="mt-4 flex-grow font-sans leading-relaxed text-git-muted">
            Become a general member to get exclusive access to our workshops,
            bootcamps, and community events. We welcome students from all
            departments and backgrounds.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full rounded-full bg-git-accent-solid px-8 py-3.5 text-center font-sans font-bold text-git-white transition-colors duration-150 hover:bg-git-accent-hover"
          >
            Apply for Membership
          </Link>
        </section>

        <section className="flex flex-col items-start rounded-3xl border border-git-border bg-git-surface p-8 sm:p-10">
          <h2 className="text-[length:var(--text-h3)] font-bold text-git-white">
            Founding Committee
          </h2>
          <p className="mt-4 flex-grow font-sans leading-relaxed text-git-muted">
            We are recruiting for nine essential roles to help build the
            foundation of GiT. If you have what it takes to lead, organise, and
            execute, apply today.
          </p>
          <Link
            to="/register"
            className="mt-8 w-full rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-center font-sans font-bold text-git-white transition-colors duration-150 hover:bg-white/20"
          >
            View Roles &amp; Apply
          </Link>
        </section>
      </div>

      <section className="mt-16 rounded-3xl border border-git-border bg-git-surface p-8 text-center sm:p-10">
        <h2 className="text-[length:var(--text-h3)] font-bold text-git-white">
          Want to partner with us?
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-sans leading-relaxed text-git-muted">
          Learn how your organisation can support the next generation of tech
          leaders.
        </p>
        <a
          href="mailto:git.kommunity@gmail.com?subject=Sponsorship%20enquiry"
          className="mt-6 inline-block rounded-full border border-git-accent px-7 py-3 font-sans font-bold text-git-light transition-colors duration-150 hover:bg-git-accent-solid hover:text-git-white"
        >
          Request the prospectus
        </a>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
