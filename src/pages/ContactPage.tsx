import { useRef, type FormEvent } from "react";
import { ArrowUpRight, EnvelopeSimple, Phone, MapPin, PaperPlaneTilt } from "@phosphor-icons/react";
import { Icon } from "../components/Icon";
import { CONTACT_EMAIL, CONTACT_PHONE } from "../content/site";
import { useReveal } from "../hooks/useReveal";

const fieldClass =
  "w-full rounded-2xl border border-git-border bg-git-surface-2/60 px-4 py-3.5 text-git-title outline-none transition-[border-color,box-shadow,background-color] duration-300 focus:border-git-accent focus:bg-git-surface focus:ring-4 focus:ring-git-accent/15";

const ContactPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = values.get("name");
    const email = values.get("email");
    const message = values.get("message");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const channels = [
    { label: "Email us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: EnvelopeSimple },
    { label: "Call us", value: CONTACT_PHONE.display, href: CONTACT_PHONE.href, icon: Phone },
  ];

  return (
    <div ref={ref} className="container-page pb-24 pt-14 md:pb-36 md:pt-20">
      <div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
        <div className="lg:col-span-7">
          <p className="kicker mb-6">Contact</p>
          <h1 className="text-[length:var(--text-display)] leading-[1.0]">Let&apos;s keep in touch.</h1>
        </div>
        <p className="max-w-md text-lg leading-relaxed text-git-muted lg:col-span-5">
          Questions about GiT, our programs, or partnerships? Reach out directly.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12" data-reveal-stagger>
        <div className="flex flex-col gap-4 lg:col-span-5">
          {channels.map((channel) => (
            <a key={channel.label} href={channel.href} className="bezel bezel-hover group block">
              <div className="bezel-core flex items-center justify-between gap-4 p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                    <Icon icon={channel.icon} size={22} weight="light" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-git-title">{channel.label}</p>
                    <p className="mt-0.5 break-all text-sm text-git-muted">{channel.value}</p>
                  </div>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-git-surface-2 text-git-title transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true">
                  <Icon icon={ArrowUpRight} size={16} />
                </span>
              </div>
            </a>
          ))}
          <div className="bezel">
            <div className="bezel-core flex items-center gap-4 p-6 sm:p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-git-surface-2 text-git-link">
                <Icon icon={MapPin} size={22} weight="light" />
              </span>
              <div>
                <p className="text-sm font-semibold text-git-title">Find us on campus</p>
                <p className="mt-0.5 text-sm text-git-muted">University of Ibadan, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bezel lg:col-span-7">
          <div className="bezel-core p-7 sm:p-10">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-git-body">Name</label>
                  <input type="text" id="name" name="name" autoComplete="name" required className={fieldClass} placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-git-body">Email</label>
                  <input type="email" id="email" name="email" autoComplete="email" spellCheck={false} required className={fieldClass} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-git-body">Message</label>
                <textarea id="message" name="message" required rows={6} className={`${fieldClass} resize-none`} placeholder="How can we help you?" />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-git-muted">This opens your email app with your message ready to send.</p>
                <button type="submit" className="btn btn-primary btn-has-icon shrink-0">
                  <span>Compose email</span>
                  <span className="btn-icon" aria-hidden="true"><Icon icon={PaperPlaneTilt} size={16} weight="bold" /></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
