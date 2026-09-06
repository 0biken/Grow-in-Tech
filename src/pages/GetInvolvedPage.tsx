import { Link } from "react-router-dom";

const GetInvolvedPage = () => {
  return (
    <div className="container-page py-20 lg:py-32">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <p className="section-eyebrow mb-6">GET INVOLVED</p>
        <h1 className="section-heading text-git-title mb-8">
          Join the movement
        </h1>
        <p className="section-subheading mx-auto max-w-2xl">
          Whether you want to join our community or help shape its future as part
          of the founding committee, there is a place for you here.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-24">
        <section className="glass-card p-10 flex flex-col items-start relative overflow-hidden group">
          <div className="absolute inset-0 bg-git-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title relative z-10">
            Join GiT
          </h2>
          <p className="mt-4 mb-10 flex-grow font-sans leading-relaxed text-git-muted relative z-10">
            Become a general member to get exclusive access to our workshops,
            bootcamps, and community events. We welcome students from all
            departments and backgrounds.
          </p>
          <Link
            to="/programs"
            className="btn-primary w-full text-center relative z-10"
          >
            Apply for Membership
          </Link>
        </section>

        <section className="glass-card p-10 flex flex-col items-start relative overflow-hidden">
          <h2 className="text-[length:var(--text-h3)] font-heading font-bold text-git-title">
            Founding Committee
          </h2>
          <p className="mt-4 mb-6 font-sans leading-relaxed text-git-muted">
            We are recruiting for nine essential roles to help build the foundation of GiT. If you have what it takes to lead, organise, and execute, apply today.
          </p>
          <ul className="mb-10 font-sans text-sm text-git-body grid grid-cols-2 gap-2 w-full">
            <li>• Lead & Co-Lead</li>
            <li>• General Secretary</li>
            <li>• Technical Lead</li>
            <li>• PR/Marketing Lead</li>
            <li>• Programmes Lead</li>
            <li>• Design Lead</li>
            <li>• Finance Lead</li>
            <li>• Community Manager</li>
          </ul>
          <Link
            to="/contact"
            className="btn-ghost w-full text-center mt-auto"
          >
            Contact us to apply
          </Link>
        </section>
      </div>

      <section className="glass-card p-12 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-git-accent" />
        <h2 className="text-[length:var(--text-h2)] font-heading font-bold text-git-title mb-6">
          Want to partner with us?
        </h2>
        <p className="mx-auto max-w-xl font-sans text-lg leading-relaxed text-git-muted mb-10">
          Learn how your organisation can support the next generation of tech leaders at the University of Ibadan.
        </p>
        <a
          href="mailto:git.kommunity@gmail.com?subject=Sponsorship%20enquiry"
          className="btn-primary inline-flex"
        >
          Request the prospectus
        </a>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
